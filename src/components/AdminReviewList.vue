<template>
  <div v-if="enviandoOpiniones.length > 0">
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Persona</th>
            <th scope="col">Juego</th>
            <th scope="col">Opinión</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(opinion, index) in enviandoOpiniones" :key="index">
            <td>{{ opinion.id }}</td>
            <td>{{ opinion.nombre }}</td>
            <td>{{ opinion.juego.name }}</td>
            <td>{{ opinion.opinion }}</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                @click="editandoOpinionNombre(opinion)"
              >
                Editar
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="eliminarOpinion(index)"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else>
    <div class="container container-reviews">
      <p>No existen opiniones por administrar.</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AdminReviewView",
  computed: {
    ...mapGetters(["enviandoOpiniones"]),
  },
  methods: {
    ...mapActions(["eliminarOpinion", "guardandoEdicion"]),
    editandoOpinionNombre(opinion) {
      this.$router.push({ name: "editando", params: { id: opinion.id } });
    },
  },
};
</script>

<style>
.container-reviews {
  background-color: #f8d7da;
}

.container-reviews p {
  font-size: 1.5rem;
  color: #bc585c;
  padding: 1rem;
}
</style>
