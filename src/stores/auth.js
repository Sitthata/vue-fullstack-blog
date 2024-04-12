import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { login as loginService } from '@/services/authServices'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)
  const token = computed(() => localStorage.getItem('token'))
  const isAuthenticated = computed(() => !!user.value)

  const setUserAndToken = (userData, authToken) => {
    localStorage.setItem('token', JSON.stringify(authToken))
    localStorage.setItem('user', JSON.stringify(userData))
    user.value = userData
  }

  const login = async (userCredentials) => {
    if (!userCredentials.email || !userCredentials.password) {
      throw new Error('Please provide both email and password')
    }

    try {
      const response = await loginService(userCredentials)
      console.log(response)
      setUserAndToken(response.user, response.accessToken)
    } catch (error) {
      // Reset state on failure
      user.value = null
      localStorage.removeItem('token')
      throw error
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return {
    user,
    isAuthenticated,
    token,
    login,
    logout
  }
})
