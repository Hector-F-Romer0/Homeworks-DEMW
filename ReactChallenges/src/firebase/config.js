// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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
	appId: "1:913052671650:web:d85eac87b8a52b6db441fb",
	measurementId: "G-XB2DFY24EH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
