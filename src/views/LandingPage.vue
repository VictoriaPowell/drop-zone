<template>
  <CompanyLogo />
  <Countdown />
</template>

<script>
import CompanyLogo from "@/components/CompanyLogo";
import Countdown from "@/components/Countdown";

export default {
  name: "Landing Page",
  data: function () {
    return {};
  },
  components: {
    CompanyLogo,
    Countdown,
  },
};
</script>
<style lang="scss">
html {
  background: url(../assets/landing.jpeg) no-repeat left center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media only screen and (max-width: $breakpoint-phones) {
    background-size: 385vw;
    background-position-y: -12vw;
  }
}
body {
  text-transform: uppercase;
}
</style>
