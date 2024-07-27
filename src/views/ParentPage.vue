<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-4">
        <div class="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
            <!-- Profil Orang Tua -->
            <div class="md:w-1/2 p-8 bg-gray-100">
                <div class="flex items-center justify-center mb-6">
                    <img src="https://via.placeholder.com/100" alt="Parent Profile"
                        class="w-32 h-32 rounded-full shadow-lg border-4 border-blue-500">
                </div>
                <h2 class="text-xl font-bold text-blue-800 mb-2 text-center">Nama Orang Tua</h2>
                <p class="text-gray-700 mb-6 text-center">John Doe</p>
                <h2 class="text-xl font-bold text-blue-800 mb-2 text-center">Email</h2>
                <p class="text-gray-700 mb-6 text-center">johndoe@example.com</p>
                <div class="flex justify-center">
                    <router-link to="/parent-tips"
                        class="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                        Tips for Parents
                    </router-link>
                </div>
            </div>

            <!-- Profil Anak -->
            <div class="md:w-1/2 p-8 bg-gray-100">
                <div class="flex items-center justify-center mb-6">
                    <img src="https://via.placeholder.com/100" alt="Child Profile"
                        class="w-32 h-32 rounded-full shadow-lg border-4 border-green-500">
                </div>
                <h2 class="text-xl font-bold text-green-800 mb-2 text-center">Nama Anak</h2>
                <p class="text-gray-700 mb-6 text-center">Bintang</p>
                <div class="flex justify-center">
                    <router-link to="/child-reports"
                        class="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105">
                        View Reports
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ParentPage',
}
</script>
