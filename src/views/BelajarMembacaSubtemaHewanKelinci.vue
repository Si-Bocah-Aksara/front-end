<template>
    <div class="bg-pink-50 min-h-screen py-8">
        <div class="relative z-10 p-4">
            <RouterLink to="/lessons/belajar-membaca/subtema-hewan" class="text-blue-500 hover:underline text-lg">
                Back
            </RouterLink>
        </div>
        <div class="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-2xl">
            <h1 class="text-4xl font-bold text-center mb-8 text-pink-700">
                Belajar Tentang Kelinci
            </h1>
            <div class="flex flex-col items-center">
                <div class="relative mb-8 bounce-animation">
                    <img src="../assets/belajarMembaca/SubtemaKelinci/icon_kelinci.jpg" alt="Gambar Kelinci"
                        class="object-cover rounded-full shadow-lg w-72 h-72 border-4 border-pink-400" />
                </div>
                <h2 class="text-2xl font-semibold mb-4 text-pink-800">
                    Mindmap Kelinci
                </h2>
                <div class="grid grid-cols-2 gap-4 items-center mb-10 mt-3">
                    <button @click="openModal(0)"
                        class="text-lg font-medium text-pink-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-pink-100 rounded-lg px-4 py-2 shadow-md">
                        🏃‍♂️ Kelinci Berlari
                    </button>
                    <button @click="openModal(1)"
                        class="text-lg font-medium text-pink-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-pink-100 rounded-lg px-4 py-2 shadow-md">
                        🥕 Makanan Kelinci
                    </button>
                    <button @click="openModal(2)"
                        class="text-lg font-medium text-pink-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-pink-100 rounded-lg px-4 py-2 shadow-md">
                        🐇 Kelinci Melompat
                    </button>
                </div>
                <button @click="replayAudio"
                    class="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center space-x-2 mb-4">
                    <span>🔉 Putar Ulang Audio</span>
                </button>
            </div>
            <audio ref="mainAudio" id="kelinci-audio">
                <source src="../assets/belajarMembaca/SubtemaKelinci/audio_kelinci.mp3" type="audio/mpeg" />
            </audio>
        </div>

        <!-- Modal Eja Suku Kata -->
        <div v-if="modalVisible" @click="hideModal"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="absolute bg-white p-4 rounded-lg shadow-lg max-w-xs mx-4 z-50" @click.stop>
                <h2 class="text-4xl font-bold mb-4 text-pink-800">Eja Suku Kata</h2>
                <p class="text-3xl text-center">{{ syllables }}</p>
                <audio ref="syllableAudio" class="hidden"></audio>
            </div>
        </div>

        <!-- Modal for Detail Kalimat -->
        <div v-if="isModalOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-40">
            <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl relative">
                <h3 class="text-3xl font-bold text-pink-800 mb-4">
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
import gambarKelinciBerlariCepat from '../assets/belajarMembaca/SubtemaKelinci/gambar_kelinciBerlariCepat.jpg';
import gambarKelinciLompatTinggi from '../assets/belajarMembaca/SubtemaKelinci/gambar_kelinciLompatTinggi.jpg';
import gambarKelinciMakanWortel from '../assets/belajarMembaca/SubtemaKelinci/gambar_kelinciMakanWortel.jpg';

import audioKalimatKelinciBerlariCepat from '../assets/belajarMembaca/SubtemaKelinci/audioKalimat_kelinciBerlariCepat.mp3';
import audioKalimatKelinciLompatTinggi from '../assets/belajarMembaca/SubtemaKelinci/audioKalimat_kelinciLompatTinggi.mp3';
import audioKalimatKelinciMakanWortel from '../assets/belajarMembaca/SubtemaKelinci/audioKalimat_kelinciMakanWortel.mp3';

import audioSukuKataKelinci from '../assets/belajarMembaca/SubtemaKelinci/audioSukuKata_ke-lin-ci.mp3';
import audioSukuKataBerlari from '../assets/belajarMembaca/SubtemaKelinci/audioSukuKata_ber-la-ri.mp3';
import audioSukuKataCepat from '../assets/belajarMembaca/SubtemaKelinci/audioSukuKata_ce-pat.mp3';
import audioSukuKataMakan from '../assets/belajarMembaca/SubtemaKelinci/audioSukuKata_ma-kan.mp3';
import audioSukuKataWortel from '../assets/belajarMembaca/SubtemaKelinci/audioSukuKata_wor-tel.mp3';
import audioSukuKataLompat from '../assets/belajarMembaca/SubtemaKelinci/audioSukuKata_lom-pat.mp3';
import audioSukuKataTinggi from '../assets/belajarMembaca/SubtemaKelinci/audioSukuKata_ting-gi.mp3';

export default {
    name: 'BelajarTentangKelinci',
    data() {
        return {
            isModalOpen: false,
            currentDetailIndex: 0,
            modalVisible: false,
            syllables: '',
            syllableAudioSrc: '',
            details: [
                {
                    imageSrc: gambarKelinciBerlariCepat,
                    audioSrc: audioKalimatKelinciBerlariCepat,
                    words: [
                        {
                            text: 'kelinci ',
                            syllables: 'ke lin ci',
                            audioSrc: audioSukuKataKelinci,
                        },
                        {
                            text: 'berlari ',
                            syllables: 'ber la ri',
                            audioSrc: audioSukuKataBerlari,
                        },
                        { text: 'cepat ', syllables: 'ce pat', audioSrc: audioSukuKataCepat },
                    ],
                },
                {
                    imageSrc: gambarKelinciMakanWortel,
                    audioSrc: audioKalimatKelinciMakanWortel,
                    words: [
                        {
                            text: 'kelinci ',
                            syllables: 'ke lin ci',
                            audioSrc: audioSukuKataKelinci,
                        },
                        { text: 'makan ', syllables: 'ma kan', audioSrc: audioSukuKataMakan },
                        { text: 'wortel ', syllables: 'wor tel', audioSrc: audioSukuKataWortel },
                    ],
                },
                {
                    imageSrc: gambarKelinciLompatTinggi,
                    audioSrc: audioKalimatKelinciLompatTinggi,
                    words: [
                        {
                            text: 'kelinci ',
                            syllables: 'ke lin ci',
                            audioSrc: audioSukuKataKelinci,
                        },
                        { text: 'lompat ', syllables: 'lom pat', audioSrc: audioSukuKataLompat },
                        { text: 'tinggi ', syllables: 'ting gi', audioSrc: audioSukuKataTinggi },
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