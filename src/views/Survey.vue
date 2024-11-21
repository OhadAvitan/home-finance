<template>
  <div class="survey d-flex flex-column pa-8">
    <div class="header-space"></div>
    <div>
      <h2>כמה שאלות לבירור הזכאות</h2>
    </div>
    <SurveyCmp class="d-flex flex-column mx-auto mt-12 mb-12"/>
  </div>
</template>

<script>

import SurveyCmp from '@/components/SurveyCmp.vue'

export default {
    components: {
        SurveyCmp,
    }

}
</script>

<style lang="scss">
.survey {


  .header-space {
    width: 100vw;
    height: 70px;
  }
}
</style>