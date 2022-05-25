<template>
  <div class="content">
    <h3>Skills</h3>
    <div class="skills-container">
      <SkillBox :imgIcon="Card1.imgIcon" :imgTitle="Card1.imgTitle" />
      <SkillBox :imgIcon="Card2.imgIcon" :imgTitle="Card2.imgTitle" />
      <SkillBox :imgIcon="Card3.imgIcon" :imgTitle="Card3.imgTitle" />
      <SkillBox :imgIcon="Card4.imgIcon" :imgTitle="Card4.imgTitle" />
      <SkillBox :imgIcon="Card5.imgIcon" :imgTitle="Card5.imgTitle" />
      <SkillBox :imgIcon="Card6.imgIcon" :imgTitle="Card6.imgTitle" />
      <SkillBox :imgIcon="Card7.imgIcon" :imgTitle="Card7.imgTitle" />
      <SkillBox :imgIcon="Card8.imgIcon" :imgTitle="Card8.imgTitle" />
      <SkillBox :imgIcon="Card9.imgIcon" :imgTitle="Card9.imgTitle" />
      <SkillBox :imgIcon="Card10.imgIcon" :imgTitle="Card10.imgTitle" />
      <SkillBox :imgIcon="Card11.imgIcon" :imgTitle="Card11.imgTitle" />
      <SkillBox :imgIcon="Card12.imgIcon" :imgTitle="Card12.imgTitle" />
      <SkillBox :imgIcon="Card13.imgIcon" :imgTitle="Card13.imgTitle" />
      <SkillBox :imgIcon="Card14.imgIcon" :imgTitle="Card14.imgTitle" />
      <!-- <SkillBox :imgIcon="Card15.imgIcon" :imgTitle="Card15.imgTitle" /> -->
    </div>
  </div>
</template>

<script>
import SkillBox from "../components/SkillBox.vue";

export default {
  components: {
    SkillBox,
  },
  data: () => {
    return {
      Card1: {
        imgIcon: require("../assets/skillsIcons/Html5-icon.svg"),
        imgTitle: "Html5",
      },
      Card2: {
        imgIcon: require("../assets/skillsIcons/Css3-icon.svg"),
        imgTitle: "Css3",
      },
      Card3: {
        imgIcon: require("../assets/skillsIcons/Scss-icon.svg"),
        imgTitle: "Scss",
      },
      Card4: {
        imgIcon: require("../assets/skillsIcons/bootstrap-icon.svg"),
        imgTitle: "Bootstrap5",
      },
      Card5: {
        imgIcon: require("../assets/skillsIcons/tailwind-css.svg"),
        imgTitle: "TailwindCss",
      },
      Card6: {
        imgIcon: require("../assets/skillsIcons/JavaScript-icon.svg"),
        imgTitle: "JavaScript",
      },
      Card7: {
        imgIcon: require("../assets/skillsIcons/vuejs-icon.svg"),
        imgTitle: "Vue.js",
      },
      Card8: {
        imgIcon: require("../assets/skillsIcons/NodeJs-icon.svg"),
        imgTitle: "Node.js",
      },
      Card9: {
        imgIcon: require("../assets/skillsIcons/expressjs-icon.svg"),
        imgTitle: "Express.js",
      },
      Card10: {
        imgIcon: require("../assets/skillsIcons/mongodb-icon.svg"),
        imgTitle: "MongoDB",
      },
      Card12: {
        imgIcon: require("../assets/skillsIcons/TypeScript-icon.svg"),
        imgTitle: "TypeScript",
      },
      Card13: {
        imgIcon: require("../assets/skillsIcons/Git-Icon.svg"),
        imgTitle: "Git",
      },
      Card11: {
        imgIcon: require("../assets/skillsIcons/nuxt-js.svg"),
        imgTitle: "Nuxt.js",
      },
      Card14: {
        imgIcon: require("../assets/skillsIcons/figmaSkill-icon.svg"),
        imgTitle: "Figma",
      },
      Card15: {
        imgIcon: require("../assets/skillsIcons/bootstrap-icon.svg"),
        imgTitle: "Bootstrap5",
      },
    };
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
