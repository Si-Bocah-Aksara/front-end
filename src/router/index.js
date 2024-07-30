import { createRouter, createWebHistory } from "vue-router";
//Halaman Depan
import HomeView from "../views/Home.vue";

import DashboardAdminView from "../views/DashboardAdmin.vue";
import AboutView from "../views/About.vue";
import ParentPageView from "../views/ParentPage.vue";
import LessonsView from "../views/Lessons.vue";
import SignInView from "../views/SignIn.vue";
import LoginView from "../views/Login.vue";
import MengenalHurufView from "../views/MengenalHuruf.vue";
import BelajarMembacaView from "../views/BelajarMembaca.vue";
import MengenalHurufAView from "../views/MengenalHurufA.vue";
import MengenalHurufBView from "../views/MengenalHurufB.vue";
import MengenalHurufMiniGameView from "../views/MengenalHurufMiniGame.vue";
import BelajarMembacaSubtemaHewanView from "../views/BelajarMembacaSubtemaHewan.vue";
import BelajarMembacaSubtemaHewanMonyetView from "../views/BelajarMembacaSubtemaHewanMonyet.vue";
import BelajarMembacaMiniGameSusunSukuKataView from "../views/BelajarMembacaMiniGameSusunSukuKata.vue";


const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/parent-page', component: ParentPageView },
    { path: '/lessons', component: LessonsView },
    { path: '/sign-in', component: SignInView },
    { path: '/login', component: LoginView },
    { path: '/dashboard-admin', component: DashboardAdminView },

    // Halaman Mengenal Huruf
    { path: '/lessons/mengenal-huruf', component: MengenalHurufView },
    { path: '/lessons/mengenal-huruf/a', component: MengenalHurufAView },
    { path: '/lessons/mengenal-huruf/b', component: MengenalHurufBView },

    // Mini Games Mengenal Huruf
    { path: '/lessons/mengenal-huruf/mini-game', component: MengenalHurufMiniGameView },

    // Halaman Belajar Membaca
    { path: '/lessons/belajar-membaca', component: BelajarMembacaView },
    { path: '/lessons/belajar-membaca/subtema-hewan', component: BelajarMembacaSubtemaHewanView },
    { path: '/lessons/belajar-membaca/subtema-hewan/monyet', component: BelajarMembacaSubtemaHewanMonyetView },

    // Mini Games Belajar Membaca
    { path: '/lessons/belajar-membaca/menyusun-suku-kata', component: BelajarMembacaMiniGameSusunSukuKataView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
