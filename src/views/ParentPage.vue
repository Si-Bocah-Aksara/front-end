<template>
    <div
        class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-4">
        <div class="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
            <!-- Profil Orang Tua -->
            <div class="md:w-1/2 p-8 bg-gray-100">
                <div class="flex items-center justify-center mb-6">
                    <img src="https://via.placeholder.com/100" alt="Parent Profile"
                        class="w-32 h-32 rounded-full shadow-lg border-4 border-blue-500" />
                </div>
                <h2 class="text-xl font-bold text-blue-800 mb-2 text-center">
                    Nama Orang Tua
                </h2>
                <p class="text-gray-700 mb-6 text-center">John Doe</p>
                <h2 class="text-xl font-bold text-blue-800 mb-2 text-center">Email</h2>
                <p class="text-gray-700 mb-6 text-center">johndoe@example.com</p>
                <div class="flex justify-center space-x-4">
                    <!-- Tombol untuk membuka modal tips orang tua -->
                    <button @click="showParentTipsModal = true"
                        class="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                        Tips for Parents
                    </button>
                </div>
            </div>

            <!-- Profil Anak -->
            <div class="md:w-1/2 p-8 bg-gray-100">
                <div class="flex items-center justify-center mb-6">
                    <img src="https://via.placeholder.com/100" alt="Child Profile"
                        class="w-32 h-32 rounded-full shadow-lg border-4 border-green-500" />
                </div>
                <h2 class="text-xl font-bold text-green-800 mb-2 text-center">
                    Nama Anak
                </h2>
                <p class="text-gray-700 mb-6 text-center">Bintang</p>
                <div class="flex justify-center space-x-4">
                    <!-- Tombol untuk membuka modal laporan anak -->
                    <button @click="showChildReportsModal = true"
                        class="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105">
                        View Reports
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal Tips untuk Orang Tua -->
        <div v-if="showParentTipsModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white w-11/12 md:w-3/5 lg:w-1/2 xl:w-2/5 p-8 rounded-lg shadow-lg relative">
                <h2 class="text-3xl font-bold text-center text-blue-800 my-4">
                    Tips untuk Orang Tua
                </h2>
                <ul class="list-disc pl-6 text-gray-700">
                    <li class="mb-2">
                        Luangkan waktu untuk bermain bersama anak dan terlibat dalam
                        aktivitas mereka.
                    </li>
                    <li class="mb-2">
                        Berikan pujian dan dorongan positif saat anak mencoba hal baru atau
                        mencapai sesuatu.
                    </li>
                    <li class="mb-2">
                        Bantu anak mengembangkan keterampilan sosial dengan bermain bersama
                        teman-teman sebaya.
                    </li>
                    <li class="mb-2">
                        Tetapkan batasan yang jelas dan konsisten untuk membantu anak
                        memahami perilaku yang diharapkan.
                    </li>
                </ul>
                <div class="flex justify-end mt-6">
                    <!-- Tombol untuk menutup modal -->
                    <button @click="showParentTipsModal = false"
                        class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                        Tutup
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal untuk laporan skor anak -->
        <div v-if="showChildReportsModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white w-11/12 md:w-3/5 lg:w-1/2 xl:w-2/5 p-8 rounded-lg shadow-lg relative">
                <h2 class="text-3xl font-bold text-center text-purple-800 my-4">
                    Laporan Skor Anak
                </h2>
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead>
                            <tr class="bg-purple-200">
                                <th class="px-4 py-2">Percobaan</th>
                                <th class="px-4 py-2">Benar</th>
                                <th class="px-4 py-2">Salah</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(score, index) in scores" :key="index"
                                :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
                                <td class="border px-4 py-2 text-center">
                                    Percobaan {{ index + 1 }}
                                </td>
                                <td class="border px-4 py-2 text-center text-green-600">
                                    {{ score.benar }}
                                </td>
                                <td class="border px-4 py-2 text-center text-red-600">
                                    {{ score.salah }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-end mt-6">
                    <!-- Tombol untuk menutup modal -->
                    <button @click="showChildReportsModal = false"
                        class="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105">
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Mengelola state untuk modal
const showParentTipsModal = ref(false);
const showChildReportsModal = ref(false);

// Data laporan skor untuk beberapa percobaan
const scores = ref([
    { benar: 4, salah: 1 },
    { benar: 3, salah: 2 },
    { benar: 5, salah: 0 },
    { benar: 2, salah: 3 },
    { benar: 4, salah: 1 },
]);
</script>