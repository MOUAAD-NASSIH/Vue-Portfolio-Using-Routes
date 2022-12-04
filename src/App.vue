<template>
  <div class="" :class="darkmode ? 'dark' : ''">
    <div class="bg-[#effefe] dark:bg-[#041f31]">
      <div class="containerr">
        <nav class="header">
          <div
            class="home-router font-[400] md:font-bold text-lg md:text-xl md:text-black dark:text-white"
          >
            <router-link to="/" class="">Home</router-link>
          </div>
          <div
            class="nav-links font-[400] md:font-bold text-lg md:text-xl text-black dark:text-white"
          >
            <router-link class="projects-router" :to="{ name: 'projects' }"
              >Projects</router-link
            >
            <router-link class="contact-router" :to="{ name: 'contact' }"
              >Contact</router-link
            >
            <img
              @click="toggleDark"
              class="night-light cursor-pointer h-[24px] md:h-[37px]"
              src="./assets/night-light.png"
            />
          </div>
        </nav>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const darkmode = ref(false);
const toggleDark = function () {
  darkmode.value = !darkmode.value;
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
/* 
:root {
  --main-bg-color: #041f31;
}

body {
  background: var(--main-bg-color);
} */

.containerr {
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
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
  text-decoration: none;
  padding: 10px 20px;
}

.header .nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  padding: 10px 20px;
}

.night-light {
  margin: 0 20px;
}

.nav-links a.router-link-exact-active {
  color: #42b983;
  border-radius: 10px;
}

@media (max-width: 900px) {
  .containerr {
    width: 100%;
  }
}
</style>
