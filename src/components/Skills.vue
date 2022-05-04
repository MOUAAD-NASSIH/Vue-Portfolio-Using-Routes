<template>
  <div class="content">
    <h3>Skills</h3>
    <div class="skills-container">
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
      <SkillBox />
    </div>
  </div>
</template>

<script>
import SkillBox from "../components/SkillBox.vue";

export default {
  components: {
    SkillBox,
  },
};
</script>

<style scoped>
.content {
  padding: 80px 60px;
  width: 100%;
  margin-bottom: 35px;
}

.content h3 {
  color: #bdebea;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  padding: 30px 0;
  margin-left: 15px;
}

.skills-container {
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  margin-bottom: 2rem;
  gap: 2rem;
}
</style>
