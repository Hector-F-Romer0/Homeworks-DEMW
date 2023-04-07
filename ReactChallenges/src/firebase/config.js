// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const auth = getauth();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyALjUpwRlgO1cd9-G4T1Z-prb58QKOVIOw",
	authDomain: "react-challenges-demw.firebaseapp.com",
	projectId: "react-challenges-demw",
	storageBucket: "react-challenges-demw.appspot.com",
	messagingSenderId: "913052671650",
	appId: "1:913052671650:web:07482a9c43a7aa63b441fb",
	measurementId: "G-HWDJGB8QXB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
