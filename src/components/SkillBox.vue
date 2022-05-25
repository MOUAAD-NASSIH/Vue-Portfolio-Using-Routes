<template>
  <div class="box">
    <img :src="imgIcon" />
    <h3>{{ imgTitle }}</h3>
  </div>
</template>

<script>
export default {
  props: ["imgIcon", "imgTitle"],
};
</script>

<style scoped>
.box {
  text-align: center;
}

.box img {
  cursor: pointer;
  min-height: 100px;
  max-width: 90px;
}

.box h3 {
  font-weight: 300;
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  line-height: 50px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}
</style>
