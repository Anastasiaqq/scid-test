<template>
    <main class="main">
        <section class="main__slider">
            <VueSlickCarousel :dots="true" :arrows="false" :infinite="false">
                <div class="main__slider_element" v-for="elm in sliderElms" :style="{backgroundImage: `url(${elm.img})`, display: 'flex !important'}">
                    <h1 class="main__slider_text">
                        {{ elm.text }} <strong class="strong">{{ elm.strong }}</strong>
                    </h1>
                </div>
            </VueSlickCarousel>
        </section>
        <Services />
    </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Services from './Services.vue'

export default {
    name: 'ShopBody',
    data() {
        return {
            sliderElms: [{text: 'Lorem ipsum dolor sit amet,', strong: 'consectetur adipiscing elit', img: require('../assets/images/slider_img_1.png')}, 
                {text: 'Lorem ipsum dolor sit amet,', strong: 'consectetur adipiscing elit', img: require('../assets/images/slider_img_2.jpg')}, 
                {text: 'Lorem ipsum dolor sit amet,', strong: 'consectetur adipiscing elit', img: require('../assets/images/slider_img_3.jpg')}, 
                {text: 'Lorem ipsum dolor sit amet,', strong: 'consectetur adipiscing elit', img: require('../assets/images/slider_img_4.jpg')}
            ],
            width: 1440
        }
    },
    methods: {

    },
    components: {
        VueSlickCarousel,
        Services
    }
}
</script>

<style scoped>
.main__slider >>> .slick-dots {
    bottom: -46px;
}
.main__slider >>> .slick-dots li {
    margin: 0 6px;
}
.main__slider >>> li.slick-active {
    border: 1px solid #00A76B;
    border-radius: 50%;
}
.main__slider >>> .slick-dots button:before {
    top: 2px;
    left: -2px;
    width: 24px;
    height: 20px;
    font-size: 11px;
}
.main__slider >>> .slick-dots li.slick-active button:before {
    color: #00A76B;
}
</style>