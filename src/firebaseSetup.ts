import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCs-7ga9VO2ItVHkJHr-JoGf_M7NHuaAks",
    authDomain: "jokes-app-cf943.firebaseapp.com",
    projectId: "jokes-app-cf943",
    storageBucket: "jokes-app-cf943.appspot.com",
    messagingSenderId: "445142825477",
    appId: "1:445142825477:web:a1ed9ac880f1d06d317a6c"
}; 


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();