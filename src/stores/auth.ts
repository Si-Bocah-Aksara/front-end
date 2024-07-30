import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const isAdmin = ref(false)
  const token = ref('')

  function login(userToken: string, admin: boolean) {
    isLoggedIn.value = true
    isAdmin.value = admin
    token.value = userToken
  }

  function logout() {
    isLoggedIn.value = false
    isAdmin.value = false
    token.value = ''
  }

  return { isLoggedIn, isAdmin, token, login, logout }
})