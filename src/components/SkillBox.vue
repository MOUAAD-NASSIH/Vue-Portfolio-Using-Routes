<template>
  <div class="box">
    <img :src="imgIcon" />
    <h3 class="text-black dark:text-[#bdebea]">{{ imgTitle }}</h3>
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
  margin: 0 auto;
}

.box h3 {
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  line-height: 50px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}
</style>
