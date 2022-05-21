<template>
  <div v-if="enviandoOpiniones.length > 0">
    <div class="accordion" id="accordionExample">
      <div
        class="accordion-item"
        v-for="(opinion, index) in enviandoOpiniones"
        :key="index"
      >
        <h2 class="accordion-header" :id="opinion.id">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${opinion.id}`"
            aria-expanded="true"
            :aria-controls="`collapse${opinion.id}`"
          >
            Opinión creada por: {{ opinion.nombre }} | Para el juego:
            {{ opinion.juego.name }}
          </button>
        </h2>
        <div
          :id="`collapse${opinion.id}`"
          class="accordion-collapse collapse"
          :aria-labelledby="opinion.id"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Opinión:</strong> {{ opinion.opinion }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="container container-reviews">
      <p>No existen opiniones por mostrar.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ReviewList",
  computed: {
    ...mapGetters(["enviandoOpiniones"]),
  },
};
</script>

<style>
#accordion {
  text-align: left;
}
.container-reviews {
  background-color: #f8d7da;
}

.container-reviews p {
  font-size: 1.5rem;
  color: #bc585c;
  padding: 1rem;
}
</style>
