<template>
    <div class="flex flex-col items-center bg-gradient-to-b from-pink-200 to-red-200 h-screen p-6">
        <div class="z-10 p-4">
            <RouterLink to="/lessons/mengenal-huruf" class="text-pink-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <div class="text-center mb-24 mt-10">
            <h1 class="text-9xl font-extrabold text-pink-700 drop-shadow-lg animate-bounce">P p</h1>
        </div>

        <!-- Gambar dengan awalan huruf 'P' -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div v-for="(image, index) in images" :key="index" @click="openModal(image.name)"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="image.src" :alt="'Gambar ' + image.alt" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-pink-700">P</span>{{ image.alt.slice(1) }}
                </div>
            </div>
        </div>

        <!-- Tombol pemutaran audio utama -->
        <button @click="playCurrentAudio('replay')" id="tombol-replay"
            class="flex items-center justify-center w-16 h-16 mb-10 bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
            🔊
        </button>

        <!-- Modal detail -->
        <div v-if="isModalOpen" @click.self="closeModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative grid place-content-center">
                <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl">
                    ×
                </button>
                <img :src="currentImage" :alt="currentImageAlt" class="w-full max-h-96 object-cover mb-4" />
                <h2 class="text-4xl text-center font-bold mb-2">
                    <span class="text-pink-700 text-5xl">P</span>{{ currentImageAlt.slice(1) }}
                </h2>
                <div class="flex justify-center gap-40 mt-10">
                    <button @click="playCurrentAudio('modal')"
                        class="flex items-center justify-center w-16 h-16 mb-4 bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
                        🔊
                    </button>
                    <button @click="nextImage" class="text-7xl font-bold text-pink-700 cursor-pointer">
                        P p
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Huruf P
import pelangiImage from "../assets/mengenalHuruf/P/gambar_pelangi.jpg";
import pandaImage from "../assets/mengenalHuruf/P/gambar_panda.jpg";
import pisangImage from "../assets/mengenalHuruf/P/gambar_pisang.jpg";
import piringImage from "../assets/mengenalHuruf/P/gambar_piring.jpg";

import audioPelangi from "../assets/mengenalHuruf/P/audio_pelangi.mp3";
import audioPanda from "../assets/mengenalHuruf/P/audio_panda.mp3";
import audioPisang from "../assets/mengenalHuruf/P/audio_pisang.mp3";
import audioPiring from "../assets/mengenalHuruf/P/audio_piring.mp3";
import audioHurufP from "../assets/mengenalHuruf/P/audioHuruf_p.mp3";

const isModalOpen = ref(false);
const currentImage = ref("");
const currentImageAlt = ref("");
const currentAudio = ref<HTMLAudioElement | null>(null);

const images = [
    { name: "pelangi", src: pelangiImage, alt: "Pelangi", audio: new Audio(audioPelangi) },
    { name: "panda", src: pandaImage, alt: "Panda", audio: new Audio(audioPanda) },
    { name: "pisang", src: pisangImage, alt: "Pisang", audio: new Audio(audioPisang) },
    { name: "piring", src: piringImage, alt: "Piring", audio: new Audio(audioPiring) },
];

const replayAudio = new Audio(audioHurufP);

let currentIndex = ref(0);

const playCurrentAudio = (type: string) => {
    if (type === 'replay') {
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
