<template>
    <a class="service-item" href="#">
        <img class="service-item__image" :src="img" alt="">
        <p class="service-item__text">{{ text }}</p>
    </a>
</template>
<script>
export default {
    name: 'ServiceItem',
    props: {
        img: String,
        text: String
    }
}
</script>