// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBBXX3z8Rsw-sQtbAxCncgBsF87PNTQGA",
  authDomain: "cloud-database-intro.firebaseapp.com",
  projectId: "cloud-database-intro",
  storageBucket: "cloud-database-intro.appspot.com",
  messagingSenderId: "237707158990",
  appId: "1:237707158990:web:b8765f1aafb94b3540779f",
  measurementId: "G-345GZ0G76J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

// Get a list of cities from your database
async function getCities(database) {
    const usersCol = collection(database, 'Users');
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
  }