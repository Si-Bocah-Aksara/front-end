import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue";
import DashboardAdminView from "../views/DashboardAdmin.vue";
import AboutView from "../views/About.vue";
import ParentPageView from "../views/ParentPage.vue";
import LessonsView from "../views/Lessons.vue";
import SignInView from "../views/SignIn.vue";
import LoginView from "../views/Login.vue";
import MengenalHurufView from "../views/MengenalHuruf.vue";
import BelajarMembacaView from "../views/BelajarMembaca.vue";
import MengenalHurufAView from "../views/MengenalHurufA.vue";
import MengenalHurufADetailGambarView from "../views/MengenalHurufADetailGambar.vue";
import MengenalHurufAMiniGameView from "../views/MengenalHurufAMiniGame.vue";
import BelajarMembacaSubtemaHewanView from "../views/BelajarMembacaSubtemaHewan.vue";
import BelajarMembacaSubtemaHewanSapiView from "../views/BelajarMembacaSubtemaHewanSapi.vue";
import BelajarMembacaSubtemaHewanSapiDetailKalimatView from "../views/BelajarMembacaSubtemaHewanSapiDetailKalimat.vue";


const routes = [
    { path: '/', component: DashboardView },
    { path: '/about', component: AboutView },
    { path: '/parent-page', component: ParentPageView },
    { path: '/lessons', component: LessonsView },
    { path: '/sign-in', component: SignInView },
    { path: '/login', component: LoginView },
    { path: '/dashboard-admin', component: DashboardAdminView },

    // Halaman Mengenal Huruf
    { path: '/lessons/mengenal-huruf', component: MengenalHurufView },
    { path: '/lessons/mengenal-huruf/a', component: MengenalHurufAView },
    { path: '/lessons/mengenal-huruf/a/detail-gambar-1', component: MengenalHurufADetailGambarView },
    { path: '/lessons/mengenal-huruf/a/mini-game', component: MengenalHurufAMiniGameView },

    // Halaman Belajar Membaca
    { path: '/lessons/belajar-membaca', component: BelajarMembacaView },
    { path: '/lessons/belajar-membaca/subtema-hewan', component: BelajarMembacaSubtemaHewanView },
    { path: '/lessons/belajar-membaca/subtema-hewan/sapi', component: BelajarMembacaSubtemaHewanSapiView },
    { path: '/lessons/belajar-membaca/subtema-hewan/sapi/detail-kalimat-1', component: BelajarMembacaSubtemaHewanSapiDetailKalimatView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
