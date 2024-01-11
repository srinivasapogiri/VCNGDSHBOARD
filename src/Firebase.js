import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHbMNYMt-wi7CRDPmk9zhZ6LoJ-nuKvAM",
    authDomain: "vcng-65a5d.firebaseapp.com",
    projectId: "vcng-65a5d",
    storageBucket: "vcng-65a5d.appspot.com",
    messagingSenderId: "1009781907026",
    appId: "1:1009781907026:web:a0f66613bd32f22611098b",
    measurementId: "G-LB9G5H76RF"
  };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
 

console.log(app)

export { app, auth };

