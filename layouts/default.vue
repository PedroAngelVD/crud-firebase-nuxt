<template>
  <v-app light>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon to="/agregar">
          <v-icon>mdi-plus-thick</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :fixed="fixed">
      <span>Pedro Angel Vega Damian &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      title: "Firebase Nuxt"
    };
  }
};
</script>
