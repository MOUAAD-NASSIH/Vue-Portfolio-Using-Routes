<template>
  <div class="card">
    <div class="card-img">
      <img src="../assets/project-img.svg" alt="" />
    </div>
    <div class="card-info">
      <h3 class="card-title">I N S I G H T G R A M</h3>
      <div class="tech-used">
        <TechUsed />
        <TechUsed />
        <TechUsed />
      </div>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
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
