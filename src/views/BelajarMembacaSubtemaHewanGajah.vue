<template>
    <div class="bg-yellow-50 min-h-screen py-8">
        <div class="relative z-10 p-4">
            <RouterLink to="/lessons/belajar-membaca/subtema-hewan" class="text-blue-500 hover:underline text-lg">Back
            </RouterLink>
        </div>
        <div class="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-2xl">
            <h1 class="text-4xl font-bold text-center mb-8 text-yellow-700">
                Belajar Tentang Gajah
            </h1>
            <div class="flex flex-col items-center">
                <div class="relative mb-8 animate-swing">
                    <img src="../assets/belajarMembaca/SubtemaGajah/icon_gajah.jpg" alt="Gambar Gajah"
                        class="object-cover rounded-full shadow-lg w-72 h-72 border-4 border-yellow-400 swing-animation" />
                </div>
                <h2 class="text-2xl font-semibold mb-4 text-yellow-800">
                    Mindmap Gajah
                </h2>
                <div class="grid grid-cols-2 gap-4 items-center mb-10 mt-3">
                    <button @click="openModal(0)"
                        class="text-lg font-medium text-yellow-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-yellow-100 rounded-lg px-4 py-2 shadow-md">
                        🐘 Badan Gajah
                    </button>
                    <button @click="openModal(1)"
                        class="text-lg font-medium text-yellow-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-yellow-100 rounded-lg px-4 py-2 shadow-md">
                        🐘 Kaki Gajah
                    </button>
                    <button @click="openModal(2)"
                        class="text-lg font-medium text-yellow-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-yellow-100 rounded-lg px-4 py-2 shadow-md">
                        👂 Telinga Gajah
                    </button>
                </div>
                <button @click="replayAudio"
                    class="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center space-x-2 mb-4">
                    <span>🔉 Putar Ulang Audio</span>
                </button>
            </div>
            <audio id="gajah-audio">
                <source src="../assets/belajarMembaca/SubtemaGajah/audio_gajah.mp3" type="audio/mpeg" />
                <source src="../assets/belajarMembaca/SubtemaGajah/audio_gajah.ogg" type="audio/ogg" />
            </audio>
        </div>

        <!-- Modal Eja Suku Kata -->
        <div v-if="modalVisible" @click="hideModal"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="absolute bg-white p-4 rounded-lg shadow-lg max-w-xs mx-4 z-50" @click.stop>
                <h2 class="text-4xl font-bold mb-4 text-yellow-800">Eja Suku Kata</h2>
                <p class="text-3xl text-center">{{ syllables }}</p>
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
                            class="cursor-pointer text-blue-500 hover:text-blue-700">{{ word.text }}</span>
                    </p>
                    <button @click="nextDetail"
                        class="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 mb-2">
                        Next
                    </button>
                    <button @click="replayAudio"
                        class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                        Ulangi Audio
                    </button>
                    <button @click="closeModal"
                        class="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition-transform transform hover:scale-105">
                        ❌
                    </button>
                </div>
                <audio ref="detailAudio" :src="currentDetail.audioSrc" type="audio/mpeg">
                    <source :src="currentDetail.audioSrc.replace('.mp3', '.ogg')" type="audio/ogg" />
                </audio>
                <audio ref="syllableAudio">
                    <source :src="syllableAudioSrc" type="audio/mpeg" />
                    <source :src="syllableAudioSrc.replace('.mp3', '.ogg')" type="audio/ogg" />
                </audio>
            </div>
        </div>
    </div>
</template>

<script>
import gambarGajahBesar from '../assets/belajarMembaca/SubtemaGajah/gambar_gajahBesar.jpg';
import gambarGajahKaki from '../assets/belajarMembaca/SubtemaGajah/gambar_gajahKaki.jpg';
import gambarGajahTelinga from '../assets/belajarMembaca/SubtemaGajah/gambar_gajahTelinga.jpg';

import audioKalimatGajahBesar from '../assets/belajarMembaca/SubtemaGajah/audioKalimat_gajahBadannyaBesar.mp3';
import audioKalimatGajahKaki from '../assets/belajarMembaca/SubtemaGajah/audiokalimat_gajahBerkakiEmpat.mp3';
import audioKalimatGajahTelinga from '../assets/belajarMembaca/SubtemaGajah/audioKalimat_telingaGajahLebar.mp3';

