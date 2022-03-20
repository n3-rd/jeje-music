<template>
  <q-toolbar class="q-py-md">
    <router-link to="/SearchPage">
      <q-btn flat round dense icon="arrow_back_ios" class="q-mr-sm" />
    </router-link>

    <q-toolbar-title>Quasar Framework</q-toolbar-title>

    <q-btn flat round dense icon="whatshot" />
  </q-toolbar>

  <div class="container q-px-lg q-pt-lg">
    <div class="search-instruct q-pl-lg">Select Music Player Style</div>
    <div class="search-instruct q-pl-lg">
      {{ localSongArtist }} - {{ localSongName }}
    </div>

    <SelectPlayerMobile />
  </div>
</template>

<script>
import SelectPlayerMobile from "../components/select-players/SelectPlayerMobile.vue";
export default {
  components: {
    SelectPlayerMobile,
  },
  data() {
    return {
      localSongName: localStorage.getItem("localSongName"),
      localSongArtist: localStorage.getItem("localSongArtist"),
      localSongImage: localStorage.getItem("localSongImage"),
      localSongAlbum: localStorage.getItem("localSongAlbum"),
    };
  },
};
</script>
