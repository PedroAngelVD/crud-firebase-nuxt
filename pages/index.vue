<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          lg4
          xl3
          v-for="(game, index) in games"
          :key="index"
          class="mt-2"
        >
          <v-card color="dark">
            <v-layout>
              <v-flex xs5>
                <v-img :src="game.portada" height="150px" contain></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title="">
                  <div>
                    <div class="headline">{{ game.nombre }}</div>
                    <div>{{ game.genero }}</div>
                    <div>{{ game.consola }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-card-actions class="pa-3">
              <v-dialog width="800">
                <template v-slot:activator="{ on }">
                  <v-btn
                    slot="activator"
                    color="primary"
                    style="margin-right: 8px"
                    v-on="on"
                    >Ver más</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title class="headline grey" primary-title=""
                    >Sinopsis</v-card-title
                  >
                  <v-card-text style="margin-top:18px">{{
                    game.sinopsis
                  }}</v-card-text>
                </v-card>
              </v-dialog>
              <v-btn color="warning" @click="editar(index)">Editar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["games"])
  },
  async fetch({ store }) {
    await store.dispatch("getGames");
  },
  middleware: "games",
  methods: {
    editar(index) {
      this.$router.push(`/editar/${index}`);
    }
  }
};
</script>
