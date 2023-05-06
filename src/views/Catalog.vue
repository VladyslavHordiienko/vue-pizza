<template>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <categories/>
        <sort/>
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        <div class="pizza-block" v-if="!isLoading" v-for="pizza in pizzas_list" :key="pizza.id">
          <pizza-item :pizza="pizza" />
        </div>
        <div class="pizza-block" v-else v-for="el in pizzasLoadingArray">
          <pizzas-loading/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "@/components/Categories";
import Sort from "@/components/Sort";
import {mapActions, mapState} from "vuex";
import PizzaItem from "@/components/PizzaItem";
import PizzasLoading from "@/components/PizzasLoading";
export default {
  name: "Catalog",
  components: {PizzasLoading, PizzaItem, Sort, Categories},
  data() {
    return {
      pizzasLoadingArray: Array(10).fill(0)
    }
  },
  computed:{
    ...mapState({
      pizzas_list: state =>  state.catalog.pizzas_list,
      isLoading: state => state.catalog.isLoading
    })
  },
  methods:{
    ...mapActions({
      getPizzasList: 'catalog/getPizzasList'
    }),
  },
  created: function (){
    this.getPizzasList()
  }
}
</script>

<style>

</style>