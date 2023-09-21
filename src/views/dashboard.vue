<template>
  <section class="page-section" id="services" style="padding: 9rem 0 9.5rem 0;">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Scam Type</h2>
        <h3 class="section-subheading text-muted">
          These are the techniques to look out for
        </h3>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
          <span class="fa-stack fa-4x" style="">
            <img src="@/assets/img/flayfishing.svg" style="width:80px;">
            <!-- <i class="fas fa-circle fa-stack-2x text-primary"></i> -->
            <!-- <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> -->
          </span>
          <h4 class="my-3">Phishing</h4>
          <p class="text-muted">
            Phishing is when scammers use fake emails or websites to trick people into giving away personal information, like passwords or credit card numbers.
          </p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <!-- <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i> -->
            <img src="@/assets/img/Spoofing.svg" style="width:80px;">
          </span>
          <h4 class="my-3">Spoofing</h4>
          <p class="text-muted">
            Spoofing is when scammers pretend to be someone or something they're not, like faking a phone number or email address. They do this to trick people into trusting them, so they can steal information or money.
          </p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <!-- <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-lock fa-stack-1x fa-inverse"></i> -->
            <img src="@/assets/img/card.svg" style="width:80px;">
          </span>
          <h4 class="my-3">Card theft</h4>
          <p class="text-muted">
            Card theft is when someone steals your credit or debit card information to buy things or take money without your permission. It's like someone taking money from your wallet without you knowing.
          </p>
        </div>
      </div>
      <div class="dash-sup">
        <div style="display:flex;width:600px;">
          <div>Finished reading through those techniques?  <a href="/quiz">go to quiz</a></div>
        </div>
        <div class="" style="display:flex;width:600px;">
          <div>Still not sure about some email? <a href="/scan">Scan it!</a></div> 
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toQuestionFn = () => {
  router.push("/quiz");
};
</script>
<style scoped>
.dashboard {
  width: 100%;
  min-height: calc(100vh - 64px);
}
.fa-stack{
  width:2em;
  height:2em;
  background:#ffc800;
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0 auto;
}
.dash-sup{
  width:600px;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #6c757d !important;
}
</style>
