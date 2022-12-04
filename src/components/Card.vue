<template>
  <div class="card bg-[#ddd] dark:bg-[#222525] shadow-md">
    <div class="card-img">
      <img :src="projectImg" />
    </div>
    <div class="card-info">
      <h3 class="card-title text-black dark:text-[#bdebea]">
        {{ projectTitle }}
      </h3>
      <div class="tech-used">
        <TechUsed
          :tech1="technologies.tech1"
          :tech2="technologies.tech2"
          :tech3="technologies.tech3"
        />
      </div>
      <p class="text-black dark:text-[#bdebea]">
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
  border-radius: 10px;
  overflow: hidden;
}

.card-img {
  text-align: center;
}

.card-img img {
  width: 100%;
  max-height: 375px;
  padding-bottom: 25px;
  cursor: pointer;
}

.card-info {
  padding: 0 25px;
  margin-bottom: 20px;
}

.card-info .card-title {
  font-size: 1.175rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 10px 0;
}

.card-info p {
  padding: 15px 0;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 1px;
}

@media (max-width: 900px) {
  .card {
    width: 90%;
  }
}
</style>
