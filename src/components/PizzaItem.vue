<template>
  <div>
    <img
        class="pizza-block__image"
        :src=pizza.imageUrl
        alt="Pizza"
    />
    <h4 class="pizza-block__title">{{ pizza.name }}</h4>
    <div class="pizza-block__selector">
      <ul>
        <li
            :class="{
              active: activeType === i,
              disabled: !pizza.types.includes(i)
            }"
            v-for="(type, i) in pizzaTypes"
            :key="type"
            @click="() => setActiveType(i)"
        >
          {{ type }}
        </li>
      </ul>
      <ul>
        <li
            :class="{
              active: activeSize === size,
              disabled: !pizza.sizes.includes(size)
            }"
            v-for="(size) in pizzaSizes"
            :key="size"
            @click="() => setActiveSize(size)"
        >
          {{ size }} см.
        </li>
      </ul>
    </div>
    <div class="pizza-block__bottom">
      <div class="pizza-block__price">от {{ pizza.price }} ₽</div>
      <div class="button button--outline button--add" @click="onAddPizzaClick(pizza)">
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
          />
        </svg>
        <span>Добавить</span>
        <i>{{cart[pizza.id] ? cart[pizza.id].pizzaGroup.length : 0}}</i>
      </div>
    </div>
  </div>
</template>

<script>

import {mapMutations, mapState} from "vuex";

export default {
  name: "PizzaItem",
  props: {
    pizza: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pizzaTypes: [
        "тонкое",
        "традиционное"
      ],
      activeType: this.pizza.types[0],
      pizzaSizes: [26, 30 ,40],
      activeSize: this.pizza.sizes[0],
    }
  },
  computed:{
    ...mapState({
      cart: state => state.cart.cart
    })
  },
  methods: {
    ...mapMutations({
      addPizzaToCart: 'cart/addPizzaToCart'
    }),
    setActiveType(index){
      this.activeType = index
    },
    setActiveSize(size){
      this.activeSize = size
    },
    onAddPizzaClick(pizza){
      const pizzaToCart = {
        id: pizza.id,
        name: pizza.name,
        imageUrl: pizza.imageUrl,
        price: pizza.price,
        size: this.activeSize,
        type: this.pizzaTypes[this.activeType]
      }
      this.addPizzaToCart(pizzaToCart)
    },
  },
}
</script>

<style scoped>

</style>