<template>
  <div class="doc-container">
    <q-expansion-item
      dense-toggle
      expand-separator
      icon="smartphone"
      label="Mobile"
      class="q-pt-lg"
      default-opened
    >
      <div class="container q-pt-md">
        <div class="row q-gutter-xs justify-center">
          <div class="col-xs-4">
            <router-link to="/SpotifyPlayer">
              <div class="text-weight-bold q-my-md">Spotify</div>

              <img
                alt=""
                src="~/assets/spotify.svg"
                class="player-brand-icon"
              />
            </router-link>
          </div>
          <div class="col-xs-4">
            <div class="text-weight-bold q-my-md">Deezer</div>

            <img alt="" src="~/assets/spotify.svg" class="player-brand-icon" />
          </div>

          <div class="col-xs-4">
            <router-link to="/OtoMusicPlayer">
              <div class="text-weight-bold q-my-md">Oto Music</div>

              <img
                alt=""
                src="~/assets/spotify.svg"
                class="player-brand-icon"
              />
            </router-link>
          </div>
        </div>
      </div>
    </q-expansion-item>
  </div>
</template>

<style lang="scss">
.player-brand-icon {
  width: 43%;
  // margin: 0 auto;
}
</style>
