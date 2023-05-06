<template>
  <div class="categories">
    <ul>
      <li
          :class="{'active': activeCategory === null}"
          @click="() => setActiveCategory(null)"
      >
        Все
      </li>
      <li
          v-for="(category, i) in categoriesList"
          :class="{'active': activeCategory === i}"
          @click="() => setActiveCategory(i)"
      >
        {{category}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "Categories",
  data() {
    return {
      categoriesList: ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
      activeCategory: null
    }
  },
  methods:{
    ...mapActions({
      getPizzasList: 'catalog/getPizzasList'
    }),
    ...mapMutations({
      setCategory: 'catalog/setCategory'
    }),
    setActiveCategory(value){
      this.activeCategory = value
    }
  },
  watch:{
    activeCategory(){
      this.setCategory(this.activeCategory)
      this.getPizzasList()
    }
  }
}
</script>

<style scoped>

</style>