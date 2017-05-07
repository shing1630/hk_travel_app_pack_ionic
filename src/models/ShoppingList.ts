import { Injectable } from '@angular/core';
import { AppItem } from "./AppItem";

@Injectable()
export class ShoppingList {

    public list: AppItem[] = [];

    constructor() {
        this.init();
    }

    init() {

        let shoppingAppItem = new AppItem();

        shoppingAppItem.id = 'S001'
        shoppingAppItem.iosFlag = true
        shoppingAppItem.androidFlag = true
        shoppingAppItem.goodFlag = true
        shoppingAppItem.hotFlag = true
        shoppingAppItem.saveFlag = false
        shoppingAppItem.nameEN = 'Price.com.hk'
        shoppingAppItem.nameCN = 'Price香港格价网'
        shoppingAppItem.nameZH = 'Price香港格價網'
        shoppingAppItem.logoPic = 'https://vgy.me/U2XQ4H.png'
        shoppingAppItem.iosLink = 'https://appsto.re/hk/gqDiB.i'
        shoppingAppItem.androiLink = 'networld.price.app'
        shoppingAppItem.iosPicEN1 = 'https://vgy.me/ER3j4y.jpeg'
        shoppingAppItem.iosPicCN1 = 'https://vgy.me/ER3j4y.jpeg'
        shoppingAppItem.iosPicZH1 = 'https://vgy.me/ER3j4y.jpeg'
        shoppingAppItem.iosPicEN2 = 'https://vgy.me/T1bRv3.jpeg'
        shoppingAppItem.iosPicCN2 = 'https://vgy.me/T1bRv3.jpeg'
        shoppingAppItem.iosPicZH2 = 'https://vgy.me/T1bRv3.jpeg'
        shoppingAppItem.androidPicEN1 = 'https://vgy.me/IAOGLC.png'
        shoppingAppItem.androidPicCN1 = 'https://vgy.me/IAOGLC.png'
        shoppingAppItem.androidPicZH1 = 'https://vgy.me/IAOGLC.png'
        shoppingAppItem.androidPicEN2 = 'https://vgy.me/fCH8F7.png'
        shoppingAppItem.androidPicCN2 = 'https://vgy.me/fCH8F7.png'
        shoppingAppItem.androidPicZH2 = 'https://vgy.me/fCH8F7.png'
        shoppingAppItem.editorWordEN = 'English version is in Beta only but you can have a glance of the average price in Hong Kong.'
        shoppingAppItem.editorWordCN = '提供不同商户产品价格，当你在香港购物时，可用作参考。'
        shoppingAppItem.editorWordZH = '提供不同商戶產品價格，當你在香港購物時，可用作參考。'
        shoppingAppItem.descEN = `Price is the Hong Kong No.1 grid price website, providing a wide range of product information, price and user evaluation, so that smart consumers can have sufficient understanding before buying, and grid to the most price.`
        shoppingAppItem.descCN = `Price为香港No.1格价网站，提供多元化的产品资讯丶价格及用家评价等，让精明的消费者在选购前能有充足的了解，并格至最抵价。
                                    <br><br>
                                    【多元化产品】超过11万件产品，类型包括通讯丶电脑及影音器材丶家庭电器丶婴儿丶美容用品等<br>
                                    【即时联络商户】超过2000间商户为产品报价，用户可即时联络商户查询购物详情<br>
                                    【Price限时购】提供简单丶安全丶快捷的网上购物体验<br>
                                    【网上付款话咁易】支持Apple Pay丶PayPal丶Visa及Master信用卡即时付款<br>
                                    【二手买卖】影张相丶定个价，去旧迎新话咁易`
        shoppingAppItem.descZH = `Price為香港No.1格價網站，提供多元化的產品資訊、價格及用家評價等，讓精明的消費者在選購前能有充足的了解，並格至最抵價。
                                    <br><br>
                                    【多元化產品】超過11萬件產品，類型包括通訊、電腦及影音器材、家庭電器、嬰兒、美容用品等<br>
                                    【即時聯絡商戶】超過2000間商戶為產品報價，用戶可即時聯絡商戶查詢購物詳情<br>
                                    【Price限時購】提供簡單、安全、快捷的網上購物體驗<br>
                                    【網上付款話咁易】支持Apple Pay、PayPal、Visa及Master信用卡即時付款<br>
                                    【二手買賣】影張相、定個價，去舊迎新話咁易`
        shoppingAppItem.funFactFlag = false
        shoppingAppItem.funFactPic1 = ''
        shoppingAppItem.funFactPic2 = ''
        shoppingAppItem.funFactDescEN = ''
        shoppingAppItem.funFactDescCN = ''
        shoppingAppItem.funFactDescZH = ''


        this.list.push(shoppingAppItem);
        shoppingAppItem = new AppItem();

    }



}