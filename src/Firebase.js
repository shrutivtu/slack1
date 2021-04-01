// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDTz9srbZ_z89TMZ94H7SAxsWW44h9ZIZA",
    authDomain: "slack-clone-yt-4373e.firebaseapp.com",
    projectId: "slack-clone-yt-4373e",
    storageBucket: "slack-clone-yt-4373e.appspot.com",
    messagingSenderId: "635841020493",
    appId: "1:635841020493:web:2545482e03e06623ebd204",
    measurementId: "G-9VNPRQMXHN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db };