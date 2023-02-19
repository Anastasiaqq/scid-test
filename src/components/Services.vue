<template>
    <section class="main__services">
        <h2 class="main__header">Наши услуги</h2>
        <div class="main__itemcontainer" >
            <ServiceItem v-for="item in computedItems" :key="item.id" :img="item.img" :text="item.text" />
        </div>
        <button class="main__showallbtn typical-button" @click="showAll = !showAll">{{showAll ? 'Скрыть все услуги' : 'Все услуги'}}</button>
    </section>
</template>

<script>
import ServiceItem from './ServiceItem.vue'
export default {
    name: 'Services',
    data() {
        return {
            totalItems: [
                {id: 0, img: require('../assets/images/service_img_1.png'), text: 'Кадастровые работы в отношении земельных участков'},
                {id: 1, img: require('../assets/images/service_img_2.png'), text: 'Кадастровые работы в отношении земельных участков'},
                {id: 2, img: require('../assets/images/service_img_3.png'), text: 'Кадастровые работы в отношении земельных участков'},
                {id: 3, img: require('../assets/images/service_img_4.png'), text: 'Кадастровые работы в отношении земельных участков'},
                {id: 4, img: require('../assets/images/service_img_5.png'), text: 'Кадастровые работы в отношении земельных участков'},
                {id: 5, img: require('../assets/images/service_img_6.png'), text: 'Кадастровые работы в отношении земельных участков'},
                {id: 6, img: require('../assets/images/service_img_1.png'), text: 'Эта карточка была скрыта'},
                {id: 7, img: require('../assets/images/service_img_2.png'), text: 'Эта карточка была скрыта'},
                {id: 8, img: require('../assets/images/service_img_3.png'), text: 'Эта карточка была скрыта'},
                {id: 9, img: require('../assets/images/service_img_4.png'), text: 'Эта карточка была скрыта'},
                {id: 10, img: require('../assets/images/service_img_5.png'), text: 'Эта карточка была скрыта'},
                {id: 11, img: require('../assets/images/service_img_6.png'), text: 'Эта карточка была скрыта'},
            ],
            showAll: false
        }
    },
    computed: {
        computedItems() {
            let array = [];
            if(this.showAll) return this.totalItems
            else {
                for(let item of this.totalItems) {
                    if(item.id<6) array.push(item)
                }
                return array
            }
        }
    },
    components: {
        ServiceItem
    }
}
</script>