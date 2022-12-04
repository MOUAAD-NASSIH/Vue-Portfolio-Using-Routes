<template>
  <div class="content">
    <h3 class="text-black dark:text-[#bdebea]">Skills</h3>
    <div class="skills-container">
      <SkillBox
        v-for="card in cards"
        :imgIcon="card.imgIcon"
        :imgTitle="card.imgTitle"
      />
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
      cards: {
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
  font-size: 2rem;
  font-weight: 600;
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
