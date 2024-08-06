<template>
    <div class="bg-yellow-50 min-h-screen py-8">
        <div class="relative z-10 p-4">
            <RouterLink to="/lessons/belajar-membaca/subtema-hewan" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <div class="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-2xl">
            <h1 class="text-4xl font-bold text-center mb-8 text-yellow-700">Belajar Tentang Monyet</h1>
            <div class="flex flex-col items-center">
                <div class="relative mb-8 animate-swing">
                    <img src="../assets/belajarMembaca/SubtemaMonyet/icon_monyet.jpg" alt="Gambar Monyet"
                        class="object-cover rounded-full shadow-lg w-72 h-72 border-4 border-yellow-400 swing-animation">
                </div>
                <h2 class="text-2xl font-semibold mb-4 text-yellow-800">Mindmap Monyet</h2>
                <div class="grid grid-cols-2 gap-4 items-center mb-10 mt-3">
                    <button @click="openModal(0)"
                        class="text-lg font-medium text-yellow-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-yellow-100 rounded-lg px-4 py-2 shadow-md">
                        🍌 Makanan Monyet
                    </button>
                    <button @click="openModal(1)"
                        class="text-lg font-medium text-yellow-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-yellow-100 rounded-lg px-4 py-2 shadow-md">
                        🌴 Rumah Monyet
                    </button>
                    <button @click="openModal(2)"
                        class="text-lg font-medium text-yellow-800 hover:text-blue-700 transition-transform transform hover:scale-105 bg-yellow-100 rounded-lg px-4 py-2 shadow-md">
                        🐒 Kebiasaan Monyet
                    </button>
                </div>
                <button @click="replayAudio"
                    class="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center space-x-2 mb-4">
                    <span>🔉 Putar Ulang Audio</span>
                </button>
            </div>
            <audio id="monyet-audio">
                <source src="../assets/belajarMembaca/SubtemaMonyet/audio_monyet.mp3" type="audio/mpeg">
                <source src="../assets/belajarMembaca/SubtemaMonyet/audio_monyet.ogg" type="audio/ogg">
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
                <h3 class="text-3xl font-bold text-yellow-800 mb-4">Detail Kalimat {{ currentDetailIndex + 1 }}</h3>
                <div class="flex flex-col items-center">
                    <img :src="getCurrentDetailImageSrc" alt="Detail Gambar"
                        class="object-cover rounded-lg shadow-lg mb-6 w-1/2 max-h-96">
                    <p class="text-xl text-center mb-6">
                        <span v-for="(word, index) in currentDetail.words" :key="index"
                            @click="showSyllables(word.syllables, word.audioSrc)"
                            class="cursor-pointer text-blue-500 hover:text-blue-700">{{ word.text }} </span>
                    </p>
                    <button @click="nextDetail"
                        class="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 mb-2">
                        Next
                    </button>
                    <button @click="replayAudio"
                        class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">Ulangi Audio</button>
                    <button @click="closeModal"
                        class="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition-transform transform hover:scale-105">
                        ❌
                    </button>
                </div>
                <audio ref="detailAudio" :src="currentDetail.audioSrc" type="audio/mpeg">
                    <source :src="currentDetail.audioSrc.replace('.mp3', '.ogg')" type="audio/ogg">
                </audio>
                <audio ref="syllableAudio">
                    <source :src="syllableAudioSrc" type="audio/mpeg">
                    <source :src="syllableAudioSrc.replace('.mp3', '.ogg')" type="audio/ogg">
                </audio>
            </div>
        </div>
    </div>
</template>

<script>
import gambarPisang from '../assets/belajarMembaca/SubtemaMonyet/gambar_pisang.jpg';
import gambarHutan from '../assets/belajarMembaca/SubtemaMonyet/gambar_hutan.jpg';
import gambarMemanjat from '../assets/belajarMembaca/SubtemaMonyet/gambar_memanjat.jpg';

import audioKalimatMonyetSukaPisang from '../assets/belajarMembaca/SubtemaMonyet/audioKalimat_monyetSukaPisang.mp3';
import audioKalimatHutanHabitatMonyet from '../assets/belajarMembaca/SubtemaMonyet/audioKalimat_hutanHabitatMonyet.mp3';
import audioKalimatMonyetSedangMemanjat from '../assets/belajarMembaca/SubtemaMonyet/audioKalimat_monyetSedangMemanjat.mp3';

import audioSukuKataMonyet from '../assets/belajarMembaca/SubtemaMonyet/audioSukuKata_mo-nyet.mp3';
import audioSukuKataSuka from '../assets/belajarMembaca/SubtemaMonyet/audioSukuKata_su-ka.mp3';
import audioSukuKataPisang from '../assets/belajarMembaca/SubtemaMonyet/audioSukuKata_pi-sang.mp3';
import audioSukuKataMemanjat from '../assets/belajarMembaca/SubtemaMonyet/audioSukuKata_me-man-jat.mp3';
import audioSukuKataHutan from '../assets/belajarMembaca/SubtemaMonyet/audioSukuKata_hu-tan.mp3';
import audioSukuKataHabitat from '../assets/belajarMembaca/SubtemaMonyet/audioSukuKata_ha-bi-tat.mp3';
import audioSukuKataSedang from '../assets/belajarMembaca/SubtemaMonyet/audioSukuKata_se-dang.mp3';

export default {
    name: 'BelajarTentangMonyet',
    data() {
        return {
            isModalOpen: false,
            currentDetailIndex: 0,
            modalVisible: false,
            syllables: '',
            syllableAudioSrc: '',
            details: [
                {
                    imageSrc: gambarPisang,
                    audioSrc: audioKalimatMonyetSukaPisang,
                    words: [
                        { text: 'monyet ', syllables: 'mo nyet', audioSrc: audioSukuKataMonyet },
                        { text: 'suka ', syllables: 'su ka', audioSrc: audioSukuKataSuka },
                        { text: 'pisang ', syllables: 'pi sang', audioSrc: audioSukuKataPisang }
                    ]
                },
                {
                    imageSrc: gambarHutan,
                    audioSrc: audioKalimatHutanHabitatMonyet,
                    words: [
                        { text: 'hutan ', syllables: 'hu tan', audioSrc: audioSukuKataHutan },
                        { text: 'habitat ', syllables: 'ha bi tat', audioSrc: audioSukuKataHabitat },
                        { text: 'monyet ', syllables: 'mo nyet', audioSrc: audioSukuKataMonyet }
                    ]
                },
                {
                    imageSrc: gambarMemanjat,
                    audioSrc: audioKalimatMonyetSedangMemanjat,
                    words: [
                        { text: 'monyet ', syllables: 'mo nyet', audioSrc: audioSukuKataMonyet },
                        { text: 'sedang ', syllables: 'se dang', audioSrc: audioSukuKataSedang },
                        { text: 'memanjat ', syllables: 'me man jat', audioSrc: audioSukuKataMemanjat }
                    ]
                },
            ]
        };
    },
    computed: {
        currentDetail() {
            return this.details[this.currentDetailIndex];
        },
        getCurrentDetailImageSrc() {
            return this.currentDetail.imageSrc;
        }
    },
    mounted() {
        this.playAudio();
    },
    methods: {
        async playAudio() {
            const audio = document.getElementById('monyet-audio');
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
                audio.play().catch(error => {
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
        }
    }
}
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