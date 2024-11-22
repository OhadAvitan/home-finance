<template>
    <div class="congrats d-flex flex-column align-center">
      <div class="header-space"></div>
      <v-card class="card pa-4 d-flex flex-column justify-space-between">
        <div>
            <h2>(= תודה שבחרתם בנו</h2>
            <h3>הפרטים נקלטו אצלינו בהצלחה במערכת</h3>
            <h3>ונחזור אליכם בהקדם</h3>
        </div>
        <div>
            <h3>צוות הום משכנתאות</h3>
        </div>
        <v-img :src="logoSrc"></v-img>
      </v-card>
      <div class="contant"></div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    data() {
        return {
            logoSrc: '/images/biglogo.svg', //IMAGE
            // logoSrc: '/src/assets/biglogo.svg',
        }
    },
    created() {
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.$router.push('/')
      }, 10000);
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .header-space {
      width: 90vw;
      height: 70px;
    }

    .congrats {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(180deg, #fff, #8186E8);
        // background: linear-gradient(180deg, #fff, #2E3D5F);

        .v-card {
            width: 400px;
            height: 250px;
            margin-top: 20vh;

            .v-img {
                position: absolute;
                bottom: 0;
                left: 0;
                // transform: scale(0.6) translate(-42px, 10px);
                transform: translate(-100px, 40px);
                filter: opacity(0.8);
                // transform: translate(-15vw, 5v)?
                width: 200px;
                height: 200px;
            }

            h2, h3, h4 {
                color: #2E3D5F;
                font-weight: 600;
            }
        }
    }
  </style>