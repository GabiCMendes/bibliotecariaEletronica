// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVQlR3YhCvMIoi003rfpZXZlHpQTMPGvM",
  authDomain: "biblioteca-eletronica-ad74f.firebaseapp.com",
  projectId: "biblioteca-eletronica-ad74f",
  storageBucket: "biblioteca-eletronica-ad74f.appspot.com",
  messagingSenderId: "927020005153",
  appId: "1:927020005153:web:2e46242f05fab53d4f3060"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()