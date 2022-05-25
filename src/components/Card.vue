<template>
  <div class="card">
    <div class="card-img">
      <img :src="projectImg" />
    </div>
    <div class="card-info">
      <h3 class="card-title">{{ projectTitle }}</h3>
      <div class="tech-used">
        <TechUsed
          :tech1="technologies.tech1"
          :tech2="technologies.tech2"
          :tech3="technologies.tech3"
        />
      </div>
      <p>
        {{ projectDescription }}
      </p>
    </div>
  </div>
</template>

<script>
import TechUsed from "../components/TechUsed.vue";

export default {
  components: {
    TechUsed,
  },
  props: ["projectImg", "projectTitle", "projectDescription"],

  data: () => {
    return {
      technologies: {
        tech1: "Html",
        tech2: "Css",
        tech3: "JavaScript",
      },
    };
  },
};
</script>

<style scoped>
.card {
  width: 48%;
  margin: 30px 0;
  background: #222525;
  border-radius: 10px;
}

.card-img {
  text-align: center;
}

.card-img img {
  max-width: 100%;
  max-height: 375px;
  padding-bottom: 25px;
  cursor: pointer;
}

.card-info {
  padding: 0 25px;
  margin-bottom: 20px;
}

.card-info .card-title {
  color: #bdebea;
  font-size: 1.175rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 10px 0;
}

.card-info p {
  padding: 15px 0;
  color: #bfe3e3;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 1px;
}
</style>
