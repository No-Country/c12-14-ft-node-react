import { createSlice } from '@reduxjs/toolkit'
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../../firebase/firebase'

const initialState = {
  login: {},
}

const loginWithSlice = createSlice({
  name: 'loginWith',
  initialState,
  reducers: {
    loginWithGoogle() {
      async function loginwWithGoogle() {
        try {
          const googleProvider = new GoogleAuthProvider()
          const access = await signInWithPopup(auth, googleProvider)
          // TODO: add logic to save user data in redux
          console.log('proof loginGoogle', access)
        } catch (error) {
          console.log(error.message)
        }
      }

      loginwWithGoogle()
    },
    loginWithGithub() {
      async function loginwWithGithub() {
        try {
          const githubProvider = new GithubAuthProvider()
          const access = await signInWithPopup(auth, githubProvider)
          // TODO: add logic to save user data in redux
          console.log('proof loginGithub', access)
        } catch (error) {
          console.log(error.message)
        }
      }

      loginwWithGithub()
    },
  },
})

export const { loginWithGoogle, loginWithGithub } = loginWithSlice.actions
export default loginWithSlice.reducer
