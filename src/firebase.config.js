import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhXrMQoZrbwPGYvBrIB3drwdzm4ToGjtE",
  authDomain: "food-ordering-299d6.firebaseapp.com",
  databaseURL: "https://food-ordering-299d6-default-rtdb.firebaseio.com",
  projectId: "food-ordering-299d6",
  storageBucket: "food-ordering-299d6.appspot.com",
  messagingSenderId: "110403398954",
  appId: "1:110403398954:web:3c2b7d2ed33b950db08253",
  measurementId: "G-9D5HYD9BVX"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
