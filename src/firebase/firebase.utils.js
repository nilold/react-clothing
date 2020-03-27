import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAY6KnMBRL0n33LWeCRyWz0g9wzMv-0eK0",
    authDomain: "playground-270320.firebaseapp.com",
    databaseURL: "https://playground-270320.firebaseio.com",
    projectId: "playground-270320",
    storageBucket: "playground-270320.appspot.com",
    messagingSenderId: "95101430558",
    appId: "1:95101430558:web:0e1b6846857fff5e31f70f",
    measurementId: "G-LG6TDC95XG"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;