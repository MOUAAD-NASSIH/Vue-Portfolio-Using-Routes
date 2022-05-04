<template>
  <div class="error">
    <h1>404</h1>
    <h3><span>Grats. </span>You broke it.</h3>
    <p>This page doesn't exist or some other horrible error has occurred</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error {
  width: 100%;
  height: calc(100vh - 400px);
  padding: 200px;
  text-align: center;
}

.error h1 {
  font-size: 5rem;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 500;
}

.error h3 {
  font-size: 1.5rem;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 500;
}

.error span {
  font-size: 2.5rem;
  font-weight: 500;
}

.error p {
  font-size: 1.125;
  color: #bdebea;
  font-weight: 400;
}
</style>
