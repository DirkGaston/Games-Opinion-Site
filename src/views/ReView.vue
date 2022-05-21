<template>
  <div>
    <h1>Lista de Opiniones</h1>
    <ReviewList />
  </div>
</template>

<script>
import ReviewList from "@/components/ReviewList.vue";
export default {
  name: "ReView",
  components: {
    ReviewList,
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-block: 2rem;
}
</style>
