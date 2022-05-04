<template>
  <form method="get">
    <label for="name">Name</label>
    <input
      type="name"
      name="password"
      id="name"
      required
      placeholder="Exemple"
    />

    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      placeholder="exe@gmail.com"
    />

    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10"></textarea>

    <div class="submite">
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 60px auto;
  text-align: left;
  padding: 40px;
}

label {
  color: #bdebea;
  display: inline-block;
  margin: 25px 0 5px;
  font-size: 0.75rem;
  letter-spacing: 1.2px;
  font-weight: 400;
}

input,
select,
textarea {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border: 1.5px solid #bdebea;
  background: transparent;
  border-radius: 4px;
  color: #fff;
}

.submite {
  text-align: center;
  margin-top: 30px;
}

button {
  width: 100%;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 6px;
  color: #252728;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
}
</style>
