<template>
    <div class="flex flex-col items-center bg-gradient-to-b from-pink-200 to-indigo-200 h-screen p-6">
        <div class="z-10 p-4">
            <RouterLink to="/lessons/mengenal-huruf" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <div class="text-center mb-24 mt-10">
            <h1 class="text-9xl font-extrabold text-teal-700 drop-shadow-lg animate-bounce">A a</h1>
        </div>

        <!-- Gambar dengan awalan huruf 'A' -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div @click="openModal('ayam')"
                class="gambar-ayam bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="ayamImage" alt="Gambar Ayam" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-teal-700">A</span>yam
                </div>
            </div>
            <div @click="openModal('apel')"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="apelImage" alt="Gambar Apel" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-teal-700">A</span>pel
                </div>
            </div>
            <div @click="openModal('api')"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="apiImage" alt="Gambar Api" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-teal-700">A</span>pi
                </div>
            </div>
            <div @click="openModal('awan')"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="awanImage" alt="Gambar Awan" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-teal-700">A</span>wan
                </div>
            </div>
        </div>

        <!-- Tombol pemutaran audio utama -->
        <button @click="playCurrentAudio('replay')" id="tombol-replay"
            class="flex items-center justify-center w-16 h-16 mb-10 bg-indigo-400 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
            🔊
        </button>

        <!-- Modal detail -->
        <div v-if="isModalOpen" @click.self="closeModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative grid place-content-center">
                <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl">
                </button>
                <img :src="currentImage" :alt="currentImageAlt" class="w-full max-h-96 object-cover mb-4" />
                <h2 class="text-4xl text-center font-bold mb-2">
                    <span class="text-teal-700 text-5xl">A</span>{{ currentImageAlt.slice(1) }}
                </h2>
                <div class="flex justify-center gap-40 mt-10">
                    <button @click="playCurrentAudio('modal')"
                        class="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-400 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
                        🔊
                    </button>
                    <button @click="nextImage" class="text-7xl font-bold text-teal-700 cursor-pointer">
                        A a
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import ayamImage from "../assets/mengenalHuruf/ayam.jpg";
import apelImage from "../assets/mengenalHuruf/apel.jpg";
import apiImage from "../assets/mengenalHuruf/api.jpg";
import awanImage from "../assets/mengenalHuruf/awan.jpg";

import audioAyam from "../assets/mengenalHuruf/audio_ayam.mp3";
import audioApel from "../assets/mengenalHuruf/audio_apel.mp3";
import audioApi from "../assets/mengenalHuruf/audio_api.mp3";
import audioAwan from "../assets/mengenalHuruf/audio_awan.mp3";
import audioHurufA from "../assets/mengenalHuruf/audioHuruf_a.mp3";

const isModalOpen = ref(false);
const currentImage = ref("");
const currentImageAlt = ref("");
const currentAudio = ref<HTMLAudioElement | null>(null);

const images = [
    {
        name: "ayam",
        src: ayamImage,
        alt: "Ayam",
        audio: new Audio(audioAyam),
    },
    {
        name: "apel",
        src: apelImage,
        alt: "Apel",
        audio: new Audio(audioApel),
    },
    {
        name: "api",
        src: apiImage,
        alt: "Api",
        audio: new Audio(audioApi),
    },
    {
        name: "awan",
        src: awanImage,
        alt: "Awan",
        audio: new Audio(audioAwan),
    },
];

const replayAudio = new Audio(audioHurufA);

let currentIndex = ref(0);

const playCurrentAudio = (type: string) => {
    if (type === 'replay') {
        // Replay audii
        replayAudio.currentTime = 0;
        replayAudio.play();
    } else if (currentAudio.value) {
        // Play current image audio
        currentAudio.value.currentTime = 0;
        currentAudio.value.play();
    }
};

const openModal = (imageName: string) => {
    const image = images.find((img) => img.name === imageName);
    if (image) {
        currentIndex.value = images.indexOf(image);
        currentImage.value = image.src;
        currentImageAlt.value = image.alt;
        currentAudio.value = image.audio;
        isModalOpen.value = true;
        playCurrentAudio('modal'); 
    }
};

const closeModal = () => {
    isModalOpen.value = false;
    if (currentAudio.value) {
        currentAudio.value.pause();
        currentAudio.value.currentTime = 0;
    }
};

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
    const nextImage = images[currentIndex.value];
    currentImage.value = nextImage.src;
    currentImageAlt.value = nextImage.alt;
    currentAudio.value = nextImage.audio;
    playCurrentAudio('modal'); 
};

// Lifecycle hook untuk autoplay audio saat komponen dimount
onMounted(() => {
    currentAudio.value = replayAudio;
    const playPromise = replayAudio.play();
    if (playPromise !== undefined) {
        playPromise.catch((error) => {
            console.error("Failed to autoplay audio:", error);
        });
    }
});
</script>
