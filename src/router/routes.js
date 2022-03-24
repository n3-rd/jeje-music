import SpotifyPlayer from "app/src/pages/players/SpotifyPlayer";
import OtoMusicPlayer from "app/src/pages/players/OtoMusicPlayer";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/SearchPage",
    component: () => import("pages/SearchPage.vue"),
  },
  {
    path: "/SelectPlayer",
    component: () => import("pages/SelectPlayer.vue"),
  },
  {
    path: "/SpotifyPlayer",
    component: SpotifyPlayer,
  },
  {
    path: "/OtoMusicPlayer",
    component: OtoMusicPlayer,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
