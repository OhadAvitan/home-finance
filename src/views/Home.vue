<template>
  <div class="home d-flex align-center flex-column">
    <div class="header-space"></div>
    <div class="hero d-flex flex-column" :style="{ backgroundImage: 'url(' + bgImg + ')' }" >
      <!-- <v-img :src="bgImg"></v-img> -->
      <!-- <a aria-label="Chat on WhatsApp" href="https://wa.me/+972506545074"
        ><img
          alt="Chat on WhatsApp"
          src="/src/assets/WhatsAppButtonGreenMedium.svg"
      /></a> -->
      <!-- <v-img :src="bgImg"></v-img> -->
      <h1 class="px-7" style="color: #fff">
        העתיד שלך מתחיל
        <span style="color: #93b3ff; text-shadow: #0000004d 0px 0px 15px"
          >בהשקעה</span
        >
        של היום
      </h1>
      <h2 class="pa-9 my-8 mx-auto" style="text-align: center">
        קבלו את המשכנתא שמתאימה לכם בדיוק<br />
        ליווי מקצועי, שקיפות מלאה וביטחון, כל הדרך לבית שלכם
      </h2>
    </div>
    <!-- <Form /> -->

    <div
      class="section2 pa-12 align-center text-center"
      style="font-size: 34px"
    >
      <div style="text-align: start; font-weight: 700">? יש לכם דירה/נכס</div>
      <div class="subtext">אתם זכאים להלוואה בריבית הנמוכה ביותר בשוק</div>
    </div>
    <div class="on-us">
      <h2 class="">הקווים המנחים אצלנו בהום משכנתאות</h2>
      <div class="container">
        <!-- <h2>אנחנו מאמינים</h2> -->
        <!-- <h2>אצלנו בהום משכנתאות מאמינים</h2> -->
        <div class="service d-flex flex-column align-center">
          <v-img :src="bgImg" style="width: 170px"></v-img>
          <h3>שתצאו רגועים ובטוחים</h3>
          <h4>asasdd adawda wdawda wd</h4>
        </div>
        <div class="service d-flex flex-column align-center">
          <v-img :src="bgImg" style="width: 170px"></v-img>
          <h3>אמינות ושקיפות</h3>
          <h4>asasdd adawda wdawda wd</h4>
        </div>
        <div class="service d-flex flex-column align-center">
          <v-img :src="bgImg" style="width: 170px"></v-img>
          <h3>התאמה אישית</h3>
          <h4>asasdd adawda wdawda wd</h4>
        </div>
      </div>
    </div>
    <div class="to-survey d-flex flex-column align-center text-center my-7 pa-10" >
      <h2 style="font-size: 28px">לבדיקת זכאות פשוטה</h2>
      <!-- <h2 class="d-inline">לחץ כאן</h2> -->
      <!-- 008eff -->
      <!-- 5544ff -->
      <!-- <div class="d-flex align-center justify-center" style="height: 36px; width: 86px; border-radius: 100px; background-color: #008eff;">
        <p style="color: aliceblue; line-height: 0%;">gcse</p>
      </div> -->
      <!-- <router-link to="/Survey">asdasd</router-link> -->
      <v-btn @click="this.$router.push('/Survey')" class="mt-3 mb-5" rounded="xl" size="x-large" >לחץ כאן</v-btn >
    </div>
    <div id="contacts" class="contact d-flex flex-column align-center justify-center">
      <div class="pb-8" style="font-size: 34px">קבל ייעוץ עכשיו - בחינם</div>
      <v-card :style="this.formFocus ? 'zooming' : ''" class="pa-4 mx-2 card-form" :loading="onSendBtn" :disabled="onSendBtn">
        <div class="d-flex flex-column">
          <v-text-field :focused="Med()" reverse bg-color="rgba(255, 255, 255, 0.8)" v-model="contactForm.name" color="#97b5ff" label="שם" variant="outlined" ></v-text-field>
          <v-text-field :focused="Med()" reverse bg-color="rgba(255, 255, 255, 0.8)" v-model="contactForm.phone" color="#97b5ff" label="טלפון" variant="outlined" ></v-text-field>
        </div>
        <div class="d-flex flex-column align-center">
          <v-btn size="large" :disabled="!thereIsProperty" variant="tonal" color="#93b3ff" @click="onSend" >שלח פרטים</v-btn >
          <v-checkbox color="#93b3ff" v-model="thereIsProperty" label="מאשר/ת שיש ברשותי דירה/נכס" ></v-checkbox>
        </div>
      </v-card>
      <v-img class="contact-img" src="/images/contact.svg"></v-img>
    </div>
  </div>
