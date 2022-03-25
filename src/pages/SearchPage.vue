<template>
  <router-view />

  <q-toolbar class="q-py-md">
    <router-link to="/">
      <q-btn flat round dense icon="arrow_back_ios" class="q-mr-sm" />
    </router-link>

    <q-toolbar-title>Quasar Framework</q-toolbar-title>

    <q-btn flat round dense icon="whatshot" />
  </q-toolbar>

  <div class="container q-px-lg q-pt-lg">
    <div class="search-instruct">Search for songs</div>

    <q-input
      v-model="searchSongText"
      label="Label"
      rounded
      outlined
      class="q-pt-lg"
    >
      <template v-slot:after>
        <q-btn round dense flat icon="search" @click="fetchSongs" />
      </template>
    </q-input>

    <div class="song-search-results q-mt-xl">
      <div
        v-for="song in songs"
        :key="song.songTitle"
        class="song bg-grey-12 relative-position container q-my-md"
        v-ripple
        @click="
          storeSelectedSongInfo(
            song.title,
            song.artist.name,
            song.album.cover_small,
            song.album.title,
            song.duration
          )
        "
      >
        <q-item>
          <q-item-section top avatar>
            <q-avatar size="80px" rounded>
              <img :src="song.album.cover_small" alt="" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="song-title">{{ song.title }}</q-item-label>
            <q-item-label caption class="song-artist">{{
              song.artist.name
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import fetchJsonp from "fetch-jsonp";
export default defineComponent({
  name: "SearchPage",
  data() {
    return {
      searchSongText: "",
      songs: [],
    };
  },
  methods: {
    fetchSongs: function () {
      // fetch(
      //   `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${this.searchSongText}&output=json`
      // )
      // fetch(`http://192.168.43.235:1987/deezer-emiliana.json`)
      fetch(
        `https://achieved-kindhearted-muse.glitch.me/useproxy?link=https://api.deezer.com/search?q=${this.searchSongText}&output=json`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // console.log(JSON.parse(data.contents));
          this.songs = data.data;
        });
    },
    storeSelectedSongInfo: function (
      songName,
      songArtist,
      songImage,
      songAlbum,
      songDuration
    ) {
      localStorage.setItem("localSongName", songName);
      localStorage.setItem("localSongArtist", songArtist);
      localStorage.setItem("localSongImage", songImage);
      localStorage.setItem("localSongAlbum", songAlbum);
      localStorage.setItem("localSongDuration", songDuration);

      this.$router.push("/SelectPlayer");
    },
  },
});
</script>

<style lang="scss">
.search-instruct {
  font-size: 1.3rem;
  font-weight: bold;
}
.song-title {
  font-weight: bold;
  font-size: 1.2rem;
}
.song-artist {
  font-size: 1rem;
}
</style>
