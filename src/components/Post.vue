<template>
  <div class="card">
    <div class="card-img">
      <img src="../assets/project-img.svg" alt="" />
    </div>
    <div class="card-info">
      <h3 class="card-title">{{ post.author }}</h3>
      <div class="tech-used">
        <TechUsed />
        <TechUsed />
        <TechUsed />
      </div>
      <p>
        {{ post.content }}
      </p>
    </div>
  </div>
</template>

<script>
import TechUsed from "./TechUsed.vue";

export default {
  props: {
    post: Object,
  },
  components: {
    TechUsed,
  },
};
</script>

<style scoped>
.card {
  width: 40%;
  margin: 30px 0;
  background: #222525;
  border-radius: 10px;
}

.card-img {
  text-align: center;
}

.card-img img {
  max-width: 100%;
  padding-bottom: 25px;
}

.card-info {
  padding: 0 25px;
  margin-bottom: 20px;
}

.card-info .card-title {
  color: #bdebea;
  font-size: 1.175rem;
  font-weight: 500;
  letter-spacing: 2px;
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
