<template>
  <div>
    <form @submit.prevent="accion">
      <v-text-field
        v-model="form.nombre"
        label="Nombre del Juego"
        required
        :counter="50"
      ></v-text-field>

      <v-text-field
        v-model="form.genero"
        label="Género del Juego"
        required
        :counter="50"
      ></v-text-field>

      <v-select
        v-model="form.consola"
        :items="items"
        label="Consola"
        required
      ></v-select>

      <v-text-field
        v-model="form.portada"
        label="Portada del Juego"
        required
      ></v-text-field>

      <v-textarea
        v-model="form.sinopsis"
        label="Sinopsis"
        required
      ></v-textarea>

      <v-btn color="primary" type="submit">{{ boton }}</v-btn>
      <v-btn v-if="form.btnEliminar" color="error" @click="$emit('eliminar')"
        >Eliminar</v-btn
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    boton: "",
    game: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      form: this.game
        ? { ...this.game, btnEliminar: true }
        : {
            nombre: "",
            genero: "",
            consola: "",
            portada: "",
            sinopsis: ""
          },
      items: ["PlayStation", "X-Box", "Switch", "PC"]
    };
  },
  methods: {
    accion() {
      this.$emit("submit", this.form);
    }
  }
};
</script>

<style></style>
