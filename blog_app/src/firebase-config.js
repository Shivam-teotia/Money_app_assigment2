import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB_b8Mml_N2t_jA5aIKy45Efn0ptwUlI2A",
  authDomain: "blog-app-365c6.firebaseapp.com",
  projectId: "blog-app-365c6",
  storageBucket: "blog-app-365c6.appspot.com",
  messagingSenderId: "598153581552",
  appId: "1:598153581552:web:86a575de7f0e955ae6c335",
  measurementId: "G-E6FFVM7PD4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
