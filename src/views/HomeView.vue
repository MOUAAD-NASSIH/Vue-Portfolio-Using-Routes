<template>
  <Main />
  <Arrow />
  <AboutMe />
  <Projects />
  <Skills />
  <Footer />
</template>

<script>
import Main from "../components/Main.vue";
import Arrow from "../components/Arrow.vue";
import AboutMe from "../components/AboutMe.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Main,
    Arrow,
    AboutMe,
    Projects,
    Skills,
    Footer,
  },
};
</script>

<style scoped>
  
</style>
