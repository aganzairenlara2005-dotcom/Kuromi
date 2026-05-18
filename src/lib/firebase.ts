import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const isConfigured = firebaseConfig.apiKey && firebaseConfig.apiKey !== 'PASTE_YOUR_API_KEY_HERE';

if (!isConfigured) {
  console.warn("Firebase configuration is missing. Please update firebase-applet-config.json with your credentials from the Firebase Console.");
}

const app = initializeApp(firebaseConfig);

// Initialize Firestore with the database ID from config
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  if (!isConfigured) {
    const error = new Error("Firebase is not configured. Please add your credentials to firebase-applet-config.json");
    console.error(error.message);
    throw error;
  }
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export const logout = () => signOut(auth);
