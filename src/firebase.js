import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

//your web app ´s firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGX8WHFornu26Au6M7X14PM5P991cagQ0",
  authDomain: "social-box-45ddb.firebaseapp.com",
  projectId: "social-box-45ddb",
  storageBucket: "social-box-45ddb.appspot.com",
  messagingSenderId: "668697983394",
  appId: "1:668697983394:web:d73b8200c8d9b2925bdafb"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export{
storage, firestore as default
} 
