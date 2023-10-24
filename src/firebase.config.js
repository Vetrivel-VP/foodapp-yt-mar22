import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGzYZt9_RzV_hzveU2UJJ-h_cilo4THgY",
  authDomain: "food-website-e28e0.firebaseapp.com",
  databaseURL: "https://food-website-e28e0-default-rtdb.firebaseio.com",
  projectId: "food-website-e28e0",
  storageBucket: "food-website-e28e0.appspot.com",
  messagingSenderId: "629548881279",
  appId: "1:629548881279:web:fac30d5e54913bdccff64a",
  measurementId: "G-PK33BPG43N"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
