import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  getIdToken,
  signOut,
} from "firebase/auth";

// Initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [role, setRole] = useState({});
  const [token, setToken] = useState("");
  const auth = getAuth();

  // User Registration
  const registerUser = (email, password, name, role, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name, role: role };
        setUser(newUser);

        // Save user to the database
        saveUser(email, name, role, "POST");

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // User Login
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location.state?.from || "/home";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Observe user state

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubcribed;
  }, []);

  const saveUser = (email, displayName, role, method) => {
    const user = { email, displayName, role };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data));
  }, [user.email, user.role]);

  // User Logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    authError,
    isLoading,
    registerUser,
    loginUser,
    role,
    token,
    logOut,
  };
};

export default useFirebase;

// import { useEffect, useState } from "react";
// import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// // Initialize firebase app
// initializeFirebase();

// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [authError, setAuthError] = useState('');
//     const auth = getAuth();

//     // User Registration
//     // const registerUser = (email, password) => {
//     //     setIsLoading(true)
//     //     createUserWithEmailAndPassword(auth, email, password)
//     //         .then((userCredential) => {
//     //             setAuthError('');
//     //         })
//     //         .catch((error) => {

//     //             setAuthError(error.message);

//     //         })
//     //         .finally(() => setIsLoading(false));
//     // }

//     const registerUser = (email, password, name, history) => {
//         setIsLoading(true)
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 setAuthError('');
//                 const newUser = { email, displayName: name };

//                 setUser(newUser);

//                 // Save user to the database
//                 savedUser(email, name)

//                 // send name to firebase after creation
//                 updateProfile(auth.currentUser, {
//                     displayName: name
//                 }).then(() => {

//                 }).catch((error) => {

//                 })
//                 history.replace('/');
//             })
//             .catch((error) => {

//                 setAuthError(error.message);

//             })
//             .finally(() => setIsLoading(false));
//     }

//     // User Login
//     const loginUser = (email, password, location, history) => {
//         setIsLoading(true)
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const destination = location?.history?.from || '/home';
//                 history.replace(destination);
//                 setAuthError('');
//             })
//             .catch((error) => {

//                 setAuthError(error.message)
//             })
//             .finally(() => setIsLoading(false));
//     }

//     // Observe user state

//     useEffect(() => {
//         const unsubcribed = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user)
//             } else {
//                 setUser({})
//             }
//             setIsLoading(false);
//         });

//         return () => unsubcribed;

//     }, [])

//     // User Logout
//     const logOut = () => {
//         setIsLoading(true);
//         signOut(auth).then(() => {
//             // Sign-out successful.
//         }).catch((error) => {
//             // An error happened.

//         })
//             .finally(() => setIsLoading(false));
//     }

//     const savedUser = (email, displayName) => {
//         const user = { email, displayName };
//         fetch(https://salty-scrubland-98916.herokuapp.com/users, {
//             method: 'POST',
//             headers: {
//             'content-type': 'application/json'
//         },
//             body: JSON.stringify(user)
//         })
//         .then()
//     }

// return {
//     user,
//     authError,
//     isLoading,
//     registerUser,
//     loginUser,
//     logOut,

// }

// }

// export default useFirebase;
