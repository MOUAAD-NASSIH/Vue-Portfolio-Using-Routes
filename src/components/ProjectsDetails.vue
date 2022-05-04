<template>
  <!-- articles -->
  <div class="scrolling-component main" ref="scrollComponent">
    <Post v-for="(post, index) in posts" :post="post" :key="index" />
  </div>
</template>

<script>
import getPosts from "../api/get-posts";
import Post from "./Post.vue";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: {
    Post,
  },

  setup() {
    const posts = ref(getPosts(10));
    const scrollComponent = ref(null);

    const loadMorePosts = () => {
      let newPosts = getPosts(10);
      posts.value.push(...newPosts);
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = (e) => {
      let element = scrollComponent.value;
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        loadMorePosts();
      }
    };

    return {
      posts,
      scrollComponent,
    };
  },
};
</script>

<style scoped>
.main {
  padding: 80px 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 0;
}
</style>
