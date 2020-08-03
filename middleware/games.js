import axios from "axios";

export default function({ store }) {
  axios.get("https://fir-nuxt-d88ef.firebaseio.com/juegos.json").then(res => {
    store.commit("llenar", res.data);
  });
}
