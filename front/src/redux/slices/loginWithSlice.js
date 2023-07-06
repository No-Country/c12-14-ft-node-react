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
  name: 'projectModal',
  initialState,
  reducers: {
    loginWithGoogle() {
      async function loginwWithGoogle() {
        const googleProvider = await new GoogleAuthProvider()
        const access = await signInWithPopup(auth, googleProvider)
        // TODO: add logic to save user data in redux
        console.log('proof loginGoogle', access)
      }

      loginwWithGoogle()
    },
    loginWithGithub() {
      async function loginwWithGithub() {
        const githubProvider = await new GithubAuthProvider()
        const access = await signInWithPopup(auth, githubProvider)
        // TODO: add logic to save user data in redux
        console.log('proof loginGithub', access)
      }

      loginwWithGithub()
    },
  },
})

export const { loginWithGoogle, loginWithGithub } = loginWithSlice.actions
export default loginWithSlice.reducer
