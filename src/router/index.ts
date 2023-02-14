import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import RoomView from "@/views/RoomView.vue"
import AboutView from "@/views/AboutView.vue";
import RulesView from "@/views/RulesView.vue";
import GameView from "@/views/GameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
    },
    {
      path: "/room",
      name: "room",
      component: RoomView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/rules",
      name: "rules",
      component: RulesView,
    },
    {
      path: "/game",
      name: "game",
      component: GameView,
    },
  ],
});

export default router;
