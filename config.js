import * as firebase from "firebase";
require("@firebase/firestore");

  
   const firebaseConfig = {
  apiKey: "AIzaSyDQqD8pbISNodVomyZz0peMkYskotFFCas",
  authDomain: "project---73-b6e4a.firebaseapp.com",
  projectId: "project---73-b6e4a",
  storageBucket: "project---73-b6e4a.appspot.com",
  messagingSenderId: "416889461513",
  appId: "1:416889461513:web:c0447b65f5cf82298fd1d8"
};
 
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
