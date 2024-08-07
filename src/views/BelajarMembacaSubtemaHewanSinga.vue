<template>
    <div class="bg-yellow-50 min-h-screen py-8">
        <div class="relative z-10 p-4">
            <RouterLink to="/lessons/belajar-membaca/subtema-hewan" class="text-blue-500 hover:underline text-lg">
                Back
            </RouterLink>
        </div>
        <div class="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-2xl">
            <h1 class="text-4xl font-bold text-center mb-8 text-yellow-700">
                Belajar Tentang Singa
            </h1>
            <div class="flex flex-col items-center">
                <div class="relative mb-8 bounce-animation">
                    <img src="../assets/belajarMembaca/SubtemaSinga/icon_singa.jpg" alt="Gambar Singa"
                        class="object-cover rounded-full shadow-lg w-72 h-72 border-4 border-yellow-400" />
                </div>
                <h2 class="text-2xl font-semibold mb-4 text-yellow-800">
                    Mindmap Singa
                </h2>
                <div class="grid grid-cols-2 gap-4 items-center mb-10 mt-3">
                    <button @click="openModal(0)"
                        class="text-lg font-medium text-yellow-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-yellow-100 rounded-lg px-4 py-2 shadow-md">
                        🦁 Keluarga Singa Bahagia
                    </button>
                    <button @click="openModal(1)"
                        class="text-lg font-medium text-yellow-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-yellow-100 rounded-lg px-4 py-2 shadow-md">
                        🍖 Singa Berburu Mangsa
                    </button>
                    <button @click="openModal(2)"
                        class="text-lg font-medium text-yellow-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-yellow-100 rounded-lg px-4 py-2 shadow-md">
                        🔊 Singa Mengaum Keras
                    </button>
                </div>
                <button @click="replayAudio"
                    class="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center space-x-2 mb-4">
                    <span>🔉 Putar Ulang Audio</span>
                </button>
            </div>
            <audio ref="mainAudio" id="singa-audio">
                <source src="../assets/belajarMembaca/SubtemaSinga/audio_singa.mp3"
                    type="audio/mpeg" />
            </audio>
        </div>

        <!-- Modal Eja Suku Kata -->
        <div v-if="modalVisible" @click="hideModal"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="absolute bg-white p-4 rounded-lg shadow-lg max-w-xs mx-4 z-50" @click.stop>
                <h2 class="text-4xl font-bold mb-4 text-yellow-800">Eja Suku Kata</h2>
                <p class="text-3xl text-center">{{ syllables }}</p>
                <audio ref="syllableAudio" class="hidden"></audio>
            </div>
        </div>

        <!-- Modal for Detail Kalimat -->
        <div v-if="isModalOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-40">
            <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl relative">
                <h3 class="text-3xl font-bold text-yellow-800 mb-4">
                    Detail Kalimat {{ currentDetailIndex + 1 }}
                </h3>
                <div class="flex flex-col items-center">
                    <img :src="getCurrentDetailImageSrc" alt="Detail Gambar"
                        class="object-cover rounded-lg shadow-lg mb-6 w-1/2 max-h-96" />
                    <p class="text-xl text-center mb-6">
                        <span v-for="(word, index) in currentDetail.words" :key="index"
                            @click="showSyllables(word.syllables, word.audioSrc)"
                            class="cursor-pointer text-blue-500 hover:text-blue-700">
                            {{ word.text }}
                        </span>
                    </p>
                    <button @click="nextDetail"
                        class="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 mb-2">
                        Next
                    </button>
                    <button @click="playAudio" class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                        Ulangi Audio
                    </button>
                    <button @click="closeModal"
                        class="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition-transform transform hover:scale-105">
                        ❌
                    </button>
                </div>
                <audio ref="detailAudio" class="hidden"></audio>
            </div>
        </div>
    </div>
</template>

<script>
import gambarKeluargaSingaBahagia from '../assets/belajarMembaca/SubtemaSinga/gambar_keluargaSingaBahagia.jpg';
import gambarSingaBerburuMangsa from '../assets/belajarMembaca/SubtemaSinga/gambar_singaBerburuMangsa.jpg';
import gambarSingaMengaumKeras from '../assets/belajarMembaca/SubtemaSinga/gambar_singaMengaumKeras.jpg';

import audioKalimatKeluargaSingaBahagia from '../assets/belajarMembaca/SubtemaSinga/audioKalimat_keluargaSingaBahagia.mp3';
import audioKalimatSingaBerburuMangsa from '../assets/belajarMembaca/SubtemaSinga/audioKalimat_singaBerburuMangsa.mp3';
import audioKalimatSingaMengaumKeras from '../assets/belajarMembaca/SubtemaSinga/audioKalimat_singaMengaumKeras.mp3';

