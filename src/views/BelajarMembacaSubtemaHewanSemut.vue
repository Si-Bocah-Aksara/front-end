<template>
    <div class="bg-red-50 min-h-screen py-8">
        <div class="relative z-10 p-4">
            <RouterLink to="/lessons/belajar-membaca/subtema-hewan" class="text-red-500 hover:underline text-lg">
                Back
            </RouterLink>
        </div>
        <div class="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-2xl">
            <h1 class="text-4xl font-bold text-center mb-8 text-red-700">
                Belajar Tentang Semut
            </h1>
            <div class="flex flex-col items-center">
                <div class="relative mb-8 bounce-animation">
                    <img src="../assets/belajarMembaca/SubtemaSemut/icon_semut.jpg" alt="Gambar Semut"
                        class="object-cover rounded-full shadow-lg w-72 h-72 border-4 border-red-400" />
                </div>
                <h2 class="text-2xl font-semibold mb-4 text-red-800">
                    Mindmap Semut
                </h2>
                <div class="grid grid-cols-2 gap-4 items-center mb-10 mt-3">
                    <button @click="openModal(0)"
                        class="text-lg font-medium text-red-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-red-100 rounded-lg px-4 py-2 shadow-md">
                        🍽️ Semut Cari Makanan
                    </button>
                    <button @click="openModal(1)"
                        class="text-lg font-medium text-red-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-red-100 rounded-lg px-4 py-2 shadow-md">
                        🤝 Semut Gotong Royong
                    </button>
                    <button @click="openModal(2)"
                        class="text-lg font-medium text-red-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-red-100 rounded-lg px-4 py-2 shadow-md">
                        🚶 Semut Jalan Berbaris
                    </button>
                </div>
                <button @click="replayAudio"
                    class="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center space-x-2 mb-4">
                    <span>🔉 Putar Ulang Audio</span>
                </button>
            </div>
            <audio ref="mainAudio" id="semut-audio">
                <source src="../assets/belajarMembaca/SubtemaSemut/audio_semut.mp3" type="audio/mpeg" />
            </audio>
        </div>

        <!-- Modal Eja Suku Kata -->
        <div v-if="modalVisible" @click="hideModal"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="absolute bg-white p-4 rounded-lg shadow-lg max-w-xs mx-4 z-50" @click.stop>
                <h2 class="text-4xl font-bold mb-4 text-red-800">Eja Suku Kata</h2>
                <p class="text-3xl text-center">{{ syllables }}</p>
                <audio ref="syllableAudio" class="hidden"></audio>
            </div>
        </div>

        <!-- Modal for Detail Kalimat -->
        <div v-if="isModalOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-40">
            <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl relative">
                <h3 class="text-3xl font-bold text-red-800 mb-4">
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
import gambarSemutCariMakanan from '../assets/belajarMembaca/SubtemaSemut/gambar_semutCariMakanan.jpg';
import gambarSemutGotongRoyong from '../assets/belajarMembaca/SubtemaSemut/gambar_semutGotongRoyong.jpg';
import gambarSemutJalanBerbaris from '../assets/belajarMembaca/SubtemaSemut/gambar_semutJalanBerbaris.jpg';

import audioKalimatSemutCariMakan from '../assets/belajarMembaca/SubtemaSemut/audioKalimat_semutCariMakan.mp3';
import audioKalimatSemutGotongRoyong from '../assets/belajarMembaca/SubtemaSemut/audioKalimat_semutGotongRoyong.mp3';
import audioKalimatSemutJalanBerbaris from '../assets/belajarMembaca/SubtemaSemut/audioKalimat_semutJalanBerbaris.mp3';

import audioSukuKataSemut from '../assets/belajarMembaca/SubtemaSemut/audioSukuKata_se-mut.mp3';
import audioSukuKataCari from '../assets/belajarMembaca/SubtemaSemut/audioSukuKata_ca-ri.mp3';
import audioSukuKataMakanan from '../assets/belajarMembaca/SubtemaSemut/audioSukuKata_ma-ka-nan.mp3';
import audioSukuKataGotong from '../assets/belajarMembaca/SubtemaSemut/audioSukuKata_go-tong.mp3';
import audioSukuKataRoyong from '../assets/belajarMembaca/SubtemaSemut/audioSukuKata_ro-yong.mp3';
import audioSukuKataJalan from '../assets/belajarMembaca/SubtemaSemut/audioSukuKata_ja-lan.mp3';
import audioSukuKataBerbaris from '../assets/belajarMembaca/SubtemaSemut/audioSukuKata_ber-ba-ris.mp3';

export default {
    name: 'BelajarTentangSemut',
    data() {
        return {
            isModalOpen: false,
            currentDetailIndex: 0,
            modalVisible: false,
            syllables: '',
            syllableAudioSrc: '',
            details: [
                {
                    imageSrc: gambarSemutCariMakanan,
                    audioSrc: audioKalimatSemutCariMakan,
                    words: [
                        {
                            text: 'semut ',
                            syllables: 'se mut',
                            audioSrc: audioSukuKataSemut,
                        },
                        { text: 'cari ', syllables: 'ca ri', audioSrc: audioSukuKataCari },
                        { text: 'makanan ', syllables: 'ma ka nan', audioSrc: audioSukuKataMakanan },
                    ],
                },
                {
                    imageSrc: gambarSemutGotongRoyong,
                    audioSrc: audioKalimatSemutGotongRoyong,
                    words: [
                        {
                            text: 'semut ',
                            syllables: 'se mut',
                            audioSrc: audioSukuKataSemut,
                        },
                        { text: 'gotong ', syllables: 'go tong', audioSrc: audioSukuKataGotong },
                        { text: 'royong ', syllables: 'ro yong', audioSrc: audioSukuKataRoyong },
                    ],
                },
                {
                    imageSrc: gambarSemutJalanBerbaris,
                    audioSrc: audioKalimatSemutJalanBerbaris,
                    words: [
                        {
                            text: 'semut ',
                            syllables: 'se mut',
                            audioSrc: audioSukuKataSemut,
                        },
                        { text: 'jalan ', syllables: 'ja lan', audioSrc: audioSukuKataJalan },
                        { text: 'berbaris ', syllables: 'ber ba ris', audioSrc: audioSukuKataBerbaris },
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