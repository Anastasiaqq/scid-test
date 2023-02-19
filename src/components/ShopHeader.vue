<template>
  <header class="header">
    <img :src="logo" alt="" class="header__logo">
    <nav class="header__navigation">
      <div class="header__link" v-for="link of links" :key="link.id">
        <img v-if="link.star" class="header__link_star" :src="star" alt="">
        <a class="header__link_text" href="#">{{ link.text }}</a>
      </div>
      <button class="header__call_btn typical-button">Заказать звонок</button>
    </nav>
  </header>
</template>

<script>


export default {
  name: "ShopHeader",
  props: {
    msg: String,
  },
  data() {
    return{
      logo: require('../assets/images/logo.png'),
      star: require('../assets/images/star.svg'),
      links: [{id: 0, text: 'кейсы', star: false},
        {id: 1, text: 'бизнесу', star: true},
        {id: 2, text: 'услуги', star: false},
        {id: 3, text: 'контакты', star: false}]
    }
  },
};
</script>