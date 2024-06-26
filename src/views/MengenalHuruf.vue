<template>
    <div class="flex flex-col h-screen bg-gray-100">
        <div class="p-4">
            <RouterLink to="/" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-gray-800">MATERI MENGENAL HURUF</h1>
            <!-- <h2 class="text-2xl text-gray-600 mt-4">Ini isinya huruf A-Z dilooping</h2> -->
            <!-- <h2 class="text-xl text-gray-500 mt-2">Tiap huruf dapat diklik seperti ini</h2> -->
        </div>
        <div class="container mx-auto px-5 flex-1 flex flex-col items-center justify-center">
            <div class="grid grid-cols-6 gap-4">
                <RouterLink to="/lessons/mengenal-huruf/a"
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold hover:bg-teal-400 transition duration-300 ease-in-out">
                    A a
                </RouterLink>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    B b</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    C c</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    D d</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    E e</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    F f</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    G g</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    H h</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    I i</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    J j</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    K k</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    L l</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    M m</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    N n</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    O o</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    P p</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    Q q</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    R r</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    S s</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    T t</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    U u</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    V v</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    W w</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    X x</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    Y y</div>
                <div
                    class="flex items-center justify-center w-24 h-24 text-white rounded-full text-center bg-teal-500 text-3xl font-bold">
                    Z z</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>