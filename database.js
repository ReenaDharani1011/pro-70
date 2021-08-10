import firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
    apiKey: "AIzaSyDqIsOgRWI7UozwZ_0s-V5TJ6hrHc7_veA",
    authDomain: "storyhub-3d470.firebaseapp.com",
    projectId: "storyhub-3d470",
    storageBucket: "storyhub-3d470.appspot.com",
    messagingSenderId: "428041500052",
    appId: "1:428041500052:web:25cd0cf55b02201316cb81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()