<template>
  <div class="content">
    <div class="left-content">
      <h4>Full Stack Developer</h4>
      <h1>Mouad Nassih</h1>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt.
      </p>
      <button>Contact Me</button>
    </div>
    <div class="right-content">
      <img src="../assets/main-img.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
:root {
  --main-bg-color: #041f31;
}

.content {
  padding: 40px 40px 0 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
}

.content .left-content {
  width: 100%;
  padding-left: 50px;
}

.left-content h4 {
  font-family: "consolas";
  font-size: 1.25rem;
  font-weight: 200;
  padding: 10px 0;
  color: #d7e5ec;
  letter-spacing: 1px;
}

.left-content h1 {
  padding: 10px 0;
  font-size: 4rem;
  font-weight: 600;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.8px;
}

.left-content p {
  padding: 10px 0;
  color: #bfe3e3;
  width: 80%;
  font-size: 1rem;
  font-weight: 200;
  letter-spacing: 1px;
}

.left-content button {
  margin: 20px 0;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  color: var(--main-bg-color);
  cursor: pointer;
  letter-spacing: 0.8px;
}

.content .right-content {
  width: 90%;
}

.right-content img {
  position: relative;
  top: 0;
}
</style>
