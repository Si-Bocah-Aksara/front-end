<template>
    <div class="flex flex-col items-center bg-gradient-to-b from-yellow-200 to-orange-200 h-screen p-6">
        <div class="z-10 p-4">
            <RouterLink to="/lessons/mengenal-huruf" class="text-orange-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <div class="text-center mb-24 mt-10">
            <h1 class="text-9xl font-extrabold text-orange-700 drop-shadow-lg animate-bounce">C c</h1>
        </div>

        <!-- Gambar dengan awalan huruf 'C' -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div @click="openModal('cacing')"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="cacingImage" alt="Gambar Cacing" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-orange-700">C</span>acing
                </div>
            </div>
            <div @click="openModal('cangkir')"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="cangkirImage" alt="Gambar Cangkir" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-orange-700">C</span>angkir
                </div>
            </div>
            <div @click="openModal('celana')"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="celanaImage" alt="Gambar Celana" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-orange-700">C</span>elana
                </div>
            </div>
            <div @click="openModal('ceri')"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="ceriImage" alt="Gambar Ceri" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-orange-700">C</span>eri
                </div>
            </div>
        </div>

        <!-- Tombol pemutaran audio utama -->
        <button @click="playCurrentAudio('replay')" id="tombol-replay"
            class="flex items-center justify-center w-16 h-16 mb-10 bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
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
                    <span class="text-orange-700 text-5xl">C</span>{{ currentImageAlt.slice(1) }}
                </h2>
                <div class="flex justify-center gap-40 mt-10">
                    <button @click="playCurrentAudio('modal')"
                        class="flex items-center justify-center w-16 h-16 mb-4 bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
                        🔊
                    </button>
                    <button @click="nextImage" class="text-7xl font-bold text-orange-700 cursor-pointer">
                        C c
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import cacingImage from "../assets/mengenalHuruf/C/gambar_cacing.jpg";
import cangkirImage from "../assets/mengenalHuruf/C/gambar_cangkir.jpg";
import celanaImage from "../assets/mengenalHuruf/C/gambar_celana.jpg";
import ceriImage from "../assets/mengenalHuruf/C/gambar_ceri.jpg";

import audioCacing from "../assets/mengenalHuruf/C/audio_cacing.mp3";
import audioCangkir from "../assets/mengenalHuruf/C/audio_cangkir.mp3";
import audioCelana from "../assets/mengenalHuruf/C/audio_celana.mp3";
import audioCeri from "../assets/mengenalHuruf/C/audio_ceri.mp3";
import audioHurufC from "../assets/mengenalHuruf/C/audioHuruf_c.mp3";

const isModalOpen = ref(false);
const currentImage = ref("");
const currentImageAlt = ref("");
const currentAudio = ref<HTMLAudioElement | null>(null);

const images = [
    {
        name: "cacing",
        src: cacingImage,
        alt: "Cacing",
        audio: new Audio(audioCacing),
    },
    {
        name: "cangkir",
        src: cangkirImage,
        alt: "Cangkir",
        audio: new Audio(audioCangkir),
    },
    {
        name: "celana",
        src: celanaImage,
        alt: "Celana",
        audio: new Audio(audioCelana),
    },
    {
        name: "ceri",
        src: ceriImage,
        alt: "Ceri",
        audio: new Audio(audioCeri),
    },
];

const replayAudio = new Audio(audioHurufC);

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