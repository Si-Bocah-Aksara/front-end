import axios from 'axios';

export default {
  state: {
    user: null,
    token: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('http://localhost:4000/users/login', credentials);
        commit('setUser', response.data.user);
        commit('setToken', response.data.token);
        return response.data.token;
        this.$router.push('/');
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    logout({ commit }) {
      commit('logout');
      localStorage.removeItem('token'); // Hapus token dari local storage
      this.$router.push('/');
    }
  }
}
