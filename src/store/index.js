import Vue from "vue";
import Vuex from "vuex";
import juegos from "./games.json";
console.log(juegos);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    opiniones: [],
    juegos,
  },
  getters: {
    enviandoJuegos(state) {
      return state.juegos;
    },
    enviandoOpiniones(state) {
      return state.opiniones;
    },
  },
  mutations: {
    MUTANDO_OPINIONES(state, dataOpinion) {
      let id = 1;
      while (id !== dataOpinion.id) {
        id = Math.floor(Math.random() * 100 + 1);
      }
      dataOpinion.id = id;
      state.opiniones.push(dataOpinion);
    },
    BORRAR_OPINION(state, index) {
      state.opiniones.splice(index, 1);
    },
    EDITANDO_OPINION(state, editado) {
      let resultado = state.opiniones.find((valor) => valor.id === editado.id);
      if (resultado !== undefined) {
        resultado.nombre = editado.nombre;
        resultado.opinion = editado.opinion;
      } else {
        alert("No se puede editar");
      }
    },
  },
  actions: {
    guardandoOpinion({ commit }, dataOpinion) {
      commit("MUTANDO_OPINIONES", dataOpinion);
    },
    eliminarOpinion({ commit }, index) {
      commit("BORRAR_OPINION", index);
    },
    guardandoEdicion({ commit }, editado) {
      commit("EDITANDO_OPINION", editado);
    },
  },
});
