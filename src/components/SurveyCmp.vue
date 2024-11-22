<template>
  <div class="survey-cmp">
    <v-card elevation="2">
      <v-carousel v-model="slideC" height="320" progress="#8186e8" hide-delimiters :show-arrows="false" style="direction: rtl; transform: matrix(-1, 0, 0, 1, 0, 0)" >
        <div>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%" style="transform: matrix(-1, 0, 0, 1, 0, 0)">
              <!-- <div class="d-flex fill-height justify-center align-center flex-column"> -->
              <!-- justify-center align-center -->
              <div class="d-flex flex-column pa-8 mb-4">
                <div class="mb-3"><h4 style="font-size: 26px;">{{ slide.question }}</h4></div>
                <div class="d-flex flex-column">
                  <v-radio-group :inline="slide.inline" v-model="survey[i]" style="direction: rtl" >
                    <v-radio v-for="n in slide.options.length" :value="slide.options[n - 1]" :label="slide.options[n - 1]" :key="n" color="#8186e8" class="" ></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </div>
      </v-carousel>
    </v-card>
    <!-- {{ survey[0] }}
    {{ survey[4] }} -->
    <div class="d-flex justify-space-around align-center py-6 mt-2">
      <v-btn variant="tonal" size="large" style="width: min(20vw, 170px)" @click="onContinue(), slideC = Math.min(slideC + 1, slides.length - 1)" rounded="lg" color="#8186e8" >
        <!-- {{ survey[4] ? "סיום" : "המשך" }} -->
        {{ this.slideC === this.slides.length - 1 ? "סיום" : "המשך" }}
      </v-btn>
      <!-- {{ slideC }}
      {{ slides.length-1 }} -->
      <v-btn variant="tonal" size="large" style="width: min(20vw, 170px)" @click="slideC = Math.max(slideC - 1, 0)" rounded="lg" color="#969696" >הקודם</v-btn >
      <!-- {{ slideC }} -->
    </div>
    <!-- <v-btn @click="allAnswered()">ALL</v-btn>
    <v-btn @click="print()">PRINT</v-btn> -->
    <!-- <v-btn @click="this.toContact()">TO</v-btn> -->
    <!-- <v-btn @click="temp()">Temp</v-btn> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // lili: 'linear-gradient(90deg, #d5d0ff, #8186e8)',
      slideC: 0,
      slides: [
        {
          question: "יש בבעלותכם נכס?",
          options: ["כן", "לא"],
          inline: false,
        },
        {
          question: "מה שווי הנכס שלכם?",
          options: ['עד מיליון ש"ח', 'עד 2 מיליון ש"ח', 'עד 3 מיליון ש"ח'],
          inline: false,
        },
        {
          question: "מה גובה ההלוואה שהינכם מעוניינים לקחת?",
          options: ['עד 500 אלף ש"ח', 'עד מיליון ש"ח', 'מעל למיליון ש"ח'],
          inline: false,
        },
        {
          question: "האם יש משכנתא על הנכס?",
          options: ["כן", "לא"],
          inline: false,
        },
        {
          question: "מתי נוח לכם שנחזור עם תוצאות הזכאות?",
          options: ['שעות הבוקר','שעות הצהריים','שעות הערב'],
          inline: false,
        },
        // NOW CONTACT
      ],
      survey: {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
      },
      // survey: [
      //   '',
      //   '',
      //   '',
      //   '',
      //   '',
      // ],
    };
  },
  methods: {
    temp() {
      localStorage.setItem('survey', JSON.stringify(this.survey));
      // console.log('============');
      // console.log(localStorage.survey);
      // console.log('============');
      // console.log(localStorage.getItem('survey'));
      // console.log(JSON.stringify(localStorage.getItem('survey')));
      console.log(JSON.parse(localStorage.getItem('survey')));
    },
    onContinue() {
      if( this.slideC === this.slides.length-1 ) {
        // this.textBtn = 'סיום'
        if(this.allAnswered()) {
          if(this.survey[0] === 'לא') {
            // alert('לצערינו לא יכולים לעזור')
            alert('לאחר עיבוד השאלון, לצערינו אין תוכנית מספיק מתאימה שתעבוד עבורכם')
             setTimeout(() => {
              this.$router.push('/')
             }, 1800);
          } else {
            localStorage.setItem('survey', JSON.stringify(this.survey));
            this.$router.push({ path: '/', hash: '#contacts' })
            // contactUs
            alert('יכולים לעזור');
          }
        } else {
          alert('אנא וודאו שמילאתם הכל כשורה')
          console.log('NOT all');
        }
      }
    },
    allAnswered() {
      console.log('allAnswered');
      let flag = true
      var i = 0;
      while ( i < this.slides.length ) {
        console.log(i);
        if( !this.survey[i] ) {
          console.log( this.survey[i] );
          return flag = false
        }
        i++
      }
      return flag
    },
    // print() {
    //   console.log(this.survey);
    // },
    // finish(){
    //   console.log('FINISH');
    //   if( this.allAnswered() ) {
    //     console.log('all answered');
    //     if(this.survey[0] === 'לא') {
    //       console.log('לצערינו לא יכולים לעזור');
    //     } else {
    //       console.log('יכולים לעזור');
    //     }
    //   }
    // },
    // onFifth() {
    //   if(this.survey[4]) {
    //     // now lets check
    //     if(!this.allAnswered()) { //if not true -> alert
    //       alert('אנא וודדו שמילאתם הכל כשורה')
    //     } else {
    //       if(this.finish()) {
    //         alert('לצערינו לא יכולים לעזור')
    //       }
          
    //     }
    //   }
    // },
    // allAnswered1() {
    //   console.log('allAnswered1');
    //   console.log(this.survey.length);
    //   for (let j = 0; j < this.survey.length; j++) {
    //     console.log('HERE 1');
    //     if( this.survey[j] === '' ) {
    //       console.log('false');
    //       return false
    //     }
    //     console.log('true');
    //   } return false
    // },
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
    .v-radio {
      .v-label {
        font-size: 18px;
      }
    }
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