</template>
  
<script>
import emailJs from "@emailjs/browser";

export default {
  data() {
    return {
      formFocus: false,
      // bgImg: "@/assets/image1.png",
      contactForm: {
        name: '',
        phone: '',
      },
      onSendBtn: false,
      thereIsProperty: false,
      bgImg: "/images/heroBg5.png", //IMAGE
      // bgImg: "/images/image1.png" //IMAGE
      // bgImg: "/src/assets/image1.png",
    };
  },
  created() {
    if(this.$route.hash === '#contacts') {
      setTimeout(() => {
        this.thereIsProperty = true
      }, 1400);
    }
  },
  methods: {
    Med() {
      this.formFocus = true
    },
    checkContactForm() {
      console.log("onSend");
      if ( this.contactForm.name.length > 1 && this.contactForm.phone.length > 8 && this.contactForm.phone.length < 11 ) {
        console.log("TRUE");
        console.log("Form GOOD");
        // this.$router.push('/Congrats')
        return true;
      } else {
        console.log("FALSE");
        console.log("Form NOT good");
        alert("אנא וודאו שהזנתם פרטים כשורה");
        return false;
      }
    },
    parseSurvey() { //manipulate Data for EmailJS -> can be in for loop
      var temp = JSON.parse(localStorage.getItem('survey'))
      this.contactForm.answer1 = temp[0];
      this.contactForm.answer2 = temp[1];
      this.contactForm.answer3 = temp[2];
      this.contactForm.answer4 = temp[3];
      this.contactForm.answer5 = temp[4];
      // return str
    },
    async onSend() {
      this.onSendBtn = true;
      if (this.checkContactForm()) {
        emailJs.init({ publicKey: "G7VPrLPZtTI0HAYKM" });
        if(localStorage.getItem("survey")) {
          this.parseSurvey()
          // this.contactForm.answer = JSON.parse(localStorage.getItem('survey'));
        }
        console.log(this.contactForm);
        await emailJs.send("service_ljmf46p", "template_ily1rwj", this.contactForm)
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              localStorage.clear();
              this.$router.push("/Congrats");
            },
            (error) => {
              console.log("FAILED...", error);
              alert("Error system. Please try again.");
            }
          );
      }
      this.onSendBtn = false;
    },
  },
  components: {},
};
</script>
  
