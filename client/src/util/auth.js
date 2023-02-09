import { initializeApp } from "firebase/app";
import { getAuth,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut } from "firebase/auth";

import ax from './ax.js';

const firebaseConfig = {
  //firebaseConfig
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

var signUp = function(user) {
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      user.uid = userCredential.user.uid;

      ax.createUser(user);
      console.log('Created firebase user.');
    })
    .catch((error) => {
      console.log(error);
    });
};

var signIn = function(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      ax.getUser(user.uid);
      console.log('Firebase signIn successful.');
    })
    .catch((error) => {
      console.log(error);
    });
};

var logOut = function() {
  signOut(auth).then(() => {
    console.log('Firebase signOut successful.');
  }).catch((error) => {
    console.log(error);
  });
};

var methods = {
  signUp: signUp,
  signIn: signIn,
  logOut: logOut
};

export default methods;