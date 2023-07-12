// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: 'dev-collab-3c332.firebaseapp.com',
  projectId: 'dev-collab-3c332',
  storageBucket: 'dev-collab-3c332.appspot.com',
  messagingSenderId: '219170275395',
  appId: '1:219170275395:web:c29470fe56f756cfae14f6',
  measurementId: 'G-1JLNSKYESY',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
