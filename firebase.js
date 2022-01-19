import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOTO48w3PuGFXMpTixBAim0WuE3Ddr2T8",
  authDomain: "twitter-clone-app-b13c1.firebaseapp.com",
  projectId: "twitter-clone-app-b13c1",
  storageBucket: "twitter-clone-app-b13c1.appspot.com",
  messagingSenderId: "401896131029",
  appId: "1:401896131029:web:8fece4522e616cb881155c"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };