<template>
    <div class="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 flex flex-col items-center">
        <!-- Header Section -->
        <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl p-8 mb-8 text-center">
            <h1 class="text-4xl font-extrabold text-gray-800 mb-2">Dashboard Admin</h1>
            <div class="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg inline-block shadow-md">
                <p class="font-semibold">Admin: John Doe</p>
            </div>
        </div>

        <!-- Users Table -->
        <div class="bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-hidden">
            <table class="table-auto w-full">
                <thead>
                    <tr class="bg-blue-100 text-left">
                        <th class="px-6 py-3 text-blue-900 font-medium">User</th>
                        <th class="px-6 py-3 text-blue-900 font-medium">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id" class="border-b hover:bg-gray-100 transition duration-200 ease-in-out">
                        <td class="px-6 py-4 text-gray-800">{{ user.email }}</td>
                        <td class="px-6 py-4">
                            <button class="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200 ease-in-out"
                                @click="deleteUser(user.id)">
                                Hapus Akun
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<!-- <script>
export default {
    data() {
        return {
            users: [
                { id: 1, email: "user1@example.com" },
                { id: 2, email: "user2@example.com" },
                { id: 3, email: "user3@example.com" },
            ],
        };
    },
    methods: {
        deleteUser(userId) {
            this.users = this.users.filter(user => user.id !== userId);
            console.log(`User dengan id ${userId} telah dihapus`);
        },
    },
};
</script> -->

<script>
import axios from 'axios';

export default {
  name: 'DashboardAdmin',
  data() {
    return {
      users: []
    }
  },
  async created() {
    try {
      const response = await axios.get('/api/users');
      this.users = response.data;
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  }
}
</script>

