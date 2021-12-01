<template>
  <div id="nav"><router-link to="/">Landing Page</router-link></div>
  <router-view />
</template>

<script>
export default {
  data: function () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss">
#nav {
  display: none;
}
</style>
