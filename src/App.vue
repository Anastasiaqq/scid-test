<template>
  <div id="app">
    <ShopHeader />
    <ShopBody />
    <ShopFooter />
  </div>
</template>

<script>
import ShopHeader from "./components/ShopHeader.vue";
import ShopBody from "./components/ShopBody.vue";
import ShopFooter from './components/ShopFooter.vue';

export default {
  name: "App",
  components: {
    ShopHeader,
    ShopBody,
    ShopFooter
  },
};
</script>
