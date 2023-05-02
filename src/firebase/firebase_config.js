// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2XH0eyCrOSEK1CCvrWek79AR9WHwPHb4",
  authDomain: "chef-recipe-website-b3e16.firebaseapp.com",
  projectId: "chef-recipe-website-b3e16",
  storageBucket: "chef-recipe-website-b3e16.appspot.com",
  messagingSenderId: "129534242188",
  appId: "1:129534242188:web:ed71b35730d04cdf68faa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;