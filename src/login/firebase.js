import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3cURLpcKlwasG9Q6u3MUZaOBRyGyKsY0",
  authDomain: "mogmart-d3910.firebaseapp.com",
  projectId: "mogmart-d3910",
  storageBucket: "mogmart-d3910.appspot.com",
  messagingSenderId: "239149841588",
  appId: "1:239149841588:web:40f1fa7256da4574176be1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
export const database = getAuth(app);
export { app };