<style lang="scss">
.home {
  .zooming {
    zoom: 1.2 !important;
    position: absolute !important;
    margin-top: 50px !important;
  }
  // background-color: $clr1;
  // scroll-behavior: smooth;
  text-align: center;
  .header-space {
    width: 90vw;
    height: 70px;
  }
  .v-selection-control { //checkbox - to rtl
    display: flex;
    flex-direction: row-reverse !important;
  }
  color: #fff;
  // color: rgba(250, 250, 250, 0.508);
  .hero {
    box-sizing: border-box;
    width: 100vw;
    height: 470px;
    padding-top: 120px;
    // background-image: url('@/assets/image1.png');
    // background-attachment: fixed;
    background-position: center;
    // background-size: cover;
    background-size: cover;
    // ---------
    filter: blur(0px);
    animation-name: bluring;
    animation-duration: 3s;
    // background-image: '/assets/image1.png';

    h1 {
      text-align: center;
      // margin-top: 120px;
      // font-size: 10vw;
      font-size: 48px;
      color: rgb(250, 250, 250);
    }

    h2 {
      font-size: 26px;
      font-weight: 500;
    }
  }
  .contact {
    display: flex;
    flex-direction: column;

    // direction: rtl !important;
    text-align: right !important;
    width: 100vw;
    height: 600px;
    // background-color: #126f55;
    // background: linear-gradient(55deg, #0f4334, #61d6b5);
    // background: linear-gradient(37deg, #3b1d6c, #aed4ff);
    // background: linear-gradient(45deg, #5f599e, #58308f80);
    background: linear-gradient(45deg, #93b3ff, #58308f80);

    .contact-img {
      animation: myName 2s linear;
      position: absolute;
      width: 390px;
      right: 1px;
      bottom: 255px;
    }
  }
  .section2 {
    display: flex;
    flex-direction: column;
    width: 100vw;
    color: $clr3;
    .subtext {
      color: $clr2;
    }
  }
  .to-survey {
    // color: #73599e;
    color: $clr3;
  }
  .on-us {
    display: flex;
    flex-direction: column;

    // direction: rtl !important;
    // text-align: right !important;
    text-align: center !important;
    width: 100vw;
    // background-color: #126f55;
    // background: linear-gradient(55deg, #0f4334, #61d6b5);
    // background: linear-gradient(37deg, #3b1d6c, #aed4ff);
    // background: linear-gradient(313deg, #73599e, $clr2);
    // background: linear-gradient(313deg, #806ea0b8, #b8cdff);
    background: linear-gradient(313deg, #73599e85, #93b3ffb3);

    // background:
    //       linear-gradient(55deg, #0f4334, #61d6b5),
    //       url(https://grainy-gradients.vercel.app/noise.svg);

    .container {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      // flex-wrap: wrap;
      // flex-grow: 1;
      // min-width: 200px;
      // max-width: 300px;
      // justify-content: center;
      width: 100%;
      .service {
        color: #ffffff;
        font-weight: 400;
        margin: 12px;
        flex-grow: 1;
        // width: 350px;
        min-width: min(400px, 95%);
        max-width: 500px;
        height: 220px;
        background-color: #ffffff8b;
        border: #ffffff54 solid 3px;
        border-radius: 12px;
        animation: fade-in linear;
        animation-timeline: view(93vh -100px);
        // animation: fade-in linear;
        // animation-timeline: view();
        // animation-range-start: cover;
        // animation-range-end: 200px;
        
      }
    }
    @keyframes fade-in {
      from {scale: 0.7; opacity: 0;}
      to {scale: 1; opacity: 1;}

    }

    .card-form {
      width: min(400px, 95vw) !important;
      z-index: 2;
      background: rgba(255, 255, 255, 0.4);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
  }
}

@keyframes bluring {
  from {
    filter: blur(5px);
  }
  to {
    filter: blur(0px);
  }
}

@media (width <= 900px) {
  .contact {
    // height: 800px !important;
    height: 82vh !important;
    justify-content: start !important;
    // padding-top: 100px;
    padding-top: 10vh;
  }
}

@media (width <= 700px) {
  .hero {
    // height: 800px !important;
    height: 80vh !important;
    // justify-content: start !important;
    // padding-top: 100px;
    padding-top: 80px !important;
  }
}

@media (width <= 450px) {
  .home {
    .on-us .container .service {
      width: 90%;
      // padding-top: 80px !important;
    // height: 800px !important;
    // height: 80vh !important;
    // justify-content: start !important;
    // padding-top: 100px;
    }
    .contact {
      padding-top: 30px !important;
      .contact-img {
        width: 360px;
      }
    }
  }
  
}

@media (width >= 700px) {
  .hero {
    height: 600px !important;
    .to-survey {
      h2 {
        font-size: 60px !important;
        font-weight: 500;
      }
    }
    h1 {
      font-size: 66px !important;
    }
    h2 {
      font-size: 36px !important;
      font-weight: 500;
    }
  }
}

@media (width >= 900px) {
  .home {
    .on-us {
      .container {
        flex-direction: row;
        justify-content: center;
        .service {
          min-width: 300px;
          // background-color: #ff0909;
        }
      }
    }
  }
}
</style>