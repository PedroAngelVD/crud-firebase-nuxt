<template>
  <div>
    <h1>{{ game.nombre }}</h1>
    <Form
      boton="Editar Juego"
      @submit="editarJuego"
      :game="game"
      @eliminar="eliminarJuego($route.params.id)"
    />
  </div>
</template>

<script>
import Form from "../../components/Form";
import axios from "axios";

export default {
  components: {
    Form
  },
  asyncData(context) {
    return axios
      .get(
        `https://fir-nuxt-d88ef.firebaseio.com/juegos/${context.params.id}.json`
      )
      .then(res => {
        return {
          game: res.data
        };
      });
  },
  methods: {
    editarJuego(form) {
      axios
        .put(
          `https://fir-nuxt-d88ef.firebaseio.com/juegos/${this.$route.params.id}.json`,
          form
        )
        .then(res => console.log(res))
        .catch(error => console.error(error));
      this.$router.push("/");
    },
    eliminarJuego(index) {
      axios
        .delete(`https://fir-nuxt-d88ef.firebaseio.com/juegos/${index}.json`)
        .then(res => console.log(res))
        .catch(error => console.error(error));
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
