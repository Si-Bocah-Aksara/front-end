<template>
    <div class="flex flex-col h-screen bg-gradient-to-r from-blue-200 to-teal-200 overflow-auto">
        <div class="relative z-10 p-4">
            <RouterLink to="/lessons" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <!-- Judul -->
        <div class="text-center mb-8 mt-16">
            <h1 class="text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-md">Mengenal Huruf</h1>
            <p class="text-lg text-gray-600">Belajar huruf dengan cara yang menyenangkan!</p>
        </div>

        <!-- Container Huruf dan Mini Games -->
        <div class="container mx-auto px-5 flex-1 flex flex-col items-center justify-center space-y-8">
            <!-- Grid Huruf -->
            <div class="grid grid-cols-3 md:grid-cols-6 gap-7" id="abjad">
                <RouterLink to="/lessons/mengenal-huruf/a"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    A a
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/b"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    B b
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/c"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    C c
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/d"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    D d
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/e"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    E e
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/f"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    F f
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/g"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    G g
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/h"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    H h
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/i"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    I i
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/j"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    J j
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/k"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    K k
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/l"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    L l
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/m"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    M m
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/n"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    N n
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/o"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    O o
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/p"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    P p
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/q"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    Q q
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/r"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    R r
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/s"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    S s
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/t"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    T t
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/u"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    U u
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/v"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    V v
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/w"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    W w
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/x"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    X x
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/y"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    Y y
                </RouterLink>
                <RouterLink to="/lessons/mengenal-huruf/z"
                    class="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 cursor-pointer">
                    Z z
                </RouterLink>
            </div>

            <div class="text-center mb-8 mt-16">
                <h1 class="text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-md">🎮 Mini Games 🎮</h1>
            </div>

            <!-- Mini Games -->
            <div id="mini-games" class="flex flex-wrap justify-center space-x-4 mt-8 mb-20">
                <RouterLink to="/lessons/mengenal-huruf/mini-game">
                    <button
                        class=" mb-10 px-6 py-3 bg-yellow-500 text-white font-bold text-xl rounded-full shadow-md hover:bg-yellow-400 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                        🔍 Seleksi Huruf
                    </button>
                </RouterLink>
                <!-- <RouterLink disabled to="/lessons/mengenal-huruf/mini-game2">
                    <button
                        class="px-6 py-3 bg-green-500 text-white font-bold text-xl rounded-full shadow-md hover:bg-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                        🎲 Game 2
                    </button>
                </RouterLink>
                <RouterLink disabled to="/lessons/mengenal-huruf/mini-game3">
                    <button
                        class="px-6 py-3 bg-purple-500 text-white font-bold text-xl rounded-full shadow-md hover:bg-purple-400 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                        🧩 Game 3
                    </button>
                </RouterLink> -->
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
