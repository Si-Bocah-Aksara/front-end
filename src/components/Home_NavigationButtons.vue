<template>
  <div>
    <template v-if="user">
      <RouterLink to="/login" class="nav-button">Login</RouterLink>
      <RouterLink to="/lessons" class="nav-button">Mulai Pelajaran</RouterLink>
    </template>
    <template v-else-if="user.isAdmin">
      <RouterLink to="/dashboard-admin" class="nav-button">Dashboard Admin</RouterLink>
      <button @click="logout" class="nav-button">Logout</button>
    </template>
    <template v-else>
      <RouterLink to="/lessons" class="nav-button">Mulai Pelajaran</RouterLink>
      <RouterLink to="/parent-page" class="nav-button">Halaman Orang Tua</RouterLink>
      <button @click="logout" class="nav-button">Logout</button>
    </template>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { mapState, mapActions } from 'vuex';

export default {
  setup() {
    const router = useRouter();

    const { user } = mapState(['user']);
    const { logout } = mapActions(['logout']);

    const isAuthenticated = computed(() => {
  return !!user.token;
});

    return {
      isAuthenticated,
      user,
      logout,
      router,
    };
  },
};
</script>

<style scoped>
.nav-button {
  @apply mx-2 mb-4 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100;
}
.nav-button:hover {
  background-color: #FDE047;
}
</style>