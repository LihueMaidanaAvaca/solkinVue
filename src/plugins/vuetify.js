import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const savedTheme = localStorage.getItem('theme') || 'light';

export default new Vuetify({
    theme: {
        dark: savedTheme === 'dark',
      themes: {
        light: {
          primary: "#84d631",
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
        },
        dark: {
          primary: "#40750b",
        },
      },
    },
});
