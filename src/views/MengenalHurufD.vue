<template>
    <div class="flex flex-col items-center bg-gradient-to-b from-green-200 to-blue-200 h-screen p-6">
        <div class="z-10 p-4">
            <RouterLink to="/lessons/mengenal-huruf" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <div class="text-center mb-24 mt-10">
            <h1 class="text-9xl font-extrabold text-blue-700 drop-shadow-lg animate-bounce">D d</h1>
        </div>

        <!-- Gambar dengan awalan huruf 'D' -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div v-for="(image, index) in images" :key="index" @click="openModal(image.name)"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <img :src="image.src" :alt="'Gambar ' + image.alt" class="w-full h-48 object-cover" />
                <div class="p-4 text-center text-xl font-bold text-gray-700">
                    <span class="text-blue-700">D</span>{{ image.alt.slice(1) }}
                </div>
            </div>
        </div>

        <!-- Tombol pemutaran audio utama -->
        <button @click="playCurrentAudio('replay')" id="tombol-replay"
            class="flex items-center justify-center w-16 h-16 mb-10 bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
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
                    <span class="text-blue-700 text-5xl">D</span>{{ currentImageAlt.slice(1) }}
                </h2>
                <div class="flex justify-center gap-40 mt-10">
                    <button @click="playCurrentAudio('modal')"
                        class="flex items-center justify-center w-16 h-16 mb-4 bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-110 text-2xl">
                        🔊
                    </button>
                    <button @click="nextImage" class="text-7xl font-bold text-blue-700 cursor-pointer">
                        D d
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import dinoImage from "../assets/mengenalHuruf/D/gambar_dino.jpg";
import dokterImage from "../assets/mengenalHuruf/D/gambar_dokter.jpg";
import dompetImage from "../assets/mengenalHuruf/D/gambar_dompet.jpg";
import durianImage from "../assets/mengenalHuruf/D/gambar_durian.jpg";

import audioDino from "../assets/mengenalHuruf/D/audio_dino.mp3";//dino nya bisa di petik kali ah
import audioDokter from "../assets/mengenalHuruf/D/audio_dokter.mp3";
import audioDompet from "../assets/mengenalHuruf/D/audio_dompet.mp3";//nanggung bet jadi dempet ah
import audioDurian from "../assets/mengenalHuruf/D/audio_durian.mp3";
import audioHurufD from "../assets/mengenalHuruf/D/audioHuruf_d.mp3";

const isModalOpen = ref(false);
const currentImage = ref("");
const currentImageAlt = ref("");
const currentAudio = ref<HTMLAudioElement | null>(null);

const images = [
    { name: "dino", src: dinoImage, alt: "Dino", audio: new Audio(audioDino) },
    { name: "dokter", src: dokterImage, alt: "Dokter", audio: new Audio(audioDokter) },
    { name: "dompet", src: dompetImage, alt: "Dompet", audio: new Audio(audioDompet) },
    { name: "durian", src: durianImage, alt: "Durian", audio: new Audio(audioDurian) },
];

const replayAudio = new Audio(audioHurufD);

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