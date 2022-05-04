<template>
  <div class="container">
    <nav class="header">
      <div class="home-router">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-links">
        <router-link class="projects-router" :to="{ name: 'projects' }"
          >Projects</router-link
        >
        <router-link class="contact-router" :to="{ name: 'contact' }"
          >Contact</router-link
        >
        <img class="night-light" src="./assets/night-light.png" />
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

:root {
  --main-bg-color: #041f31;
}

body {
  background: var(--main-bg-color);
}

.container {
  width: 80%;
  margin: 0 auto;
}

.header {
  width: 100%;
  padding: 20px 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-router a {
  font-weight: 400;
  text-decoration: none;
  color: #fff;
  font-size: 1.125rem;
  padding: 10px 20px;
}

.header .nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links a {
  font-weight: 400;
  text-decoration: none;
  color: #fff;
  font-size: 1.125rem;
  padding: 10px 20px;
}

.night-light {
  margin: 0 20px;
}

.nav-links a.router-link-exact-active {
  color: #42b983;
  border-radius: 10px;
}

.night-light {
  height: 30px;
}
</style>
