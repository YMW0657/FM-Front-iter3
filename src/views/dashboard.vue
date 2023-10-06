<template>
  <section
    class="page-section"
    id="services"
    style="padding: 9rem 0 9.5rem 0; height: 100vh"
  >
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Scam Type</h2>
        <h3 class="section-subheading text-muted">
          These are the techniques to look out for
        </h3>
      </div>
      <div class="row text-center">
        <div class="col-md-4 text-item" @click="showModel(0)">
          <span class="fa-stack fa-4x" style="">
            <img src="@/assets/img/flayfishing.svg" style="width: 80px" />
            <!-- <i class="fas fa-circle fa-stack-2x text-primary"></i> -->
            <!-- <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> -->
          </span>
          <h4 class="my-3">Phishing</h4>
          <p class="text-muted">
            Phishing is when scammers use fake emails or websites to trick
            people into giving away personal information, like passwords or
            credit card numbers.
          </p>
          <span class="read" v-if="actives[0]"><img src="@/assets/img/read.svg" style="width:24px;"></span>
        </div>
        <div class="col-md-4 text-item" @click="showModel(1)">
          <span class="fa-stack fa-4x">
            <!-- <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i> -->
            <img src="@/assets/img/Spoofing.svg" style="width: 80px" />
          </span>
          <h4 class="my-3">Spoofing</h4>
          <p class="text-muted">
            Spoofing is when scammers pretend to be someone or something they're
            not, like faking a phone number or email address. They do this to
            trick people into trusting them, so they can steal information or
            money.
          </p>
          <span class="read" v-if="actives[1]"><img src="@/assets/img/read.svg" style="width:24px;"></span>
        </div>
        <div class="col-md-4 text-item" @click="showModel(2)">
          <span class="fa-stack fa-4x">
            <!-- <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-lock fa-stack-1x fa-inverse"></i> -->
            <img src="@/assets/img/card.svg" style="width: 80px" />
          </span>
          <h4 class="my-3">Card theft</h4>
          <p class="text-muted">
            Card theft is when someone steals your credit or debit card
            information to buy things or take money without your permission.
            It's like someone taking money from your wallet without you knowing.
          </p>
          <span class="read" v-if="actives[2]"><img src="@/assets/img/read.svg" style="width:24px;"></span>
        </div>
      </div>
      <div class="dash-btn" style="text-align: center;margin-top:60px;" v-if="actives[0]&&actives[1]&&actives[2]">
        <a class="btn btn-primary btn-xl text-uppercase" href="/quiz">Test Your knowledge!</a>
      </div>
      <!-- <div class="dash-sup">
        <div style="display:flex;width:600px;">
          <div>Finished reading through those techniques?  <a href="/quiz">go to quiz</a></div>
        </div>
        <div class="" style="display:flex;width:600px;">
          <div>Still not sure about some email? <a href="/scan">Scan it!</a></div> 
        </div>
      </div> -->
      <div
        class="portfolio-modal portfolio-modal1 modal fade show"
        :class="shows[0]?'active':''"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal" @click="close(0)">
              <img src="@/assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body" style="width:100%;">
                    <!-- Project details-->
                    <h2 class="text-uppercase">Project Name</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div class="bar-chart" ref="barChart1" style="width: 43vw; height: 400px;"></div>
                    <p>
                      SMS scams have become a glaring issue, ranking as the third most common type of fraud. ln this digital age23.4% of scams occur via text messages, requiring heightened awareness to avoid falling prey.
                    </p>
                    <div class="bar-chart" ref="barChart2" style="width: 43vw; height: 400px;"></div>
                    <p>
                      SMS scams have become a glaring issue, ranking as the third most common type of fraud. ln this digital age23.4% of scams occur via text messages, requiring heightened awareness to avoid falling prey.
                    </p>
                    <div class="bar-chart" ref="barChart3" style="width: 43vw; height: 400px;"></div>
                    <p>
                      SMS scams have become a glaring issue, ranking as the third most common type of fraud. ln this digital age23.4% of scams occur via text messages, requiring heightened awareness to avoid falling prey.
                    </p>
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                      @click="close(0)"
                    >
                      <i class="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal portfolio-modal1 modal fade show"
        :class="shows[1]?'active':''"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal" @click="close(1)">
              <img src="@/assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <!-- Project details-->
                    <h2 class="text-uppercase">Project Name</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div class="bar-chart" ref="barChart4" style="width: 43vw; height: 400px;"></div>
                    <p>
                      SMS scams have become a glaring issue, ranking as the third most common type of fraud. ln this digital age23.4% of scams occur via text messages, requiring heightened awareness to avoid falling prey.
                    </p>
                    <div class="bar-chart" ref="barChart5" style="width: 43vw; height: 400px;"></div>
                    <p>
                      SMS scams have become a glaring issue, ranking as the third most common type of fraud. ln this digital age23.4% of scams occur via text messages, requiring heightened awareness to avoid falling prey.
                    </p>
                    <div class="bar-chart" ref="barChart6" style="width: 43vw; height: 400px;"></div>
                    <p>
                      SMS scams have become a glaring issue, ranking as the third most common type of fraud. ln this digital age23.4% of scams occur via text messages, requiring heightened awareness to avoid falling prey.
                    </p>
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                      @click="close(1)"
                    >
                      <i class="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal portfolio-modal1 modal fade show"
        :class="shows[2]?'active':''"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal" @click="close(2)">
              <img src="@/assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <!-- Project details-->
                    <h2 class="text-uppercase">Project Name</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div class="bar-chart" ref="barChart7" style="width: 43vw; height: 400px;"></div>
                    <p>
                      SMS scams have become a glaring issue, ranking as the third most common type of fraud. ln this digital age23.4% of scams occur via text messages, requiring heightened awareness to avoid falling prey.
                    </p>
                    <div class="bar-chart" ref="barChart8" style="width: 43vw; height: 400px;"></div>
                    <p>
                      SMS scams have become a glaring issue, ranking as the third most common type of fraud. ln this digital age23.4% of scams occur via text messages, requiring heightened awareness to avoid falling prey.
                    </p>
                    <div class="bar-chart" ref="barChart9" style="width: 43vw; height: 400px;"></div>
                    <p>
                      SMS scams have become a glaring issue, ranking as the third most common type of fraud. ln this digital age23.4% of scams occur via text messages, requiring heightened awareness to avoid falling prey.
                    </p>
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                      @click="close(2)"
                    >
                      <i class="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from "vue-router";
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";
const router = useRouter();
const toQuestionFn = () => {
  router.push("/quiz");
};
const barChart1 = ref();
const barChart2 = ref();
const barChart3 = ref();
const barChart4 = ref();
const barChart5 = ref();
const barChart6 = ref();
const barChart7 = ref();
const barChart8 = ref();
const barChart9 = ref();
const shows = ref({
  0:false,
  1:false,
  2:false
})
const actives = ref({
  0:false,
  1:false,
  2:false
})
const chartData1 = ref({
  xAxis: {
    type: 'category',
    data: ["Over the phone",	"Text message",	"Email	Online",	"Letter",	"Other"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [38.3 ,23.4 , 32.2 , 20.2 , 1.3 , 0.6 ],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData2 = ref({
  xAxis: {
    type: 'category',
    data: ["Information request or phishing", "Financial advice",	"Buying or selling", "Computer support","Upfront payment", "Lottery",	"Relationship or romance", "Pyramid"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [43.70, 18.40, 18.20, 17.20, 14.80, 7.80, 5.30, 2.90],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData3 = ref({
  xAxis: {
    type: 'category',
    data: ["15~24", "25~34",	"35~44", "45~54", "55~64", "65 and over"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [1.80,	2.70,	2.50,	3.50,	3.20,	2.50],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})

const chartData4 = ref({
  xAxis: {
    type: 'category',				

    data: ["Over the phone", "Text message",	"Email	Online", "Letter", "Other"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [38.30,	23.40,	32.20,	20.20,	1.30,	0.60,],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData5 = ref({
  xAxis: {
    type: 'category',
    data: ["Information request or phishing", "Financial advice",	"Buying or selling", "Computer support", "Upfront payment", "Lottery", "Relationship or romance", "Pyramid"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [43.70,	18.40,	18.20,	17.20,	14.80,	7.80,	5.30,	2.90],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData6 = ref({
  xAxis: {
    type: 'category',
    data: ["15~24", "25~34",	"35~44", "45~54", "55~64", "65 and over"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [1.80,	2.70,	2.50,	3.50,	3.20,	2.50,],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData7 = ref({
  xAxis: {
    type: 'category',
    data: ["Information request or phishing", "Financial advice",	"Buying or selling", "Computer support", "Upfront payment", "Lottery", "Relationship or romance","Pyramid"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [43.70,	18.40,	18.20,	17.20,	14.80,	7.80,	5.30,	2.90,],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData8 = ref({
  xAxis: {
    type: 'category',
    data: ["Information request or phishing", "Buying or selling",	"Financial advice", "Computer support", "Upfront payment", "Relationship or romance"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [0.8,	0.8,	0.4,	0.2,	0.2,	0.1,],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData9 = ref({
  xAxis: {
    type: 'category',
    data: ["Buying or selling", "Information request or phishing",	"Financial advice", "Upfront payment", "Threats or extortion", "Computer support"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [66.2,	60.9,	59.5,	56.6,	42.0,	39.7,],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const showModel = (type)=>{
  shows.value[type] = true;
  actives.value[type] = true;
}
const close = (type) =>{
  shows.value[type] = false;
}

onMounted(()=>{
  const myChart1 = echarts.init(barChart1.value);
  myChart1.setOption(chartData1.value);

  const myChart2 = echarts.init(barChart2.value);
  myChart2.setOption(chartData2.value);

  const myChart3 = echarts.init(barChart3.value);
  myChart3.setOption(chartData3.value);

  const myChart4 = echarts.init(barChart4.value);
  myChart4.setOption(chartData4.value);

  const myChart5 = echarts.init(barChart5.value);
  myChart5.setOption(chartData5.value);

  const myChart6 = echarts.init(barChart6.value);
  myChart6.setOption(chartData6.value);
  const myChart7 = echarts.init(barChart7.value);
  myChart7.setOption(chartData7.value);
  const myChart8 = echarts.init(barChart8.value);
  myChart8.setOption(chartData8.value);
  const myChart9 = echarts.init(barChart9.value);
  myChart9.setOption(chartData9.value);
})


</script>
<style scoped>
.dashboard {
  width: 100%;
  min-height: calc(100vh - 64px);
}
.fa-stack {
  width: 2em;
  height: 2em;
  background: #ffc800;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.dash-sup {
  width: 600px;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #6c757d !important;
}
.text-item{
  cursor: pointer;
  transition: all 0.3s ease;
  padding-top: 24px;
  position: relative;
  height: 330px;
}
.text-item:hover{
  background: rgba(0,0,0,0.1);
}
.text-item .read{
  position: absolute;
  bottom:0;
  left:50%;
  margin-left:-12px;
}
.portfolio-modal1.active{
  display: block;
  padding-left: 0px
}
</style>
