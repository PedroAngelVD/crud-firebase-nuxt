<template>
  <div>
    <h1>Guardar Juego</h1>
    <Form boton="Guardar Juego" @submit="guardarJuego" />
  </div>
</template>

<script>
import Form from "../../components/Form";
import axios from "axios";

export default {
  components: {
    Form
  },
  methods: {
    guardarJuego(form) {
      axios
        .post("https://fir-nuxt-d88ef.firebaseio.com/juegos.json", form)
        .then(res => console.log(res))
        .catch(err => console.error(err));
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
