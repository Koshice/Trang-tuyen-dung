import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//   authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDBA5FNPxamfWTFpkNd2agGcqn4E_9Y9fc",
  authDomain: "trang-tuyen-dung-1ac8a.firebaseapp.com",
  projectId: "trang-tuyen-dung-1ac8a",
  storageBucket: "trang-tuyen-dung-1ac8a.appspot.com",
  messagingSenderId: "170553594958",
  appId: "1:170553594958:web:48c9c3f83168b59a661f1f",
  measurementId: "G-JN7ZLF6QKQ"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app)