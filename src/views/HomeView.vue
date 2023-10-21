<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col xs="12" sm="10" md="8" lg="6">
        <v-card>

          <!-- Formar una cruz con cinco círculos -->
          <div class="cross">
            <div class="circle0"></div>
            <div class="middle">
              <div class="circle1"></div>
              <div class="circle0"></div>
              <div class="circle2"></div>
            </div>
            <div class="circle3"></div>
          </div>
          <v-form prevent.default>

            <v-menu ref="menu" :close-on-content-click="false" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="Fecha de Pago" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" color="primary"></v-date-picker>
            </v-menu>
            <v-btn @click="miFuncion"></v-btn>
          </v-form>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import yearK from '../utils/yearK';
import dayAndMonthK from '../utils/dayAndMonthK.js';
import toKin from '../utils/toKin';

export default {
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    pickerDate: null,
    notes: [],
    allNotes: [
      'President met with prime minister',
      'New power plant opened',
      'Rocket launch announced',
      'Global warming discussion cancelled',
      'Company changed its location',
    ],
  }),
  methods: {
    miFuncion() {
      var fecha = new Date(this.date);
      var year = parseInt(fecha.getFullYear());
      var month = parseInt(fecha.getMonth()) + 1; // Suma 1 para obtener el mes en base 1
      var day = parseInt(fecha.getDate()) + 1;

      console.log("Año (número): " + year);
      console.log("Mes (número): " + month);
      console.log("Día (número): " + day);

      console.log(dayAndMonthK(day,month));
      console.log(yearK(year));
      console.log(toKin((dayAndMonthK(day,month)),(yearK(year))));
    },
  },
}
</script>

<style>
.cross {
  display: flex;
  flex-direction: column;
  /* Cambia la dirección a horizontal */
  align-items: center;
  justify-content: center;
}

.middle {
  display: flex;
  flex-direction: row;
  /* Cambia la dirección a horizontal */
  align-items: center;
  justify-content: center;
}

.circle0 {
  width: 50px;
  height: 50px;
  background-color: #e4e4e4;
  border-radius: 50%;
  margin: 5px;
}

.circle1 {
  width: 50px;
  height: 50px;
  background-color: #ffef60;
  border-radius: 50%;
  margin: 5px;
}

.circle2 {
  width: 50px;
  height: 50px;
  background-color: #ff5555;
  border-radius: 50%;
  margin: 5px;
}

.circle3 {
  width: 50px;
  height: 50px;
  background-color: #3230c2;
  border-radius: 50%;
  margin: 5px;
}

.middle-circle {
  width: 50px;
  height: 50px;
  background-color: #bebebe;
  border-radius: 50%;
  margin: 5px;
  transform: rotate(90deg);
  /* Rota el círculo central para formar una cruz */
}
</style>
