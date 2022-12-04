<template>
  <div class="content">
    <h3 class="text-black dark:text-[#bdebea]">About me</h3>
    <p class="text-black dark:text-[#bdebea]">
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
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  margin-left: 15px;
  padding: 10px 0;
}

.content p {
  padding: 10px 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
}

.content p::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 95%;
  border-radius: 4px;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  left: -20px;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