import audioSukuKataGajah from '../assets/belajarMembaca/SubtemaGajah/audioSukuKata_ga-jah.mp3';
import audioSukuKataBesar from '../assets/belajarMembaca/SubtemaGajah/audioSukuKata_be-sar.mp3';
import audioSukuKataBadan from '../assets/belajarMembaca/SubtemaGajah/audioSukuKata_ba-dan-nya.mp3';
import audioSukuKataEmpat from '../assets/belajarMembaca/SubtemaGajah/audioSukuKata_em-pat.mp3';
import audioSukuKataKaki from '../assets/belajarMembaca/SubtemaGajah/audioSukuKata_ber-ka-ki.mp3';
import audioSukuKataTelinga from '../assets/belajarMembaca/SubtemaGajah/audioSukuKata_te-li-nga.mp3';
import audioSukuKataLebar from '../assets/belajarMembaca/SubtemaGajah/audioSukuKata_le-bar.mp3';

export default {
    name: 'BelajarTentangGajah',
    data() {
        return {
            isModalOpen: false,
            currentDetailIndex: 0,
            modalVisible: false,
            syllables: '',
            syllableAudioSrc: '',
            details: [
                {
                    imageSrc: gambarGajahBesar,
                    audioSrc: audioKalimatGajahBesar,
                    words: [
                        { text: 'gajah ', syllables: 'ga jah', audioSrc: audioSukuKataGajah },
                        { text: 'badannya ', syllables: 'ba dan nya', audioSrc: audioSukuKataBadan },
                        { text: 'besar ', syllables: 'be sar', audioSrc: audioSukuKataBesar },
                    ],
                },
                {
                    imageSrc: gambarGajahKaki,
                    audioSrc: audioKalimatGajahKaki,
                    words: [
                        { text: 'gajah ', syllables: 'ga jah', audioSrc: audioSukuKataGajah },
                        { text: 'berkaki ', syllables: 'ber ka ki', audioSrc: audioSukuKataKaki },
                        { text: 'empat ', syllables: 'em pat', audioSrc: audioSukuKataEmpat },
                    ],
                },
                {
                    imageSrc: gambarGajahTelinga,
                    audioSrc: audioKalimatGajahTelinga,
                    words: [
                        { text: 'telinga ', syllables: 'te lin ga', audioSrc: audioSukuKataTelinga },
                        { text: 'gajah ', syllables: 'ga jah', audioSrc: audioSukuKataGajah },
                        { text: 'lebar ', syllables: 'le bar', audioSrc: audioSukuKataLebar },
                    ],
                },
            ],
        };
    },
    computed: {
        currentDetail() {
            return this.details[this.currentDetailIndex];
        },
        getCurrentDetailImageSrc() {
            return this.currentDetail.imageSrc;
        },
    },
    mounted() {
        this.playAudio();
    },
    methods: {
        async playAudio() {
            const audio = document.getElementById('gajah-audio');
            if (audio) {
                try {
                    await audio.play();
                } catch (error) {
                    console.log('Audio playback failed:', error);
                }
            } else {
                console.log('Audio element not found');
            }
        },
        replayAudio() {
            const audio = this.$refs.detailAudio;
            if (audio) {
                audio.currentTime = 0;
                audio.play().catch((error) => {
                    console.log('Audio playback failed:', error);
                });
            }
        },
        openModal(index) {
            this.currentDetailIndex = index;
            this.isModalOpen = true;
            this.$nextTick(() => {
                this.replayAudio();
            });
        },
        closeModal() {
            this.isModalOpen = false;
        },
        nextDetail() {
            if (this.currentDetailIndex < this.details.length - 1) {
                this.currentDetailIndex++;
            } else {
                this.currentDetailIndex = 0; // Reset ke detail pertama
            }
            this.$nextTick(() => {
                this.$refs.detailAudio.load(); // Memastikan audio direload
                this.replayAudio();
            });
        },
        showSyllables(syllables, audioSrc) {
            this.syllables = syllables;
            this.syllableAudioSrc = audioSrc;
            this.modalVisible = true;

            this.$nextTick(() => {
                this.$refs.syllableAudio.load();
                this.playSyllableAudio();
            });
        },
        hideModal() {
            this.modalVisible = false;
        },
        async playSyllableAudio() {
            const audio = this.$refs.syllableAudio;
            if (audio) {
                try {
                    await audio.play();
                } catch (error) {
                    console.log('Audio suku kata playback failed:', error);
                }
            } else {
                console.log('Syllable audio element not found');
            }
        },
    },
};
</script>

<style scoped>
@keyframes swing {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(15deg); }
    40% { transform: rotate(-10deg); }
    60% { transform: rotate(5deg); }
    80% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
}

.swing-animation {
    @apply object-cover rounded-full shadow-lg w-72 h-72 border-4 border-yellow-400;
    animation: swing 2s ease-in-out infinite;
}
</style>

