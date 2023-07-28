import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userCheck } from '@/libs/userCheck'
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

import { auth } from '../../firebase/firebase'
import { uvaApi } from '../../api/index'

export const fetchUser = createAsyncThunk('auth/fetchUser', userCheck)

const initialState = {
  user: null,
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload.msg) {
        localStorage.setItem('user', JSON.stringify(action.payload))
      } else {
        state.user = action.payload
      }
    },

    loginWithGoogle() {
      async function IloginwWithGoogle() {
        try {
          const googleProvider = new GoogleAuthProvider()
          const access = await signInWithPopup(auth, googleProvider)
          const body = {
            username: access.user.displayName,
            email: access.user.email,
            password: null,
            picture: access.user.photoURL,
            googleAuth: access.providerId,
            token: access._tokenResponse.idToken,
          }
          if (access.user.emailVerified) {
            const login = await uvaApi.post('/auth/external', body)
            localStorage.setItem('user', JSON.stringify(login.data))
          }
          window.location.href = '/'
          // TODO: add logic to save user data in redux
        } catch (error) {
          console.log(error.message)
        }
      }

      IloginwWithGoogle()
    },
    loginWithGithub() {
      async function IloginwWithGithub() {
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
            localStorage.setItem('user', JSON.stringify(login.data))
          }
          // TODO: add logic to save user data in redux

          console.log('proof loginGithub', access)
        } catch (error) {
          console.log(error.message)
        }
      }

      IloginwWithGithub()
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  },
})

export const { setUser, loginWithGoogle, loginWithGithub } = authSlice.actions
export default authSlice.reducer
