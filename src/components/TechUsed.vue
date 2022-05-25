<template>
  <div class="tech-used-in">
    <button>{{ tech1 }}</button>
    <button>{{ tech2 }}</button>
    <button>{{ tech3 }}</button>
  </div>
</template>

<script>
export default {
  props: ["tech1", "tech2", "tech3"],
};
</script>

<style scoped>
button {
  border: none;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 4px;
  color: #000;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 0.75rem;
  padding: 5px 10px;
  margin: 10px 0;
  margin-right: 10px;
  cursor: pointer;
}

</style>
