<template>
  <div class="container container--cart">
    <div class="cart cart--empty">
      <h2>Корзина пустая
        <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br/>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src="@/assets/img/empty-cart.png" alt="Empty cart"/>
      <router-link to="/" class="button button--black">
        <span>Вернуться назад</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartEmpty"
}
</script>

<style scoped>

</style>