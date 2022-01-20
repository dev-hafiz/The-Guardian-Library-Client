import initializeAuthentication from "../Login/Firebase/firebase.init";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getIdToken,
} from "firebase/auth";

import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
  //State for store user Data
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  //Register with email & pass method
  const registerUser = ( email, password, name,location, navigate) =>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const destination = location?.state?.from || '/'
    navigate(destination)
    setError("");
    const newUser = {email, displayName:name}
    setUser(newUser)
    //Save User to The Database
    saveUser(email, name, 'POST')

    //Send name to firebase 
    updateProfile(auth.currentUser, {
     displayName: name
   }).then(() => {
     
   }).catch((error) => {
     
   });
   
  })
  .catch((error) => {
    setError(error.message);
  })
  .finally(() => setIsLoading(false));
  }

  //Login with email pass custom method 
  const loginWithOwnEmaiAndPass  = (email, password, location, navigate) =>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/'
      navigate(destination)
    setError('');
  })
  .catch((error) => {
    setError(error.message);
  })
  .finally(() => setIsLoading(false));
  }

  // Login with Google method
  const loginWithGoogle = (location, navigate) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        //Save User to The Database
         saveUser(user.email, user.displayName, 'PUT')
        const destination = location?.state?.from || '/'
        navigate(destination)
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Log out user method
  const userLogOut = () =>{
    setIsLoading(true)
    signOut(auth)
    .then(() => {
      
    }).catch((error) => {
      setError(error.message)
    })
    .finally(() => setIsLoading(false));
  }

  //Observer user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken =>{
          setToken(idToken)
        })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //Chack user Admin or not
  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then( res => res.json())
    .then( data => setIsAdmin(data.admin))
  },[user.email])


  //Save User To Database
  const saveUser = (email, displayName, method) =>{
      const user = {email, displayName};
      fetch('http://localhost:5000/users',{
        method:method,
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
  }

  return {
    user,
    loginWithGoogle,
    userLogOut,
    registerUser,
    isLoading,
    error,
    loginWithOwnEmaiAndPass,
    isAdmin,
    token
  };
};
export default useFirebase;
