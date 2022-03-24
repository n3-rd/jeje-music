<template>
  <div class="background"></div>
  <div class="root">
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

      <div class="range-slider q-mt-md">
        <q-slider
          v-model="rangeSlider"
          :min="0"
          :max="100"
          inner-track-color="grey-7"
          color="white"
        />
      </div>

      <div class="progress-bar text-white">
        <div class="row">
          <div class="col">0:34</div>
          <div class="col text-right">
            {{ localSongDurationFormatted }}
          </div>
        </div>
      </div>

      <div class="song-details text-center text-white">
        <div class="q-mt-lg track-title">{{ localSongName }}</div>
        <!-- <div class="q-mt-lg track-title">love nwatiti (ah ah ah)</div> -->
        <div class="q-mt-sm track-artist">{{ localSongArtist }}</div>
      </div>

      <div class="control-buttons full-width text-white q-mt-sm">
        <div class="fit row no-wrap justify-center items-center content-start">
          <div class="col">
            <q-icon name="repeat" size="md" class="float-left" />
          </div>
          <div class="col">
            <q-icon
              name="skip_previous"
              size="44px"
              class="float-right q-px-sm"
            />
          </div>
          <div class="col">
            <q-icon name="play_circle_fill" size="74px" />
          </div>
          <div class="col">
            <q-icon name="skip_next" size="44px" class="float-left q-px-sm" />
          </div>
          <div class="col justify-end">
            <q-icon name="shuffle" size="md" class="float-right" />
          </div>
        </div>
      </div>

      <div class="volume-control full-width text-white q-mt-md">
        <div class="row">
          <div class="col-2">
            <q-icon name="volume_down" size="md" />
          </div>
          <div class="col-8">
            <q-slider
              v-model="volumeSlider"
              :min="0"
              :max="100"
              inner-track-color="grey-7"
              color="white"
            />
          </div>
          <div class="col-2">
            <q-icon name="volume_up" size="md" class="float-right" />
          </div>
        </div>
      </div>

      <!-- <div class="more-icons">
  <div class="row">
    <div class="col">

    </div>
  </div>
</div> -->
    </div>
  </div>
</template>

<style lang="scss">
.q-slider__inner {
  opacity: 0.5;
  background-color: #fff;
}
.background {
  background: v-bind("dominantColor");
  filter: brightness(0.6);
  height: 100vh;
  width: 100vw;
  // overflow: hidden;
  position: absolute;
  z-index: -44;
}
.root {
  display: flex;
  background-color: transparent !important;

  z-index: 99;
  .track {
    .album-art {
      width: 100%;
      margin-top: 77px;
      img {
        width: 100%;
        filter: none;
        margin: 0 auto;
        display: block;
        border-radius: 15px;
      }
    }
    .track-title {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 1pt;
    }
    .track-artist {
      font-size: 1.2rem;
      font-weight: lighter;
      opacity: 0.7;
    }
  }
}
</style>

<script>
import ColorThief from "../../../node_modules/colorthief/dist/color-thief.mjs";
const colorThief = new ColorThief();

export default {
  data() {
    return {
      rangeSlider: 30,
      volumeSlider: 100,
      dominantColor: "",
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

    const colorThief = new ColorThief();
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
        this.dominantColor = paletteFin;

        // console.log(rgbToHex(paletteFormatted));
        // console.log(palette);
        // console.log(this.lyricsBoxColor);
      }, 2000);
    });
  },
};
</script>
