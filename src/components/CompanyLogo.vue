<template>
  <div class="companyLogo">
    <div class="companyLogo__line companyLogo__line--left">{{ logoName1 }}</div>
    <div class="companyLogo__line companyLogo__line--right">
      {{ logoName2 }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    logoName1: 'Drop',
    logoName2: 'Zone'
  })
}
</script>

<style lang="scss">
.companyLogo {
  position: fixed;
  width: 151px;
  height: 94px;
  right: 2%;
  top: 4%;
  font: {
    family: $font_rozha;
    style: normal;
    weight: normal;
    size: 36px;
  }
  text: {
    align: right;
  }
  line-height: 40px;
  letter-spacing: 0.15em;
  @media only screen and (max-width: $breakpoint-phones) {
    right: 7.5vw;
  }
  @at-root #{&}__line {
    color: $white;
    background: $black;
    margin: {
      top: 10px;
      bottom: 10px;
    }
    padding: 2px 13px 2px 13px;
    @at-root #{&}--left {
      margin-right: 25px;
    }
    @at-root #{&}--right {
      margin-left: 25px;
    }
  }
}
</style>