import audioSukuKataSinga from '../assets/belajarMembaca/SubtemaSinga/audioSukuKata_si-nga.mp3';
import audioSukuKataBerburu from '../assets/belajarMembaca/SubtemaSinga/audioSukuKata_ber-bu-ru.mp3';
import audioSukuKataMangsa from '../assets/belajarMembaca/SubtemaSinga/audioSukuKata_mang-sa.mp3';
import audioSukuKataKeluarga from '../assets/belajarMembaca/SubtemaSinga/audioSukuKata_ke-lu-ar-ga.mp3';
import audioSukuKataBahagia from '../assets/belajarMembaca/SubtemaSinga/audioSukuKata_ba-ha-gi-a.mp3';
import audioSukuKataMengaum from '../assets/belajarMembaca/SubtemaSinga/audioSukuKata_me-nga-um.mp3';
import audioSukuKataKeras from '../assets/belajarMembaca/SubtemaSinga/audioSukuKata_ke-ras.mp3';

export default {
    name: 'BelajarTentangSinga',
    data() {
        return {
            isModalOpen: false,
            currentDetailIndex: 0,
            modalVisible: false,
            syllables: '',
            syllableAudioSrc: '',
            details: [
                {
                    imageSrc: gambarKeluargaSingaBahagia,
                    audioSrc: audioKalimatKeluargaSingaBahagia,
                    words: [
                        {
                            text: 'keluarga ',
                            syllables: 'ke lu ar ga',
                            audioSrc: audioSukuKataKeluarga,
                        },
                        {
                            text: 'singa ',
                            syllables: 'si nga',
                            audioSrc: audioSukuKataSinga,
                        },
                        { text: 'bahagia ', syllables: 'ba ha gi a', audioSrc: audioSukuKataBahagia },
                    ],
                },
                {
                    imageSrc: gambarSingaBerburuMangsa,
                    audioSrc: audioKalimatSingaBerburuMangsa,
                    words: [
                        {
                            text: 'singa ',
                            syllables: 'si nga',
                            audioSrc: audioSukuKataSinga,
                        },
                        { text: 'berburu ', syllables: 'ber bu ru', audioSrc: audioSukuKataBerburu },
                        { text: 'mangsa ', syllables: 'mang sa', audioSrc: audioSukuKataMangsa },
                    ],
                },
                {
                    imageSrc: gambarSingaMengaumKeras,
                    audioSrc: audioKalimatSingaMengaumKeras,
                    words: [
                        {
                            text: 'singa ',
                            syllables: 'si nga',
                            audioSrc: audioSukuKataSinga,
                        },
                        { text: 'mengaum ', syllables: 'me nga um', audioSrc: audioSukuKataMengaum },
                        { text: 'keras ', syllables: 'ke ras', audioSrc: audioSukuKataKeras },
                    ],
                },
            ],
        };
    },
    methods: {
        playAudio() {
            const audio = this.$refs.detailAudio;
            audio.currentTime = 0; // Reset audio to the beginning
            audio.src = this.details[this.currentDetailIndex].audioSrc; // Update the audio source
            audio.play();
        },
        replayAudio() {
            const audio = this.$refs.mainAudio;
            audio.currentTime = 0; // Reset audio to the beginning
            audio.play();
        },
        closeModal() {
            this.isModalOpen = false;
        },
        nextDetail() {
            this.currentDetailIndex = (this.currentDetailIndex + 1) % this.details.length;
            this.playAudio();
        },
        openModal(index) {
            this.currentDetailIndex = index;
            this.isModalOpen = true;
            this.playAudio();
        },
        hideModal() {
            this.modalVisible = false;
        },
        showSyllables(syllables, audioSrc) {
            this.syllables = syllables;
            this.syllableAudioSrc = audioSrc;
            this.modalVisible = true;

            setTimeout(() => {
                const audio = this.$refs.syllableAudio;
                audio.src = audioSrc; // Set the correct audio source
                audio.currentTime = 0; // Reset audio to the beginning
                audio.play();
            }, 200); // Wait for 200ms before playing syllable audio
        },
    },
    computed: {
        getCurrentDetailImageSrc() {
            return this.details[this.currentDetailIndex].imageSrc;
        },
        currentDetail() {
            return this.details[this.currentDetailIndex];
        },
    },
    mounted() {
        this.replayAudio();
    },
};
</script>

<style scoped>
.bounce-animation {
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}
</style>