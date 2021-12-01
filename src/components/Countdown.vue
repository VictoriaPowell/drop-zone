<template>
  <div v-if="loaded" class="countdown">
    <section class="countdown__promoName">{{ promoItemName }}</section>
    <section class="container">
      <div class="row">
        <div
          v-for="(value, name) in countdownElements"
          :key="name"
          class="countdownElement col"
        >
          <div class="countdownElement__value">
            <div class="digit" v-for="digit in value.split('')" :key="digit">
              {{ digit }}
            </div>
          </div>

          <div class="countdownElement__label">{{ name }}</div>
        </div>
      </div>
    </section>
    <section v-if="timeLeft" class="countdown__promoStatus">Until Drop</section>
    <section v-else class="countdown__promoStatus">Buy Now</section>
  </div>
</template>

<script>
// Default Loading Page Date:  13d, 8h, 12m, 5s in the future
const default_end_date = new Date()
let default_seconds =
  default_end_date.getSeconds() + 5 + 12 * 60 + 8 * 60 * 60 + 13 * 24 * 60 * 60
default_end_date.setSeconds(default_seconds)

const date = null // Set custom date string here ex. '03/25/2022'
// const date = '03/25/2022'

const end_date = date ? new Date(date) : default_end_date

export default {
  data: () => ({
    promoItemName: 'Leezy Boost 103',
    countdownElements: {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0
    },
    loaded: false,
    timeLeft: true
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    },
    _endDate() {
      return end_date
    }
  },
  mounted() {
    this.getRemainingDateTime()
  },
  methods: {
    formatDateTimeElement: element => element.toString().padStart(2, '0'),
    getRemainingDateTime() {
      const timer = setInterval(() => {
        const now = new Date()
        const end = this._endDate
        const distance = end.getTime() - now.getTime()

        if (distance < 0) {
          clearInterval(timer)
          this.timeLeft = false
          this.loaded = true
          return
        }

        const days = Math.floor(distance / this._days)
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)

        this.countdownElements.days = this.formatDateTimeElement(days)
        this.countdownElements.hours = this.formatDateTimeElement(hours)
        this.countdownElements.mins = this.formatDateTimeElement(minutes)
        this.countdownElements.secs = this.formatDateTimeElement(seconds)

        this.loaded = true
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';

.countdown {
  position: absolute;
  width: 584px;
  height: 200px;
  left: 50%;
  bottom: 17vw;
  text-align: center;
  @media only screen and (max-width: $breakpoint-phones) {
    bottom: -2vw;
    width: 85vw;
    left: unset;
    margin: {
      left: 8%;
      right: 8%;
    }
  }
  @at-root #{&}__promoName {
    font: {
      family: $font_roboto;
      style: normal;
      weight: 900;
      size: 48px;
    }
    line-height: 40px;
    letter-spacing: 0.15em;
    margin-bottom: 5%;
    color: $black;
    @media only screen and (max-width: $breakpoint-phones) {
      font-size: 6.2vw;
      margin-bottom: 2.5vw;
    }
  }
  @at-root #{&}__promoStatus {
    font: {
      family: $font_roboto;
      style: normal;
      weight: normal;
      size: 18px;
    }
    line-height: 40px;
    letter-spacing: 0.15em;
    color: $black;
    margin-top: 2%;
    @media only screen and (max-width: $breakpoint-phones) {
      margin-top: 0;
    }
  }
}

.countdownElement {
  padding: 2% 1% 2% 1%;

  @at-root #{&}__label {
    color: $black;
    font-family: $font_roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.15em;
    margin-top: 10%;
    @media only screen and (max-width: $breakpoint-phones) {
      font-size: 3.6vw;
      margin-top: 0;
    }
  }
  @at-root #{&}__value {
    color: $white;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-evenly;
    justify-content: center;
  }
}

.digit {
  padding: 10% 1% 10% 1%;
  margin-left: 4%;
  margin-right: 4%;
  background: $black;
  font-family: $font_rozha;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 40px;
  text-align: center;
  flex: 1;
  @media only screen and (max-width: $breakpoint-phones) {
    font-size: 6.6vw;
    padding-top: 0vw;
    padding-bottom: 0vw;
  }
}
</style>
