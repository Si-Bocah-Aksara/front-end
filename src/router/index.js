import { createRouter, createWebHistory } from "vue-router";
//Halaman Depan
import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";
import ParentPageView from "../views/ParentPage.vue";
import LessonsView from "../views/Lessons.vue";
// import SignInView from "../views/SignIn.vue";
// import LoginView from "../views/Login.vue";
import MengenalHurufView from "../views/MengenalHuruf.vue";
import BelajarMembacaView from "../views/BelajarMembaca.vue";
import MengenalHurufAView from "../views/MengenalHurufA.vue";
import MengenalHurufBView from "../views/MengenalHurufB.vue";
import MengenalHurufCView from "../views/MengenalHurufC.vue";
import MengenalHurufDView from "../views/MengenalHurufD.vue";
import MengenalHurufEView from "../views/MengenalHurufE.vue";
import MengenalHurufFView from "../views/MengenalHurufF.vue";
import MengenalHurufGView from "../views/MengenalHurufG.vue";
import MengenalHurufHView from "../views/MengenalHurufH.vue";
import MengenalHurufIView from "../views/MengenalHurufI.vue";
import MengenalHurufJView from "../views/MengenalHurufJ.vue";
import MengenalHurufKView from "../views/MengenalHurufK.vue";
import MengenalHurufLView from "../views/MengenalHurufL.vue";
import MengenalHurufMView from "../views/MengenalHurufM.vue";
import MengenalHurufNView from "../views/MengenalHurufN.vue";
import MengenalHurufOView from "../views/MengenalHurufO.vue";
import MengenalHurufPView from "../views/MengenalHurufP.vue";
import MengenalHurufQView from "../views/MengenalHurufQ.vue";
// import MengenalHurufRView from "../views/MengenalHurufR.vue";
// import MengenalHurufSView from "../views/MengenalHurufS.vue";
// import MengenalHurufTView from "../views/MengenalHurufT.vue";
// import MengenalHurufUView from "../views/MengenalHurufU.vue";
// import MengenalHurufVView from "../views/MengenalHurufV.vue";
// import MengenalHurufWView from "../views/MengenalHurufW.vue";
// import MengenalHurufXView from "../views/MengenalHurufX.vue";
// import MengenalHurufYView from "../views/MengenalHurufY.vue";
// import MengenalHurufZView from "../views/MengenalHurufZ.vue";
// import MengenalHurufMiniGameView from "../views/MengenalHurufMiniGame.vue";
import MengenalHurufMiniGameView from "../views/MengenalHurufMiniGameRandomize.vue";
import BelajarMembacaSubtemaHewanView from "../views/BelajarMembacaSubtemaHewan.vue";
import BelajarMembacaSubtemaHewanMonyetView from "../views/BelajarMembacaSubtemaHewanMonyet.vue";
import BelajarMembacaMiniGameSusunSukuKataView from "../views/BelajarMembacaMiniGameSusunSukuKata.vue";
import Scoreboard from "../views/Scoreboard.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/parent-page', component: ParentPageView },
    { path: '/lessons', component: LessonsView },
    // { path: '/sign-in', component: SignInView },
    // { path: '/login', component: LoginView },
    // { path: '/dashboard-admin', component: DashboardAdminView },

    // Halaman Mengenal Huruf
    { path: '/lessons/mengenal-huruf', component: MengenalHurufView },
    { path: '/lessons/mengenal-huruf/a', component: MengenalHurufAView },
    { path: '/lessons/mengenal-huruf/b', component: MengenalHurufBView },
    { path: '/lessons/mengenal-huruf/c', component: MengenalHurufCView },
    { path: '/lessons/mengenal-huruf/d', component: MengenalHurufDView },
    { path: '/lessons/mengenal-huruf/e', component: MengenalHurufEView },
    { path: '/lessons/mengenal-huruf/f', component: MengenalHurufFView },
    { path: '/lessons/mengenal-huruf/g', component: MengenalHurufGView },
    { path: '/lessons/mengenal-huruf/h', component: MengenalHurufHView },
    { path: '/lessons/mengenal-huruf/i', component: MengenalHurufIView },
    { path: '/lessons/mengenal-huruf/j', component: MengenalHurufJView },
    { path: '/lessons/mengenal-huruf/k', component: MengenalHurufKView },
    { path: '/lessons/mengenal-huruf/l', component: MengenalHurufLView },
    { path: '/lessons/mengenal-huruf/m', component: MengenalHurufMView },
    { path: '/lessons/mengenal-huruf/n', component: MengenalHurufNView },
    { path: '/lessons/mengenal-huruf/o', component: MengenalHurufOView },
    { path: '/lessons/mengenal-huruf/p', component: MengenalHurufPView },
    { path: '/lessons/mengenal-huruf/q', component: MengenalHurufQView },
    // { path: '/lessons/mengenal-huruf/r', component: MengenalHurufRView },
    // { path: '/lessons/mengenal-huruf/s', component: MengenalHurufSView },
    // { path: '/lessons/mengenal-huruf/t', component: MengenalHurufTView },
    // { path: '/lessons/mengenal-huruf/u', component: MengenalHurufUView },
    // { path: '/lessons/mengenal-huruf/v', component: MengenalHurufVView },
    // { path: '/lessons/mengenal-huruf/w', component: MengenalHurufWView },
    // { path: '/lessons/mengenal-huruf/x', component: MengenalHurufXView },
    // { path: '/lessons/mengenal-huruf/y', component: MengenalHurufYView },
    // { path: '/lessons/mengenal-huruf/z', component: MengenalHurufZView },

    // Mini Games Mengenal Huruf
    { path: '/lessons/mengenal-huruf/mini-game', component: MengenalHurufMiniGameView },

    // Halaman Belajar Membaca
    { path: '/lessons/belajar-membaca', component: BelajarMembacaView },
    { path: '/lessons/belajar-membaca/subtema-hewan', component: BelajarMembacaSubtemaHewanView },
    { path: '/lessons/belajar-membaca/subtema-hewan/monyet', component: BelajarMembacaSubtemaHewanMonyetView },

    // Mini Games Belajar Membaca
    { path: '/lessons/belajar-membaca/menyusun-suku-kata', component: BelajarMembacaMiniGameSusunSukuKataView },

    //Highscore
    {path: '/scoreboard', component:Scoreboard}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
