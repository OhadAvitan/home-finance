<template>
  <div class="footer d-flex flex-column justify-end">
    <div class="d-flex flex-column align-center mb-7">
      <v-img :src="imgSrc" width="50"></v-img>
      <div style="font-size: 20px; margin-top: 6px;">הום משכנתאות</div>
    </div>
    <div class="d-flex py-4 justify-space-evenly">
      <p>מדיניות פרטיות</p>
      <p>הצהרת נגישות</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "images/biglogo.svg",
    }
  }
};
</script>

<style>
.footer {
  color: rgb(175, 175, 175);
  width: 100%;
  height: 260px;
  /* bottom: 0;
  position: absolute; */
  background: #213c34;
  background: linear-gradient(45deg, #363636, #242424);
}
</style>