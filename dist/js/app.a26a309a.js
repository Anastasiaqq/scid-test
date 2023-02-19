(function(){"use strict";var t={5620:function(t,s,i){var e=i(6369),a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("ShopHeader"),s("ShopBody"),s("ShopFooter")],1)},r=[],o=function(){var t=this,s=t._self._c;return s("header",{staticClass:"header"},[s("img",{staticClass:"header__logo",attrs:{src:t.logo,alt:""}}),s("nav",{staticClass:"header__navigation"},[t._l(t.links,(function(i){return s("div",{key:i.id,staticClass:"header__link"},[i.star?s("img",{staticClass:"header__link_star",attrs:{src:t.star,alt:""}}):t._e(),s("a",{staticClass:"header__link_text",attrs:{href:"#"}},[t._v(t._s(i.text))])])})),s("button",{staticClass:"header__call_btn typical-button"},[t._v("Заказать звонок")])],2)])},n=[],c={name:"ShopHeader",props:{msg:String},data(){return{logo:i(4427),star:i(3111),links:[{id:0,text:"кейсы",star:!1},{id:1,text:"бизнесу",star:!0},{id:2,text:"услуги",star:!1},{id:3,text:"контакты",star:!1}]}}},l=c,f=i(1001),u=(0,f.Z)(l,o,n,!1,null,null,null),p=u.exports,g=function(){var t=this,s=t._self._c;return s("main",{staticClass:"main"},[s("section",{staticClass:"main__slider"},[s("VueSlickCarousel",{attrs:{dots:!0,arrows:!1,infinite:!1}},t._l(t.sliderElms,(function(i){return s("div",{staticClass:"main__slider_element",style:{backgroundImage:`url(${i.img})`,display:"flex !important"}},[s("h1",{staticClass:"main__slider_text"},[t._v(" "+t._s(i.text)+" "),s("strong",{staticClass:"strong"},[t._v(t._s(i.strong))])])])})),0)],1),s("Services")],1)},m=[],_=i(286),d=i.n(_),v=function(){var t=this,s=t._self._c;return s("section",{staticClass:"main__services"},[s("h2",{staticClass:"main__header"},[t._v("Наши услуги")]),s("div",{staticClass:"main__itemcontainer"},t._l(t.computedItems,(function(t){return s("ServiceItem",{key:t.id,attrs:{img:t.img,text:t.text}})})),1),s("button",{staticClass:"main__showallbtn typical-button",on:{click:function(s){t.showAll=!t.showAll}}},[t._v(t._s(t.showAll?"Скрыть все услуги":"Все услуги"))])])},h=[],A=(i(7658),function(){var t=this,s=t._self._c;return s("a",{staticClass:"service-item",attrs:{href:"#"}},[s("img",{staticClass:"service-item__image",attrs:{src:t.img,alt:""}}),s("p",{staticClass:"service-item__text"},[t._v(t._s(t.text))])])}),C=[],x={name:"ServiceItem",props:{img:String,text:String}},b=x,w=(0,f.Z)(b,A,C,!1,null,null,null),k=w.exports,y={name:"Services",data(){return{totalItems:[{id:0,img:i(5697),text:"Кадастровые работы в отношении земельных участков"},{id:1,img:i(1345),text:"Кадастровые работы в отношении земельных участков"},{id:2,img:i(1215),text:"Кадастровые работы в отношении земельных участков"},{id:3,img:i(9321),text:"Кадастровые работы в отношении земельных участков"},{id:4,img:i(5215),text:"Кадастровые работы в отношении земельных участков"},{id:5,img:i(7368),text:"Кадастровые работы в отношении земельных участков"},{id:6,img:i(5697),text:"Эта карточка была скрыта"},{id:7,img:i(1345),text:"Эта карточка была скрыта"},{id:8,img:i(1215),text:"Эта карточка была скрыта"},{id:9,img:i(9321),text:"Эта карточка была скрыта"},{id:10,img:i(5215),text:"Эта карточка была скрыта"},{id:11,img:i(7368),text:"Эта карточка была скрыта"}],showAll:!1}},computed:{computedItems(){let t=[];if(this.showAll)return this.totalItems;for(let s of this.totalItems)s.id<6&&t.push(s);return t}},components:{ServiceItem:k}},L=y,S=(0,f.Z)(L,v,h,!1,null,null,null),B=S.exports,Z={name:"ShopBody",data(){return{sliderElms:[{text:"Lorem ipsum dolor sit amet,",strong:"consectetur adipiscing elit",img:i(3948)},{text:"Lorem ipsum dolor sit amet,",strong:"consectetur adipiscing elit",img:i(4711)},{text:"Lorem ipsum dolor sit amet,",strong:"consectetur adipiscing elit",img:i(4275)},{text:"Lorem ipsum dolor sit amet,",strong:"consectetur adipiscing elit",img:i(4721)}],width:1440}},methods:{},components:{VueSlickCarousel:d(),Services:B}},V=Z,X=(0,f.Z)(V,g,m,!1,null,"f51e2c28",null),j=X.exports,G=function(){var t=this,s=t._self._c;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"footer__container"},[t._m(0),s("div",{staticClass:"footer__links"},[s("h2",{staticClass:"footer__header"},[t._v("Для связи")]),s("div",{staticClass:"footer__phone"},[s("div",{staticClass:"footer__iconcont"},[s("img",{staticClass:"footer__icon",attrs:{src:t.whatsapp,alt:""}})]),s("a",{staticClass:"footer__link_tel",attrs:{href:""}},[t._v("7 (926) 126-64-57")])]),s("div",{staticClass:"footer__phone"},[s("div",{staticClass:"footer__iconcont"},[s("img",{staticClass:"footer__icon",attrs:{src:t.mail,alt:""}})]),s("a",{staticClass:"footer__link_tel",attrs:{href:""}},[t._v("7 (926) 126-64-57")])]),s("div",{staticClass:"footer__phone"},[s("div",{staticClass:"footer__iconcont"},[s("img",{staticClass:"footer__icon",attrs:{src:t.telegram,alt:""}})]),s("a",{staticClass:"footer__link_tel",attrs:{href:""}},[t._v("7 (926) 126-64-57")])])]),t._m(1),t._m(2),s("div",{staticClass:"footer__links"},[s("h2",{staticClass:"footer__header"},[t._v("Будьте в курсе")]),s("div",{staticClass:"footer__inputgroup"},[s("input",{staticClass:"footer__input",attrs:{type:"email",placeholder:"E-mail"}}),s("button",{staticClass:"footer__input_btn"},[s("img",{attrs:{src:t.send,alt:""}})])]),s("div",{staticClass:"footer__socialgroup"},[s("a",{staticClass:"footer__iconcont social",attrs:{href:""}},[s("img",{staticClass:"footer__icon",attrs:{src:t.insta,alt:""}})]),s("a",{staticClass:"footer__iconcont social",attrs:{href:""}},[s("img",{staticClass:"footer__icon",attrs:{src:t.vk,alt:""}})]),s("a",{staticClass:"footer__iconcont social",attrs:{href:""}},[s("img",{staticClass:"footer__icon",attrs:{src:t.fb,alt:""}})])])])]),s("p",{staticClass:"footer__copyright"},[t._v("Copyright © 2022 SCID")])])},P=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"footer__image"},[s("div",{staticClass:"rectangle"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"footer__links"},[s("h2",{staticClass:"footer__header"},[t._v("Компания")]),s("a",{staticClass:"footer__link",attrs:{href:""}},[t._v("Услуги")]),s("a",{staticClass:"footer__link",attrs:{href:""}},[t._v("Кейсы")]),s("a",{staticClass:"footer__link",attrs:{href:""}},[t._v("Контакты")]),s("a",{staticClass:"footer__link",attrs:{href:""}},[t._v("Сотрудничество")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"footer__links"},[s("h2",{staticClass:"footer__header"},[t._v("Документы")]),s("a",{staticClass:"footer__link",attrs:{href:""}},[t._v("Политика конфеденциальности")]),s("a",{staticClass:"footer__link",attrs:{href:""}},[t._v("Пользовательское соглашение")])])}],E={name:"ShopFooter",data(){return{whatsapp:i(3881),mail:i(1661),telegram:i(4588),send:i(9459),vk:i(245),insta:i(8433),fb:i(351)}}},z=E,R=(0,f.Z)(z,G,P,!1,null,null,null),I=R.exports,O={name:"App",components:{ShopHeader:p,ShopBody:j,ShopFooter:I}},W=O,K=(0,f.Z)(W,a,r,!1,null,null,null),H=K.exports;e.ZP.config.productionTip=!1,new e.ZP({render:t=>t(H)}).$mount("#app")},351:function(t,s,i){t.exports=i.p+"img/fb.f6196b29.svg"},8433:function(t,s,i){t.exports=i.p+"img/insta.17c424cf.svg"},1661:function(t,s,i){t.exports=i.p+"img/mail.dde859c8.svg"},9459:function(t,s,i){t.exports=i.p+"img/send.dde859c8.svg"},4588:function(t,s,i){t.exports=i.p+"img/telegram.b1be47aa.svg"},245:function(t,s,i){t.exports=i.p+"img/vk.8a887469.svg"},3881:function(t,s,i){t.exports=i.p+"img/whatsapp.d6697094.svg"},3111:function(t,s,i){t.exports=i.p+"img/star.6b58f347.svg"},4427:function(t){t.exports="data:image/png;base64,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"},5697:function(t,s,i){t.exports=i.p+"img/service_img_1.7b477d2a.png"},1345:function(t,s,i){t.exports=i.p+"img/service_img_2.74064e95.png"},1215:function(t,s,i){t.exports=i.p+"img/service_img_3.c30f8d99.png"},9321:function(t,s,i){t.exports=i.p+"img/service_img_4.51fef7f1.png"},5215:function(t,s,i){t.exports=i.p+"img/service_img_5.eb1ce4c0.png"},7368:function(t,s,i){t.exports=i.p+"img/service_img_6.b73dd765.png"},3948:function(t,s,i){t.exports=i.p+"img/slider_img_1.67ff8073.png"},4711:function(t,s,i){t.exports=i.p+"img/slider_img_2.111c4fe8.jpg"},4275:function(t,s,i){t.exports=i.p+"img/slider_img_3.6630f1e5.jpg"},4721:function(t,s,i){t.exports=i.p+"img/slider_img_4.8b43b6a5.jpg"}},s={};function i(e){var a=s[e];if(void 0!==a)return a.exports;var r=s[e]={exports:{}};return t[e].call(r.exports,r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(s,e,a,r){if(!e){var o=1/0;for(f=0;f<t.length;f++){e=t[f][0],a=t[f][1],r=t[f][2];for(var n=!0,c=0;c<e.length;c++)(!1&r||o>=r)&&Object.keys(i.O).every((function(t){return i.O[t](e[c])}))?e.splice(c--,1):(n=!1,r<o&&(o=r));if(n){t.splice(f--,1);var l=a();void 0!==l&&(s=l)}}return s}r=r||0;for(var f=t.length;f>0&&t[f-1][2]>r;f--)t[f]=t[f-1];t[f]=[e,a,r]}}(),function(){i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,{a:s}),s}}(),function(){i.d=function(t,s){for(var e in s)i.o(s,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){i.p="/scid-test/"}(),function(){var t={143:0};i.O.j=function(s){return 0===t[s]};var s=function(s,e){var a,r,o=e[0],n=e[1],c=e[2],l=0;if(o.some((function(s){return 0!==t[s]}))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(c)var f=c(i)}for(s&&s(e);l<o.length;l++)r=o[l],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(f)},e=self["webpackChunkscid_test"]=self["webpackChunkscid_test"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(5620)}));e=i.O(e)})();
//# sourceMappingURL=app.a26a309a.js.map