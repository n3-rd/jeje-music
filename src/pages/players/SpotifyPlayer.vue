<template>
  <div class="root">
    <q-toolbar class="q-py-md">
      <router-link to="/SelectPlayer">
        <q-btn
          flat
          round
          dense
          icon="expand_more"
          class="q-mr-sm text-grey-1"
        />
      </router-link>

      <q-toolbar-title class="text-center playing-playlist"
        >PLAYING FROM PLAYLIST
        <br />
        <span class="child">{{ localSongAlbum }}</span>
      </q-toolbar-title>

      <q-btn flat round dense icon="more_vert" />
    </q-toolbar>

    <div class="track q-px-md">
      <div class="album-art">
        <img
          src="~/assets/7846.jpg"
          class="album-art-image"
          ref="albumArtImage"
          alt=""
        />

        <!-- <img
          :src="localSongImage"
          class="album-art-image"
          ref="albumArtImage"
          alt=""
        /> -->
      </div>

      <div class="row song-details">
        <div class="col-11">
          <div class="q-mt-lg track-title">{{ localSongName }}</div>
          <!-- <div class="q-mt-lg track-title">love nwatiti (ah ah ah)</div> -->
          <div class="q-mt-sm track-artist">{{ localSongArtist }}</div>
        </div>
        <div class="col-1 self-center">
          <q-icon name="favorite_outline" size="md" />
        </div>
      </div>

      <div class="range-slider q-mt-md">
        <q-slider
          v-model="rangeSlider"
          :min="0"
          :max="120"
          :step="10"
          inner-track-color="grey-7"
          color="white"
        />
      </div>

      <div class="progress-bar">
        <div class="row">
          <div class="col">0:34</div>
          <div class="col text-right">
            {{ localSongDurationFormatted }}
          </div>
        </div>
      </div>

      <div class="control-buttons full-width">
        <div class="fit row no-wrap justify-center items-center content-start">
          <div class="col">
            <q-icon name="shuffle" size="md" class="float-left" />
          </div>
          <div class="col">
            <q-icon name="skip_previous" size="44px" />
          </div>
          <div class="col">
            <q-icon name="play_circle_fill" size="74px" />
          </div>
          <div class="col">
            <q-icon name="skip_next" size="44px" class="float-right" />
          </div>
          <div class="col justify-end">
            <q-icon name="repeat" size="md" class="float-right" />
          </div>
        </div>
      </div>

      <div class="more-icons q-mt-lg">
        <q-icon name="aspect_ratio" size="sm" />
        <q-icon name="menu" class="float-right" size="sm" />
        <q-icon name="share" class="float-right q-pr-md" size="sm" />
      </div>

      <div id="lyrics-box" class="q-mt-xl q-pt-md text-weight-bold">
        <div class="lyrics-indicator q-pl-md">Lyrics</div>
      </div>
    </div>
  </div>
</template>
<script>
import ColorThief from "../../../node_modules/colorthief/dist/color-thief.mjs";
const colorThief = new ColorThief();

export default {
  data() {
    return {
      rangeSlider: 2,
      lyricsBoxColor: "",
      localSongName: localStorage.getItem("localSongName"),
      localSongArtist: localStorage.getItem("localSongArtist"),
      localSongImage: localStorage.getItem("localSongImage"),
      localSongAlbum: localStorage.getItem("localSongAlbum"),
      localSongDuration: localStorage.getItem("localSongDuration"),
      localSongDurationFormatted: "",
    };
  },
  methods: {
    formatSongDuration: function () {
      var minutes = Math.floor(this.localSongDuration / 60);
      var seconds = this.localSongDuration - minutes * 60;
      this.localSongDurationFormatted = `${minutes}:${seconds}`;
    },
  },
  mounted() {
    this.formatSongDuration();
    this.$nextTick(() => {
      const colorThief = new ColorThief();

      setTimeout(() => {
        const palette = colorThief.getColor(this.$refs.albumArtImage);
        const rgbToHex = (r, g, b) =>
          "#" +
          [r, g, b]
            .map((x) => {
              const hex = x.toString(16);
              return hex.length === 1 ? "0" + hex : hex;
            })
            .join("");

        // rgbToHex(102, 51, 153);
        console.log(rgbToHex(102, 51, 153));
        console.log(rgbToHex(palette[0], palette[1], palette[2]));
        const paletteFin = rgbToHex(palette[0], palette[1], palette[2]);
        this.lyricsBoxColor = paletteFin;

        // console.log(rgbToHex(paletteFormatted));
        // console.log(palette);
        // console.log(this.lyricsBoxColor);
      }, 2000);
    });
  },
};
</script>
<style lang="scss">
.q-toolbar {
  position: absolute;
}
.root {
  background-color: #000 !important;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  color: #fff;
  .playing-playlist {
    font-size: 0.7rem;
    opacity: 0.8;
    .child {
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  .track {
    .album-art {
      width: 100%;
      margin-top: 77px;
      img {
        width: 100%;
        margin: 0 auto;
        display: block;
      }
    }
    .track-title {
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
  #lyrics-box {
    background: v-bind("lyricsBoxColor");
    border-radius: 15px;
    height: 300px;
    .lyrics-indicator {
      text-align: left;
      color: #fff;
      font-size: 1.3rem;
      font-family: DmsansBold;
    }
  }
}
</style>
