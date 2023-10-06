<template>
  <div class="video">
    <div class="video-container">
      <div class="video-sup">
        This is a scenario simulation. After each video finishes playing, you
        can decide the next step. Be aware that the scenario might change based
        on your choices, so please choose carefully.
      </div>
      <video controls autoplay ref="videoElement">
        <source :src="videoSource" type="video/mp4" />
      </video>
      <div class="question-wrapper" v-if="questionShow && btns[route.query.id]['Y']">
        <div class="question-header">WHAT'S YOUR NEXT DO?</div>
        <div class="question-lists">
          <div  v-if="btns[route.query.id]['Y']" class="question-list" @click="toJump('Y')">
            {{ btns[route.query.id]["Y"] }}
          </div>
          <div v-if="btns[route.query.id]['N']" class="question-list" @click="toJump('N')">
            {{ btns[route.query.id]["N"] }}
          </div>
        </div>
      </div>
      <div class="question-wrapper question-result" v-if="questionShow && !btns[route.query.id]['Y']">
        {{ btns[route.query.id]['R'] }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const questionShow = ref(false);
const route = useRoute();
const videoId = route.query.id;
const videoSource = ref();
videoSource.value = "src/assets/video/" + videoId + ".mp4";
const videoElement = ref();
// const videoIdSource = ref({
//   1: {
//     Y: 2,
//     N: 3
//   },
//   2: {
//     Y:4,
//     N:5
//   },
//   3: {
//     Y:6,
//     N:7
//   }
// })
const videoIdSource = ref({
  1: {
    Y: 3,
    N: 2,
  },
  2: {
    Y: 5,
    N: 4,
  },
  3: {
    Y: 6,
    N: 2,
  },
  4: {
    Y: 10,
    N: 8,
  },
  5: {
    Y: 11,
    N: 4,
  },
  6: {
    Y: 2,
    N: 7,
  },
  7: {
    /*bad end*/
  },
  8: {
    Y: 12,
    N: 13,
  },
  9: {
    Y: 13,
    N: 10,
  },
  10: {
    Y: 15,
    N: 14,
  },
  11: {
    Y: 4,
    N: 16,
  },
  12: {
    Y: 17,
    N: 4,
  },
  13: {
    /*good end*/
  },
  14: {
    /*good end*/
  },
  15: {
    /*bad end*/
  },
  16: {
    /*bad end*/
  },
  17: {
    Y: 15,
    /*15*/
  },
});
// const btns = ref({
//   1:{
//     Y:"Open",
//     N:"Close"
//   },
//   2:{
//     Y:"Anwser",
//     N:"Close"
//   },
//   3:{
//     Y:"Enter Info",
//     N:"Close"
//   },
//   4:{
//     Y:"Confirm",
//     N:"Ignore"
//   },
//   5:{
//     Y:"Check",
//     N:"Ignore"
//   }
// })
const btns = ref({
  1: {
    Y: "Open", //jump to 3
    N: "Close", //jump to 2
  },
  2: {
    Y: "Anwser", //jump to 5
    N: "Close", //jump to 4
  },
  3: {
    Y: "Enter Info", //jump to 6
    N: "Close", //jump to 2
  },
  4: {
    Y: "Reply", //jump to 10
    N: "No reply", //jump to 8
    other: "Contact Bank", //jump to 9
  },
  5: {
    Y: "Answer", //jump to 11
    N: "Ignore", //jump to 4
  },
  6: {
    Y: "Trust", //jump to 2
    N: "Not Trust", //jump to 7
  },
  7: {
    R: "Bad End"
  },
  8: {
    Y: "Open", //jump to 12
    N: "Close", //jump to 13
  },
  9: {
    Y: "Trust", //jump to 13
    N: "Not Trust", //jump to 10
  },
  10: {
    Y: "Provide info", //jump to 15
    N: "Ignore", //jump to 14
  },
  11: {
    Y: "Trust", //jump to 4
    N: "Not Turst", //jump to 16
  },
  12: {
    Y: "Pay it", //jump to 17
    N: "Close", //jump to 4
  },
  13: {
    //"good end"
    R:"Good End"
  },
  14: {
    //"good end"
    R:"Good End"
  },
  15: {
    //"bad end"
    R:"Bad End"
  },
  16: {
    //"bad end"
    R:"Bad End"
  },
  17: {
    //jump to 15
    Y: "Next"
  },
});
const formatSourceFn = (source, videoId, type) => {
  if (source.value[videoId]) {
    return source.value[videoId][type];
  } else {
    return "";
  }
};
const toJump = (type) => {
  const nextVideoId = formatSourceFn(videoIdSource, videoId, type);
  window.location.href = "/scenario?id=" + nextVideoId;
};
onMounted(() => {
  const actualVideoElement = videoElement.value;
  console.log(actualVideoElement);
  if (actualVideoElement) {
    actualVideoElement.load();
    // actualVideoElement.addEventListener('loadedmetadata', () => {
    //   const currentTime = actualVideoElement.currentTime;
    // });
    actualVideoElement.addEventListener("timeupdate", () => {
      const totalDuration = actualVideoElement.duration;
      const currentTime = actualVideoElement.currentTime;
      console.log(totalDuration - currentTime);

      if (totalDuration - currentTime <= 2.5) {
        if (!questionShow.value) {
          questionShow.value = true;
        }
      }
    });
  }
});
</script>
<style scoped>
.video {
  padding-top: 71px;
  height: 100vh;
}
.video-container {
  position: relative;
  width: 70%;
  margin: 50px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
video {
  width: 100%;
  height: auto;
}
.question-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
  transition: all 1s ease;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: -8rem; */
  border-radius: 10px;
}
.question-header {
  text-align: center;
  color: #fff;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 3.5rem;
}
.question-lists {
  width: 100%;
  display: flex;
  margin-top: 80px;
  justify-content: center;
}
.question-list {
  width: 200px;
  height: 200px;
  background: #ffd84c99;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
}

.question-list:nth-of-type(2) {
  margin-left: 20rem;
}
.question-list:hover {
  background: #dfbd4599;
}
.question-wrapper.question-result{
  color:#fff;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: bold;
}
.video-sup {
  text-align: left;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: bold;
}
</style>