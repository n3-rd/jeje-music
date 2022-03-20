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
    component: () => import("pages/players/SpotifyPlayer.vue"),
  },
  {
    path: "/OtoMusicPlayer",
    component: () => import("pages/players/OtoMusicPlayer.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
