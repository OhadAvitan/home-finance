<template>
  <div class="home d-flex align-center flex-column">
    <div class="header-space"></div>
    <div
      class="hero d-flex flex-column"
      :style="{ backgroundImage: 'url(' + bgImg + ')' }"
    >
      <!-- <v-img :src="bgImg"></v-img> -->
      <!-- <a aria-label="Chat on WhatsApp" href="https://wa.me/+972506545074"
        ><img
          alt="Chat on WhatsApp"
          src="/src/assets/WhatsAppButtonGreenMedium.svg"
      /></a> -->
      <!-- <v-img :src="bgImg"></v-img> -->
      <h1 class="px-7"> העתיד שלך מתחיל <span style="color: #b6b8ff; text-shadow: rgb(0 0 0 / 10%) 0px 0px 14px" >בהשקעה</span > של היום </h1>
      <h2 class="pa-11 mx-auto text-right">
        קבלו את המשכנתא שמתאימה לכם בדיוק – ליווי מקצועי, <br />
        שקיפות מלאה וביטחון כל הדרך לבית שלכם!
      </h2>
    </div>
    <!-- <Form /> -->

    <div class="section2 pa-4 align-center" style="font-size: 34px;">
      <div style="text-align: start; font-weight: 600;">
        ? יש לכם דירה/נכס
      </div>
      <div>
        אתם זכאים להלוואה בריבית הנמוכה ביותר בשוק
      </div>
    </div>
    <div class="on-us">
      <div class="container">
        <!-- <h2>אנחנו מאמינים</h2> -->
        <h2>אצלנו בהום משכנתאות מאמינים</h2>
        <div class="service d-flex flex-column align-center">
          <v-img :src="bgImg" style="width: 170px"></v-img>
          <h3>rar awdaw</h3>
          <h4>asasdd adawda wdawda wd</h4>
        </div>
        <div class="service d-flex flex-column align-center">
          <v-img :src="bgImg" style="width: 170px"></v-img>
          <h3>rar awdaw</h3>
          <h4>asasdd adawda wdawda wd</h4>
        </div>
        <div class="service d-flex flex-column align-center">
          <v-img :src="bgImg" style="width: 170px"></v-img>
          <h3>rar awdaw</h3>
          <h4>asasdd adawda wdawda wd</h4>
        </div>
      </div>
    </div>
    <div class="to-survey d-flex flex-column align-center pa-10">
      <h2>לבדיקת זכאות פשוטה</h2>
      <!-- <h2 class="d-inline">לחץ כאן</h2> -->
      <!-- 008eff -->
      <!-- 5544ff -->
      <!-- <div class="d-flex align-center justify-center" style="height: 36px; width: 86px; border-radius: 100px; background-color: #008eff;">
        <p style="color: aliceblue; line-height: 0%;">gcse</p>
      </div> -->
      <!-- <router-link to="/Survey">asdasd</router-link> -->
      <v-btn @click="this.$router.push('/Survey')" class="mt-3 mb-5" rounded="xl" size="x-large">לחץ כאן</v-btn>
    </div>
    <div class="contact d-flex flex-column align-center justify-center">
      <div class="pb-8" style="font-size: 34px;">
        קבל ייעוץ עכשיו - בחינם
      </div>
      <v-card class="pa-4 glass" :loading="onSendBtn" :disabled="onSendBtn" style="width: 340px;" >
        <div class="d-flex flex-column">
          <v-text-field reverse bg-color="rgba(255, 255, 255, 0.8)" v-model="contactForm.name" color="#73599e" label="שם" variant="outlined" ></v-text-field>
          <v-text-field reverse bg-color="rgba(255, 255, 255, 0.8)" v-model="contactForm.message" color="#73599e" label="טלפון" variant="outlined" ></v-text-field>
        </div>
        <div class="d-flex flex-column align-center">
          <v-btn size="large" variant="tonal" color="#73599e" @click="onSend">שלח פרטים</v-btn>
        </div>
      </v-card>
    </div>
    <!-- GGGGGGGGGGGGGGGGGGGG -->
  </div>
</template>
  
  <script>
import emailJs from "@emailjs/browser";

export default {
  data() {
    return {
      // bgImg: "@/assets/image1.png",
      contactForm: {
        name: "",
        message: "",
      },
      onSendBtn: false,
      bgImg: "/images/image1.png" //IMAGE
      // bgImg: "/src/assets/image1.png",
    };
  },
  created() {
    setTimeout(() => {
      // this.$router.push('/Congrats')
      // this.$router.push('/')
      // this.$router.push('/Survey')
    }, 2000);
  },
  methods: {
    checkContactForm() {
      console.log("onSend");
      if (
        this.contactForm.name.length < 2 &&
        this.contactForm.message.length > 8 &&
        this.contactForm.message.length < 11
      ) {
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
    async onSend() {
      this.onSendBtn = true;
      if (this.checkContactForm()) {
        emailJs.init({ publicKey: "G7VPrLPZtTI0HAYKM" });
        await emailJs
          .send("service_ljmf46p", "template_ily1rwj", this.contactForm)
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              this.$router.push("/Congrats");
            },
            (error) => {
              console.log("FAILED...", error);
              alert("Error system. Please try again.");
            }
          );
        // resirect() to thank you page
      }
      this.onSendBtn = false;
    },
  },
  components: {},
};
</script>
  
  <style lang="scss">
.home {
  .header-space {
    width: 100vw;
    height: 70px;
  }

  color: rgb(250, 250, 250);
  // color: rgba(250, 250, 250, 0.508);
  .hero {
    box-sizing: border-box;
    width: 100vw;
    height: 600px;
    // background-image: url('@/assets/image1.png');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    // ---------
    filter: blur(0px);
    animation-name: bluring;
    animation-duration: 3.1s;
    // background-image: '/assets/image1.png';

    h1 {
      text-align: center;
      margin-top: 120px;
      // font-size: 10vw;
      font-size: 44px;
      color: rgb(250, 250, 250);
    }

    h2 {
      font-weight: 400;
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
    background: linear-gradient(313deg, #73599e, #ffffff);
  }
  .to-survey {
    color: #73599e;
  }
  .section2{
    display: flex;
    flex-direction: column;
    width: 100vw;
    color: #73599e;
  }
  .on-us {
    display: flex;
    flex-direction: column;

    // direction: rtl !important;
    text-align: right !important;
    width: 100vw;
    // background-color: #126f55;
    // background: linear-gradient(55deg, #0f4334, #61d6b5);
    // background: linear-gradient(37deg, #3b1d6c, #aed4ff);
    background: linear-gradient(313deg, #73599e, #ffffff);
    // background:
    //       linear-gradient(55deg, #0f4334, #61d6b5),
    //       url(https://grainy-gradients.vercel.app/noise.svg);

    .container {
      padding: 20px;
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
        min-width: 400px;
        max-width: 500px;
        height: 220px;
        background-color: #ffffff8b;
        border: #ffffff54 solid 3px;
        border-radius: 12px;
      }
    }

    .glass {
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
    filter: blur(4px);
  }
  to {
    filter: blur(0px);
  }
}

@media (width >= 700px) {
  h1 {
    font-size: 70px !important;
  }
  h2 {
    font-size: 40px !important;
    font-weight: 500;
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