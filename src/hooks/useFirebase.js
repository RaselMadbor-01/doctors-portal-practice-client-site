import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase.int";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile ,
  signOut,
  getIdToken,
  GoogleAuthProvider,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const[token,setToken]=useState("");
  const [admin,setAdmin]=useState(false);
  const[error,setError]=useState("");
  const [isLoading,setIsLoading]=useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithRegister = (email, password,name,navigate,redirect_url) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
              const user = userCredential.user;
              const newUser={email,displayName:name};
              setUser(newUser);
              updateProfile(auth.currentUser, {
                displayName:name
              }).then(() => {
              
              }).catch((error) => {
            
              });
              setUser(user);
              setError("");
              savedUser(email,name,"POST");
              navigate(redirect_url);
              // ...
            })
            .catch((error) => {setError(error.message);setUser({})})
            .finally(()=>{
              setIsLoading(false)
            });
     
  };

  const signInWithLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
     
  };


  const signInWithGoogle = (navigate,redirect_url) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      setError("");
      savedUser(user.email,user.displayName,"PUT");
      navigate(redirect_url);
      // ...
    })
    .catch((error) => {
      setError(error.message);
      setUser({})
    })
    .finally(()=>{
      setIsLoading(false);
    })
     
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(function(idToken) {
          setToken(idToken);
        })
        .catch(function(error) {
          // Handle error
        })

       
        // ...
      } else {
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
    return ()=>unsubscribed
  }, []);

  useEffect(()=>{
    fetch(`https://whispering-sierra-38369.herokuapp.com/user/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
  },[user?.email])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});

      })
      .catch((error) => {
        // An error happened.
      })
      .finally(()=>{
        setIsLoading(false);
      })
  };
  const savedUser=(email,displayName,method)=>{
    const user={email,displayName};
    fetch("https://whispering-sierra-38369.herokuapp.com/users",{
      method:method,
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })

  }

  return {
    user,
    admin,
    token,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
    signInWithRegister,
    signInWithLogin,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;