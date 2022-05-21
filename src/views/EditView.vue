<template>
  <div>
    <div>
      <h1>
        Editando la opinión de:
        {{ enviandoOpiniones(this.$route.params.id).name }}
      </h1>
      <div class="container d-flex justify-content-center align-items-center">
        <form class="">
          <div class="form-group">
            <label for="nameInput">Nombre:</label>
            <input
              type="email"
              class="form-control"
              id="nameInput"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="OpinionInput">Opiniones:</label>
            <textarea
              class="form-control"
              id="OpinionInput"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EditView",
  props: ["id"],
  data() {
    return {
      juegoEditar: null,
    };
  },
  computed: {
    ...mapGetters(["enviandoOpiniones"]),
  },
  create() {
    let mostrarOpinion = this.$store.getters.enviandoOpiniones.find(
      (result) => result.id === this.id
    );
    console.log(this.$store.getters.enviandoOpiniones.id);
    if (mostrarOpinion !== undefined) {
      this.juegoEditar = mostrarOpinion;
    } else {
      this.juegoEditar = null;
    }
  },
};
</script>

<style>
form {
  width: 100%;
}
label {
  margin: 10px;
}

.form-group {
  margin: 10px;
}
</style>
