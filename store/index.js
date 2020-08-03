import axios from "axios";

export const state = () => ({
  games: []
});

export const mutations = {
  llenar(state, value) {
    state.games = value;
  }
};

export const actions = {
  async getGames({ commit }) {
    await axios
      .get("https://fir-nuxt-d88ef.firebaseio.com/juegos.json")
      .then(res => {
        commit("llenar", res.data);
      });
  }
};
