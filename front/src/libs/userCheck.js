import { uvaApi } from '@/api'

export const userCheck = async () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user) {
    try {
      const verifyResponse = await uvaApi.get('/users/profile', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      })

      if (verifyResponse.data.user._id) {
        return verifyResponse.data.user
      }
    } catch {}
  }
  localStorage.removeItem('user')
  return null
}
