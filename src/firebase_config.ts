// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQJsm-FED_CNk6slwEHgd0efuWxcAfZZw",
  authDomain: "mtb-neiva.firebaseapp.com",
  projectId: "mtb-neiva",
  storageBucket: "mtb-neiva.appspot.com",
  messagingSenderId: "178166814955",
  appId: "1:178166814955:web:0430d286391d57677a86ae",
};

const app = initializeApp(firebaseConfig);
var db = getFirestore(app);

export default db;
