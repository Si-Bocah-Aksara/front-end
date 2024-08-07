<template>
    <div class="flex flex-col items-center bg-gradient-to-b from-green-200 to-blue-200 h-screen p-6">
        <div class="z-10 p-4">
            <RouterLink to="/lessons/mengenal-huruf" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <div class="text-center mb-24 mt-10">
            <h1 class="text-9xl font-extrabold text-blue-700 drop-shadow-lg animate-bounce">U u</h1>
        </div>

        <!-- Images starting with the letter 'U' -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div v-for="(image, index) in images" :key="index" @click="openModal(image.name)"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="image.src" :alt="'Gambar ' + image.alt" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-blue-700">U</span>{{ image.alt.slice(1) }}
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
                    <span class="text-blue-700 text-5xl">U</span>{{ currentImageAlt.slice(1) }}
                </h2>
                <div class="flex justify-center gap-40 mt-10">
                    <button @click="playCurrentAudio('modal')"
                        class="flex items-center justify-center w-16 h-16 mb-4 bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
                        🔊
                    </button>
                    <button @click="nextImage" class="text-7xl font-bold text-blue-700 cursor-pointer">
                        U u
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Huruf U
import ubiImage from "../assets/mengenalHuruf/U/gambar_ubi.jpg";
import udangImage from "../assets/mengenalHuruf/U/gambar_udang.jpg";
import ularImage from "../assets/mengenalHuruf/U/gambar_ular.jpg";
import untaImage from "../assets/mengenalHuruf/U/gambar_unta.jpg";

import audioUbi from "../assets/mengenalHuruf/U/audio_ubi.mp3";
import audioUdang from "../assets/mengenalHuruf/U/audio_udang.mp3";
import audioUlar from "../assets/mengenalHuruf/U/audio_ular.mp3";
import audioUnta from "../assets/mengenalHuruf/U/audio_unta.mp3";
import audioHurufU from "../assets/mengenalHuruf/U/audioHuruf_u.mp3";

const isModalOpen = ref(false);
const currentImage = ref("");
const currentImageAlt = ref("");
const currentAudio = ref<HTMLAudioElement | null>(null);

const images = [
    { name: "ubi", src: ubiImage, alt: "Ubi", audio: new Audio(audioUbi) },
    { name: "udang", src: udangImage, alt: "Udang", audio: new Audio(audioUdang) },
    { name: "ular", src: ularImage, alt: "Ular", audio: new Audio(audioUlar) },
    { name: "unta", src: untaImage, alt: "Unta", audio: new Audio(audioUnta) },
];

const replayAudio = new Audio(audioHurufU);

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