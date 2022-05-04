<template>
  <div class="footer">
    <div class="social">
      <a href="#"><img src="../assets/footerIcons/Gmail-icon.svg" /></a>
      <a href="#"><img src="../assets/footerIcons/LinkedIn-icon.svg" /></a>
      <a href="#"><img src="../assets/footerIcons/GitHub-icon.svg" /></a>
    </div>

    <ul class="links-area">
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <h4>Full Stack Developer</h4>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 35px 60px;
}

.social {
  padding-bottom: 20px;
  text-align: center;
}

.social a {
  margin: 0 30px;
  line-height: 38px;
}

.social a img {
  max-width: 30px;
}

.footer ul {
  margin-top: 0;
  list-style: none;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: center;
}

.footer ul li {
  display: inline-block;
  padding: 0 15px;
}

.footer ul li a {
  text-decoration: none;
  color: #bdebea;
}

.footer h4 {
  color: #bdebea;
  font-size: 0.875rem;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1.5px;
}
</style>
