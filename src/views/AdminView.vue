<template>
  <div>
    <h1>Administrando la Lista de Opiniones</h1>
    <AdminReviewList />
  </div>
</template>

<script>
import AdminReviewList from "@/components/AdminReviewList.vue";
export default {
  name: "AdminView",
  components: {
    AdminReviewList,
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-block: 2rem;
}
</style>
