<template>
    <div class="flex flex-col items-center bg-gradient-to-b from-pink-200 to-indigo-200 h-screen p-6">
        <div class="z-10 p-4">
            <RouterLink to="/lessons/mengenal-huruf" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <div class="text-center mb-24 mt-10">
            <h1 class="text-9xl font-extrabold text-teal-700 drop-shadow-lg animate-bounce">B b</h1>
        </div>

        <!-- Gambar dengan awalan huruf 'A' -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div @click="openModal('balon')"
                class="gambar-balon bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="balonImage" alt="Gambar Balon" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-teal-700">B</span>alon
                </div>
            </div>
            <div @click="openModal('bayi')"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="bayiImage" alt="Gambar Bayi" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-teal-700">B</span>ayi
                </div>
            </div>
            <div @click="openModal('bunga')"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="bungaImage" alt="Gambar Bunga" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-teal-700">B</span>unga
                </div>
            </div>
            <div @click="openModal('burung')"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="burungImage" alt="Gambar Burung" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-teal-700">B</span>urung
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
                    <span class="text-teal-700 text-5xl">B</span>{{ currentImageAlt.slice(1) }}
                </h2>
                <div class="flex justify-center gap-40 mt-10">
                    <button @click="playCurrentAudio('modal')"
                        class="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-400 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
                        🔊
                    </button>
                    <button @click="nextImage" class="text-7xl font-bold text-teal-700 cursor-pointer">
                        B b
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import balonImage from "../assets/mengenalHuruf/B/gambar_balon.jpg";
import bayiImage from "../assets/mengenalHuruf/B/gambar_bayi.jpg";
import bungaImage from "../assets/mengenalHuruf/B/gambar_bunga.jpg";
import burungImage from "../assets/mengenalHuruf/B/gambar_burung.jpg";

import audioBalon from "../assets/mengenalHuruf/B/audio_balon.mp3";
import audioBayi from "../assets/mengenalHuruf/B/audio_bayi.mp3";
import audioBunga from "../assets/mengenalHuruf/B/audio_bunga.mp3";
import audioBurung from "../assets/mengenalHuruf/B/audio_burung.mp3";
import audioHurufA from "../assets/mengenalHuruf/B/audioHuruf_b.mp3";

const isModalOpen = ref(false);
const currentImage = ref("");
const currentImageAlt = ref("");
const currentAudio = ref<HTMLAudioElement | null>(null);

const images = [
    {
        name: "balon",
        src: balonImage,
        alt: "Balon",
        audio: new Audio(audioBalon),
    },
    {
        name: "bayi",
        src: bayiImage,
        alt: "Bayi",
        audio: new Audio(audioBayi),
    },
    {
        name: "bunga",
        src: bungaImage,
        alt: "Bunga",
        audio: new Audio(audioBunga),
    },
    {
        name: "burung",
        src: burungImage,
        alt: "Burung",
        audio: new Audio(audioBurung),
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
