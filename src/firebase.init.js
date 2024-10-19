// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR-h8wa23pyD5eG9Pfdj9LwWH4Q0k4QNE",
  authDomain: "chefcircle-5d278.firebaseapp.com",
  projectId: "chefcircle-5d278",
  storageBucket: "chefcircle-5d278.appspot.com",
  messagingSenderId: "1040002816311",
  appId: "1:1040002816311:web:d575583deb27eed8cf62b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
