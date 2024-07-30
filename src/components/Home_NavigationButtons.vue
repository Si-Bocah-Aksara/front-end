<template>
  <div class="flex-1 flex flex-col items-center justify-center bg-yellow-500 text-white py-10" id="btnn">
    <template v-if="!authStore.isLoggedIn">
      <NavButton to="/login" text="Login" />
      <NavButton to="/lessons" text="Mulai Pelajaran" />
    </template>
    
    <template v-else-if="authStore.isAdmin">
      <NavButton to="/dashboard-admin" text="Dashboard Admin" />
      <NavButton @click="handleLogout" text="Logout" />
    </template>
    
    <template v-else>
      <NavButton to="/lessons" text="Mulai Pelajaran" />
      <NavButton to="/parent-page" text="Halaman Orang Tua" />
      <NavButton @click="handleLogout" text="Logout" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import NavButton from './NavButton.vue';

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};
</script>