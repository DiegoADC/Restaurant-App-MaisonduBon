import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from '../helpers'

const { VITE_APIKEY, VITE_AUTHDOMAIN, VITE_PROJECTID, VITE_STORAGEBUCKET, VITE_MESSAGINGSENDERID, VITE_APPID } = getEnvironments()

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export const firebaseDb = getFirestore(firebaseApp)
