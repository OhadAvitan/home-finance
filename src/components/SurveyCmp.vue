<template>
  <div class="survey-cmp">
    <!-- <h2>form</h2> -->
    <v-card elevation="2">
      <!-- <v-carousel hide-delimiters :show-arrows="false">
        <template v-slot:prev="{ props }">
          <v-btn color="success" variant="elevated" @click="props.onClick"
            >Previous slide</v-btn
          >
        </template>
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-carousel-item>
      </v-carousel> -->
      <v-carousel v-model="model" height="400" progress="#8186e8" hide-delimiters :show-arrows="false" style="direction: rtl; transform: matrix(-1, 0, 0, 1, 0, 0)" >
        <div>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%" style="transform: matrix(-1, 0, 0, 1, 0, 0)">
              <!-- <div class="d-flex fill-height justify-center align-center flex-column"> -->
              <!-- justify-center align-center -->
              <div class="d-flex flex-column pa-8">
                <div>
                  <h4>{{ slide.orrr }}</h4>
                  <h4>{{ slide.question }}</h4>
                </div>
                <div class="d-flex flex-column">
                  <v-radio-group slide.orrr v-model="survey[i]" style="direction: rtl">
                    <v-radio v-for="n in slide.options.length" :value="slide.options[n - 1]" :label="slide.options[n - 1]" :key="n" ripple reverse color="#8186e8" class="py-2"></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </div>
      </v-carousel>
    </v-card>
    <div class="d-flex justify-space-around align-center py-6 mt-2">
      <v-btn variant="tonal" style="width: min(20vw, 170px);" @click="model = Math.min(model + 1, slides.length - 1)" rounded="lg" color="success">המשך</v-btn >
      <v-btn variant="tonal" style="width: min(20vw, 170px);" @click="model = Math.max(model - 1, 0)" rounded="lg">הקודם</v-btn >
      <!-- {{ model }} -->
    </div>
    <!-- <v-btn @click="print()">PRINT</v-btn> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      lili: "#d5d0ff",
      // lili: 'linear-gradient(90deg, #d5d0ff, #8186e8)',
      model: 0,
      slides: [
        {
          question: "יש בבעלותכם נכס?",
          options: ["כן", "לא"],
          orrr: 'inline'
        },
        {
          question: "מה שווי הנכס שלכם?",
          options: ['עד מיליון ש"ח', 'עד 2 מיליון ש"ח', 'עד 3 מיליון ש"ח'],
          orrr: ''
        },
        {
          question: "מה גובה ההלוואה שהינכם מעוניינים לקחת?",
          options: ["עד 500 אלף שח", "עד מיליון שח", "מעל למיליון שח"],
          orrr: ''
        },
        {
          question: "האם יש משכנתא על הנכס?",
          options: ["כן", "לא"],
          orrr: 'inline'
        },
        {
          question: "מתי נוח לכם שנחוזר עם תוצאות הזכאות?",
          options: ["עד 500 אלף שח", "עד מיליון שח", "מעל למיליון שח"],
          orrr: 'inline'
        },
        // NOW CONTACT
      ],
      survey: {},
    };
  },
  methods: {
    print() {
      console.log(this.survey);
    },
  },
};
</script>

<style lang="scss">
.survey-cmp {
  // display: block;
  // width: 100%;
  width: min(700px, 100%);
  .v-carousel {
    h4 {
      font-size: 30px;
      font-weight: 400;
    }
  }

  .v-card {
    padding: 0;
    border-radius: 12px;

    // .pre-btn {
    //   position: absolute;
    //   bottom: 20px;
    //   left: 20px;
    // }
    // .next-btn {
    //   position: absolute;
    //   bottom: 20px;
    //   right: 20px;
    // }
  }
}
</style>






<!-- 
<template v-slot:prev="{ props }">
  <v-btn
    style="transform: matrix(-1, 0, 0, 1, 0, 0)"
    class="pre-btn"
    color="#fff"
    variant="elevated"
    @click="props.onClick"
  >
    הקודם</v-btn
  >
</template>
<template v-slot:next="{ props }">
  <v-btn
    style="transform: matrix(-1, 0, 0, 1, 0, 0); animation: none;"
    class="next-btn"
    color="info"
    variant="elevated"
    @click="props.onClick"
  >
    המשך</v-btn
  >
</template> -->