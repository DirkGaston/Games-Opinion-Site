import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./mocks/store-config.js";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("Tests de Vuex", () => {
  const opinion = { nombre: "DG", opinion: "Increíble" };

  it("Acción para agregar una opinión a la lista", () => {
    expect(store.state.opiniones).toHaveLength(0);
    store.dispatch("guardandoOpinion", opinion.opinion);
    expect(store.state.opiniones).toEqual([opinion]);
  });

  // it("Acción para eliminar una opinión de la lista", () => {
  //   store.dispatch("eliminarOpinion", opinion.opinion);
  //   expect(store.state.opiniones[0].cant).toBe(2);
  // });
});
