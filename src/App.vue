<template>
  <v-app>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-switch v-model="isDarkMode" class="mt-5" color="#0b3f61"
        :append-icon="isDarkMode ? 'mdi-weather-night' : 'mdi-weather-sunny'"></v-switch>
    </v-app-bar>


    <v-navigation-drawer app v-model="drawer">
      <!-- Contenido del Drawer aquí -->
      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Puedes agregar más elementos del Drawer según sea necesario -->
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      drawer: false,
    };
  },

  computed: {
    isDarkMode: {
      get() {
        return this.$vuetify.theme.dark;
      },
      set(value) {
        this.$vuetify.theme.dark = value;
        // Guardar el estado del tema en localStorage
        localStorage.setItem("theme", value ? "dark" : "light");
        console.log("guardar tema");
      },
    },
  },

};
</script>
