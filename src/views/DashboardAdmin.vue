<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Dashboard Admin</h1>
        <table class="table-auto w-full">
            <thead>
                <tr class="bg-gray-200">
                    <th class="px-4 py-2">User</th>
                    <th class="px-4 py-2">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id" class="bg-white border-b">
                    <td class="px-4 py-2">{{ user.email }}</td>
                    <td class="px-4 py-2">
                        <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                            @click="deleteUser(user.id)">
                            Hapus Akun
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                // Contoh data pengguna, data ini nantinya bisa berasal dari API
                { id: 1, email: "user1@example.com" },
                { id: 2, email: "user2@example.com" },
                { id: 3, email: "user3@example.com" },
            ],
        };
    },
    methods: {
        deleteUser(userId) {
            // Fungsi untuk menghapus pengguna berdasarkan id
            this.users = this.users.filter(user => user.id !== userId);
            // Tambahkan logika untuk menghapus pengguna dari server jika diperlukan
            console.log(`User dengan id ${userId} telah dihapus`);
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 800px;
}
</style>