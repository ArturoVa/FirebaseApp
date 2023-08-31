// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDaC9wenVz7fdRzRdJ3GB3DzikD04JEp4",
  authDomain: "cursodefirebase-45939.firebaseapp.com",
  projectId: "cursodefirebase-45939",
  storageBucket: "cursodefirebase-45939.appspot.com",
  messagingSenderId: "332302468415",
  appId: "1:332302468415:web:c0a3fe29826a33bcc1bf8a"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
