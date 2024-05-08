import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCs1BdNQ9OTSm0LFPXQb4lIush9LJCCbfw",
  authDomain: "recipes-54d92.firebaseapp.com",
  databaseURL: "https://recipes-54d92-default-rtdb.firebaseio.com",
  projectId: "recipes-54d92",
  storageBucket: "recipes-54d92.appspot.com",
  messagingSenderId: "280840407512",
  appId: "1:280840407512:web:fd7e34b10a888361c9caad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 
