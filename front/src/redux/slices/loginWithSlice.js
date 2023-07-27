import { createSlice } from '@reduxjs/toolkit'
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { uvaApi } from '../../api/index'

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

          const credential = GoogleAuthProvider.credentialFromResult(access)
          const token = credential.accessToken
          const body = {
            username: access.user.displayName,
            email: access.user.email,
            password: crypto.randomUUID(),
            picture: access.user.photoURL,
            token: token | access._tokenResponse.idToken,
          }
          if (access.user.emailVerified) {
            const login = uvaApi.post('/auth/google/register', body)
            console.log(body, login, access, token)
          }
          // TODO: add logic to save user data in redux
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
          const body = {
            username: access.user.displayName,
            email: access.user.email,
            password: crypto.randomUUID(),
            picture: access.user.photoURL,
            token: access._tokenResponse.oauthAccessToken,
          }
          if (access.user.emailVerified) {
            const login = uvaApi.post('/auth/github/register', body)
            console.log(body, login, access)
          }
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
