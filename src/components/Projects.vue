<template>
  <div class="content">
    <h3 class="text-black dark:text-[#bdebea]">Projects</h3>
    <div class="cards">
      <!-- <Card
        :projectImg="project1.projectImg"
        :projectTitle="project1.projectTitle"
        :projectDescription="project1.projectDescription"
      />
      <Card
        :projectImg="project2.projectImg"
        :projectTitle="project2.projectTitle"
        :projectDescription="project2.projectDescription"
      />
      <Card
        :projectImg="project3.projectImg"
        :projectTitle="project3.projectTitle"
        :projectDescription="project3.projectDescription"
      /> -->
      <Card
        v-for="prj in projects"
        :projectImg="prj.projectImg"
        :projectTitle="prj.projectTitle"
        :projectDescription="prj.projectDescription"
      />
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
  data: () => {
    return {
      projects: {
        project1: {
          projectImg: require("../assets/starbucks.jpg"),
          projectTitle: "StarBucks Clone",
          projectDescription:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        project2: {
          projectImg: require("../assets/cocacola.jpg"),
          projectTitle: "CocaCola Clone",
          projectDescription:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        project3: {
          projectImg: require("../assets/Pepsi.jpg"),
          projectTitle: "Pepsi Clone",
          projectDescription:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
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
}

.content h3 {
  font-size: 2rem;
  font-weight: 600;
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

@media (max-width: 900px) {
  .cards {
    justify-content: center;
  }
}
</style>
