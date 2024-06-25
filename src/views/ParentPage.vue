<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div class="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex">
            <!-- Profil Orang Tua -->
            <div class="w-1/2 p-6">
                <div class="flex items-center justify-center mb-4">
                    <img src="#" alt="Parent Profile"
                        class="w-24 h-24 rounded-full shadow-lg">
                </div>
                <h2 class="text-lg font-bold mb-2">Nama Ortu</h2>
                <p class="text-gray-600 mb-4">Nama Orang Tua</p>
                <h2 class="text-lg font-bold mb-2">Email</h2>
                <p class="text-gray-600 mb-4">email@example.com</p>
                <router-link to="/parent-tips"
                    class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                    Tips
                </router-link>
            </div>

            <!-- Profil Anak -->
            <div class="w-1/2 p-6">
                <div class="flex items-center justify-center mb-4">
                    <img src="#" alt="Child Profile"
                        class="w-24 h-24 rounded-full shadow-lg">
                </div>
                <h2 class="text-lg font-bold mb-2">Nama Anak</h2>
                <p class="text-gray-600 mb-4">Bintang</p>
                <router-link to="/child-reports"
                    class="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
                    Child Reports
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ParentPage',
}
</script>

<style scoped>
/* Optional: You can add additional styles here if needed */
</style>