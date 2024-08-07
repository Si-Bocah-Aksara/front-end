<template>
    <div class="flex flex-col items-center bg-gradient-to-b from-green-200 to-blue-200 h-screen p-6">
        <div class="z-10 p-4">
            <RouterLink to="/lessons/mengenal-huruf" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <div class="text-center mb-24 mt-10">
            <h1 class="text-9xl font-extrabold text-blue-700 drop-shadow-lg animate-bounce">V v</h1>
        </div>

        <!-- Images starting with the letter 'V' -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div v-for="(image, index) in images" :key="index" @click="openModal(image.name)"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="image.src" :alt="'Gambar ' + image.alt" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-blue-700">V</span>{{ image.alt.slice(1) }}
                </div>
            </div>
        </div>

        <!-- Main audio play button -->
        <button @click="playCurrentAudio('replay')" id="tombol-replay"
            class="flex items-center justify-center w-16 h-16 mb-10 bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
            🔊
        </button>

        <!-- Detail modal -->
        <div v-if="isModalOpen" @click.self="closeModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative grid place-content-center">
                <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl">
                    ×
                </button>
                <img :src="currentImage" :alt="currentImageAlt" class="w-full max-h-96 object-cover mb-4" />
                <h2 class="text-4xl text-center font-bold mb-2">
                    <span class="text-blue-700 text-5xl">V</span>{{ currentImageAlt.slice(1) }}
                </h2>
                <div class="flex justify-center gap-40 mt-10">
                    <button @click="playCurrentAudio('modal')"
                        class="flex items-center justify-center w-16 h-16 mb-4 bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
                        🔊
                    </button>
                    <button @click="nextImage" class="text-7xl font-bold text-blue-700 cursor-pointer">
                        V v
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Import assets for letter 'V'
import vasImage from "../assets/mengenalHuruf/V/gambar_vas.jpg";
import vitaminImage from "../assets/mengenalHuruf/V/gambar_vitamin.jpg";
import vokalImage from "../assets/mengenalHuruf/V/gambar_vokal.jpg";
import vulkanImage from "../assets/mengenalHuruf/V/gambar_vulkan.jpg";

import audioVas from "../assets/mengenalHuruf/V/audio_vas.mp3";
import audioVitamin from "../assets/mengenalHuruf/V/audio_vitamin.mp3";
import audioVokal from "../assets/mengenalHuruf/V/audio_vokal.mp3";
import audioVulkan from "../assets/mengenalHuruf/V/audio_vulkan.mp3";
import audioHurufV from "../assets/mengenalHuruf/V/audioHuruf_V.mp3";

const isModalOpen = ref(false);
const currentImage = ref("");
const currentImageAlt = ref("");
const currentAudio = ref<HTMLAudioElement | null>(null);

const images = [
    { name: "vas", src: vasImage, alt: "Vas", audio: new Audio(audioVas) },
    { name: "vitamin", src: vitaminImage, alt: "Vitamin", audio: new Audio(audioVitamin) },
    { name: "vokal", src: vokalImage, alt: "Vokal", audio: new Audio(audioVokal) },
    { name: "vulkan", src: vulkanImage, alt: "Vulkan", audio: new Audio(audioVulkan) },
];

const replayAudio = new Audio(audioHurufV);

let currentIndex = ref(0);

const playCurrentAudio = (type: string) => {
    if (type === "replay") {
        replayAudio.currentTime = 0;
        replayAudio.play();
    } else if (currentAudio.value) {
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
        playCurrentAudio("modal");
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
    playCurrentAudio("modal");
};

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
