<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__image">
                <div class="rectangle"></div>
            </div>
            <div class="footer__links">
                <h2 class="footer__header">Для связи</h2>
                <div class="footer__phone">
                    <div class="footer__iconcont"><img class="footer__icon" :src="whatsapp" alt=""></div>
                    <a href="" class="footer__link_tel">7 (926) 126-64-57</a>
                </div>
                <div class="footer__phone">
                    <div class="footer__iconcont"><img class="footer__icon" :src="mail" alt=""></div>
                    <a href="" class="footer__link_tel">7 (926) 126-64-57</a>
                </div>
                <div class="footer__phone">
                    <div class="footer__iconcont"><img class="footer__icon" :src="telegram" alt=""></div>
                    <a href="" class="footer__link_tel">7 (926) 126-64-57</a>
                </div>
            </div>
            <div class="footer__links">
                <h2 class="footer__header">Компания</h2>
                <a href="" class="footer__link">Услуги</a>
                <a href="" class="footer__link">Кейсы</a>
                <a href="" class="footer__link">Контакты</a>
                <a href="" class="footer__link">Сотрудничество</a>
            </div>
            <div class="footer__links">
                <h2 class="footer__header">Документы</h2>
                <a href="" class="footer__link">Политика конфеденциальности</a>
                <a href="" class="footer__link">Пользовательское соглашение</a>
            </div>
            <div class="footer__links">
                <h2 class="footer__header">Будьте в курсе</h2>
                <div class="footer__inputgroup">
                    <input class="footer__input" type="email" placeholder="E-mail">
                    <button class="footer__input_btn"><img :src="send" alt=""></button>
                </div>
                <div class="footer__socialgroup">
                    <a class="footer__iconcont social" href=""><img class="footer__icon" :src="insta" alt=""></a>
                    <a class="footer__iconcont social" href=""><img class="footer__icon" :src="vk" alt=""></a>
                    <a class="footer__iconcont social" href=""><img class="footer__icon" :src="fb" alt=""></a>
                </div>
            </div>
        </div>
        <p class="footer__copyright">Copyright © 2022 SCID</p>
    </footer>
</template>
<script>
export default {
    name: 'ShopFooter',
    data() {
        return {
            whatsapp: require('../assets/icons/whatsapp.svg'),
            mail: require('../assets/icons/mail.svg'),
            telegram: require('../assets/icons/telegram.svg'),
            send: require('../assets/icons/send.svg'),
            vk: require('../assets/icons/vk.svg'),
            insta: require('../assets/icons/insta.svg'),
            fb: require('../assets/icons/fb.svg')
        }
    }
}
</script>