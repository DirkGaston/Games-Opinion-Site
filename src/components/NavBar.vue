<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link class="logo-link" style="color: white" to="/">
          <font-awesome-icon class="pe-1" icon="headset" size="1x" /> Games
          Opinion</router-link
        ></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/"
            ><font-awesome-icon class="pe-1" icon="home" size="1x" />
            Home</router-link
          >
          <router-link class="nav-link" data-cy="opinionesClick" to="/opiniones"
            ><font-awesome-icon class="pe-1" icon="comments" size="1x" />
            Opiniones</router-link
          >
          <router-link
            class="nav-link"
            data-cy="administraClick"
            to="/administracion"
            ><font-awesome-icon class="pe-1" icon="user-cog" size="1x" />
            Administración</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar-brand {
  font-weight: 300;
}

.nav-link {
  font-weight: 300;
}

.logo-link {
  text-decoration: none;
}
</style>
