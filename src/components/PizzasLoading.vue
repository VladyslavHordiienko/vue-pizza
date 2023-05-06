<template>
  <content-loader
      className="pizza-block"
      :speed="2"
      width="280px"
      height="460px"
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
    <circle cx="132" cy="142" r="115" />
    <rect x="0" y="273" rx="6" ry="6" width="280px" height="26px" />
    <rect x="0" y="310" rx="6" ry="6" width="280px" height="84px" />
    <rect x="0" y="418" rx="6" ry="6" width="91px" height="31" />
    <rect x="137" y="408" rx="25" ry="25" width="140px" height="46px" />
  </content-loader>
</template>

<script>
import {ContentLoader} from "vue-content-loader"
export default {
  name: "PizzasLoading",
  components:{
    ContentLoader
  }
}
</script>

<style scoped>

</style>