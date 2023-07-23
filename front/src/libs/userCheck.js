import { uvaApi } from '@/api'

export const userCheck = async () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user) {
    try {
      const verifyResponse = await uvaApi.post('/auth/verify', {
        devCollabToken: user.token,
      })
      if (verifyResponse.data.user.id) {
        return verifyResponse.data.user
      }
    } catch {}
  }
  localStorage.removeItem('user')
  return null
}
