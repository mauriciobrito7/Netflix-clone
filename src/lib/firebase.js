import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAXrEXW54xNCEkkbGa5foc9gb0pl2QdjAs",
  authDomain: "netflix-28f49.firebaseapp.com",
  projectId: "netflix-28f49",
  storageBucket: "netflix-28f49.appspot.com",
  messagingSenderId: "419385429094",
  appId: "1:419385429094:web:71ea70e94181c4c64271a7",
  measurementId: "G-NFDB7W1BJY",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
