<template>
  <div class="content">
    <cart-with v-if="totalCount" />
    <cart-empty v-else />
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import CartWith from "@/containers/CartWith";
import CartEmpty from "@/containers/CartEmpty";

export default {
  name: "Cart",
  components: {CartEmpty, CartWith},
  computed: {
    ...mapState({
      cart: state => state.cart.cart,
      totalCount: state => state.cart.totalCount
    }),
  },
}
</script>

<style scoped>

</style>