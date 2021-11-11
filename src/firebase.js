import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjwnOE1Waj4PEcByDojz_sxUuoGszTEbM",
  authDomain: "clone-90147.firebaseapp.com",
  projectId: "clone-90147",
  storageBucket: "clone-90147.appspot.com",
  messagingSenderId: "51109304229",
  appId: "1:51109304229:web:2c88db7c6aa9270bdc7a4c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
