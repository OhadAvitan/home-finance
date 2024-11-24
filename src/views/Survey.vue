<template>
  <div class="survey d-flex flex-column pa-8">
    <v-img class="survey-img px-4" src="/images/survey.svg"></v-img>
    <div class="header-space"></div>
    <!-- <div> <h2>כמה שאלות לבירור הזכאות</h2> </div> -->
    <SurveyCmp class="d-flex flex-column mx-auto mt-6" />
  </div>
</template>

<script>
import SurveyCmp from "@/components/SurveyCmp.vue";

export default {
  created() {
    window.scrollTo(0, 0);
  },
  components: {
    SurveyCmp,
  },
};
</script>

<style lang="scss">
.survey {
  height: 100vh;

  .header-space {
    width: 90vw;
    height: 38px;
  }

  .survey-img {
    animation: svgMani 2.2s linear forwards;
    position: absolute;
    width: 100px;
    height: 100px;
    right: 5px;
    bottom: 290px;
  }

  // .survey-img {
  //   animation: svgMani 1.2s linear;
  //   width: 390px;
  //   position: absolute;
  //   width: 400px;
  //   right: 5px;
  //   bottom: 290px;
  // }
}

@media (width < 720px) {
  .survey-img {
    width: max(310px, 65vw) !important;
    right: 50vw !important;
    transform: translateX(52%);
    // position: relative !important;
    // left: 50%;
    // margin: auto !important;
    // width: max(100vw, 60vw) !important;
  }
}
@keyframes svgEntry {
  from {
    opacity: 0;
    transform: translateX(0%);
  }
  to {
    opacity: 100;
    transform: translateX(52%);
  }
}
@keyframes svgMani {
  to {
    width: 400px;
    height: auto;
    right: 5px;
    bottom: 290px;
  }
}
</style>