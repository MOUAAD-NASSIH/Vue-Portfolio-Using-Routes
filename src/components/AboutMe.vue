<template>
  <div class="content">
    <h3>About me</h3>
    <p>
      The long barrow was built on land previously inhabited in the Mesolithic
      period. It consisted of a sub-rectangular earthen tumulus, estimated to
      have been 15 metres (50 feet) in length, with a chamber built from sarsen
      megaliths on its eastern end. Both inhumed and cremated human remains were
      placed within this chamber during the Neolithic period, representing at
      least nine or ten individuals.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  padding: 80px 80px;
  width: 100%;
  margin-bottom: 30px;
}

.content h3 {
  color: #bdebea;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.8px;
  margin-left: 15px;
  padding: 10px 0;
}

.content p {
  padding: 10px 0;
  color: #bfe3e3;
  font-size: 1rem;
  font-weight: 200;
  letter-spacing: 1px;
}

.content p::before {
  content: "";
  width: 4px;
  height: 80px;
  border-radius: 4px;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  float: left;
  margin-right: 10px;
}
</style>
