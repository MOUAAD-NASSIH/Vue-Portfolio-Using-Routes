<template>
  <div class="content">
    <h3>Projects</h3>
    <div class="cards">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <div class="see-projects">
      <button>SEE ALL PROJECTS</button>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
.content {
  padding: 80px 60px;
  width: 100%;
}

.content h3 {
  color: #bdebea;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 20px 0;
  margin-left: 15px;
}

.cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 0;
}

.see-projects {
  text-align: center;
}

.see-projects button {
  border: none;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 4px;
  padding: 15px 50px;
  color: #252728;
  font-weight: 500;
  margin: 15px 0;
  cursor: pointer;
}
</style>
