import { Injectable } from '@angular/core';
import { AppItem } from "./AppItem";

@Injectable()
export class AccommodationList {

    public list: AppItem[] = [];

    constructor() {
        this.init();
    }

    init() {

        let accommodationAppItem = new AppItem();

        accommodationAppItem.id = 'A001'
        accommodationAppItem.iosFlag = true
        accommodationAppItem.androidFlag = true
        accommodationAppItem.goodFlag = true
        accommodationAppItem.hotFlag = true
        accommodationAppItem.saveFlag = false
        accommodationAppItem.nameEN = 'Hotels.com'
        accommodationAppItem.nameCN = 'Hotels.com 好订网'
        accommodationAppItem.nameZH = 'Hotels.com'
        accommodationAppItem.logoPic = 'https://vgy.me/PdUDgn.png'
        accommodationAppItem.iosLink = 'https://appsto.re/hk/3of_q.i'
        accommodationAppItem.androiLink = 'com.hcom.android'
        accommodationAppItem.iosPicEN1 = 'https://vgy.me/xxhzp4.jpeg'
        accommodationAppItem.iosPicCN1 = 'https://vgy.me/xqKuYt.jpeg'
        accommodationAppItem.iosPicZH1 = 'https://vgy.me/xqKuYt.jpeg'
        accommodationAppItem.iosPicEN2 = 'https://vgy.me/qzqmqY.jpeg'
        accommodationAppItem.iosPicCN2 = 'https://vgy.me/xqKuYt.jpeg'
        accommodationAppItem.iosPicZH2 = 'https://vgy.me/xqKuYt.jpeg'
        accommodationAppItem.androidPicEN1 = 'https://vgy.me/oVmRsm.png'
        accommodationAppItem.androidPicCN1 = 'https://vgy.me/9GuwX9.png'
        accommodationAppItem.androidPicZH1 = 'https://vgy.me/hPBNO8.png'
        accommodationAppItem.androidPicEN2 = 'https://vgy.me/iYgPcx.png'
        accommodationAppItem.androidPicCN2 = 'https://vgy.me/GWCMsW.png'
        accommodationAppItem.androidPicZH2 = 'https://vgy.me/gbuCv5.png'
        accommodationAppItem.editorWordEN = 'Famous app speaks for itself.'
        accommodationAppItem.editorWordCN = '着名的应用程序，不用多说。'
        accommodationAppItem.editorWordZH = '著名的應用程序，不用多說。'
        accommodationAppItem.descEN = `The Hotels.com app is the simple, fast and secure way to book your perfect hotel.
                                        <br><br>
                                        PLAN<br>
                                        - Get instant savings with access to Secret Prices on our app. These are lower prices that aren’t available to everyone.<br>
                                        - Easily discover your perfect hotels with our in-depth sort and filter options.<br>
                                        - Get exclusive deals for hotels in your area tonight by using our “Tonight’s Local Deals” feature.<br>
                                        - Save all your favorite hotels to easily compare between features and prices.<br>
                                        - Easy-to-use map view to discover all the hotels around you.
                                        <br><br>
                                        BOOK<br>
                                        - Use Apple Pay! Just select Apple Pay as the payment type at checkout.<br>
                                        - Collect 10 nights with us and get 1 free* with Hotels.com® Rewards<br>
                                        - Choose when to pay. Either when you book or when you stay at the hotel.<br>
                                        - Securely store your payment details for fast, easier and safe bookings.<br>
                                        - Save your booking to your Passbook for whenever you need it.
                                        <br><br>
                                        MANAGE<br>
                                        - Sign in once and the app will keep you logged in. This is the fastest and easiest way to search for hotels, view your bookings and collect nights.<br>
                                        - Use Facebook to sign in or register. Create one account for all of your devices with just a touch of a button.<br>
                                        - See your past, current and future hotel bookings, even when you don’t have access to the Internet. <br>
                                        - Call our customer support from within the app 24/7 for help making or managing bookings.
                                        <br><br>
                                        *The maximum value of your free night is the average daily rate of your ten nights. Your free night does not include taxes and fees. Account Summary Balance updates after stay has been completed.
                                        `
        accommodationAppItem.descCN = `你可用 Hotels.com App 简单丶快捷丶安全地预订心水的酒店。
                                        <br><br>
                                        计划<br>
                                        - 即时享受精选酒店的神秘优惠价。非人人可享的优惠价。<br>
                                        - 使用丰富的排序和筛选选项，你可轻易找到心水的酒店。<br>
                                        - 使用「今晚本地优惠」功能获取你所在地的尊享酒店优惠。<br>
                                        - 储存所有心水的酒店，轻松比较它们的设施和价格。<br>
                                        - 简单易用的地图，你可轻松浏览附近的所有酒店。
                                        <br><br>
                                        预订<br>
                                        - 注册 Hotels.com™ Rewards，累积 10 晚，送 1 晚*<br>
                                        - 选择何时付款。可於预订时或於酒店付款。<br>
                                        - 安全地储存你的付款资料，订房更快更安全。<br>
                                        - 将预订储存至 Passbook，随时随地都可查看。
                                        <br><br>
                                        管理<br>
                                        - App 会记住你的登入资料，无须重复登入。这是搜寻酒店丶检视订房及累积晚数最简单快捷的方式。<br>
                                        - 使用 Facebook 登入或注册。一个帐户接通你的所有装置，一按即可。<br>
                                        - 查阅你过去丶现时和未来的订房，即使离线亦可。<br>
                                        - 在 App 内致电我们的客户支援，以获得预订或管理订房方面的协助。`
        accommodationAppItem.descZH = `你可用 Hotels.com App 簡單、快捷、安全地預訂心水的酒店。
                                        <br><br>
                                        計劃<br>
                                        - 即時享受精選酒店的神秘優惠價。非人人可享的優惠價。<br>
                                        - 使用豐富的排序和篩選選項，你可輕易找到心水的酒店。<br>
                                        - 使用「今晚本地優惠」功能獲取你所在地的尊享酒店優惠。<br>
                                        - 儲存所有心水的酒店，輕鬆比較它們的設施和價格。<br>
                                        - 簡單易用的地圖，你可輕鬆瀏覽附近的所有酒店。
                                        <br><br>
                                        預訂<br>
                                        - 註冊 Hotels.com™ Rewards，累積 10 晚，送 1 晚*<br>
                                        - 選擇何時付款。可於預訂時或於酒店付款。<br>
                                        - 安全地儲存你的付款資料，訂房更快更安全。<br>
                                        - 將預訂儲存至 Passbook，隨時隨地都可查看。
                                        <br><br>
                                        管理<br>
                                        - App 會記住你的登入資料，無須重複登入。這是搜尋酒店、檢視訂房及累積晚數最簡單快捷的方式。<br>
                                        - 使用 Facebook 登入或註冊。一個帳戶接通你的所有裝置，一按即可。<br>
                                        - 查閱你過去、現時和未來的訂房，即使離線亦可。<br>
                                        - 在 App 內致電我們的客戶支援，以獲得預訂或管理訂房方面的協助。`
        accommodationAppItem.funFactFlag = false
        accommodationAppItem.funFactPic1 = ''
        accommodationAppItem.funFactPic2 = ''
        accommodationAppItem.funFactDescEN = ''
        accommodationAppItem.funFactDescCN = ''
        accommodationAppItem.funFactDescZH = ''

        this.list.push(accommodationAppItem);
        accommodationAppItem = new AppItem();

        accommodationAppItem.id = 'A002'
        accommodationAppItem.iosFlag = true
        accommodationAppItem.androidFlag = true
        accommodationAppItem.goodFlag = true
        accommodationAppItem.hotFlag = true
        accommodationAppItem.saveFlag = false
        accommodationAppItem.nameEN = 'Agoda'
        accommodationAppItem.nameCN = 'Agoda 安可达'
        accommodationAppItem.nameZH = 'Agoda'
        accommodationAppItem.logoPic = 'https://vgy.me/MSN0pZ.png'
        accommodationAppItem.iosLink = 'https://appsto.re/hk/LidrA.i'
        accommodationAppItem.androiLink = 'com.agoda.mobile.consumer'
        accommodationAppItem.iosPicEN1 = 'https://vgy.me/uiCMDW.jpeg'
        accommodationAppItem.iosPicCN1 = 'https://vgy.me/ggCZKn.jpeg'
        accommodationAppItem.iosPicZH1 = 'https://vgy.me/ggCZKn.jpeg'
        accommodationAppItem.iosPicEN2 = 'https://vgy.me/f30G9e.jpeg'
        accommodationAppItem.iosPicCN2 = 'https://vgy.me/Cy4vBq.jpeg'
        accommodationAppItem.iosPicZH2 = 'https://vgy.me/Cy4vBq.jpeg'
        accommodationAppItem.androidPicEN1 = 'https://vgy.me/S4VPA2.png'
        accommodationAppItem.androidPicCN1 = 'https://vgy.me/o0vS6c.png'
        accommodationAppItem.androidPicZH1 = 'https://vgy.me/YZTPme.png'
        accommodationAppItem.androidPicEN2 = 'https://vgy.me/KOJIQG.png'
        accommodationAppItem.androidPicCN2 = 'https://vgy.me/f8ptXj.png'
        accommodationAppItem.androidPicZH2 = 'https://vgy.me/XjmhDF.png'
        accommodationAppItem.editorWordEN = 'Famous app speaks for itself.'
        accommodationAppItem.editorWordCN = '着名的应用程序，不用多说。'
        accommodationAppItem.editorWordZH = '著名的應用程序，不用多說。'
        accommodationAppItem.descEN = `Even lower prices than our own website! The Agoda app is your best tool for finding and booking the very best deals on any kind of accommodation, anywhere.
                                        <br><br>
                                        - See the deals we can’t show on our website. Agoda’s prices are guaranteed to be the lowest, and they go even lower when you view them on the app.
                                        <br><br>
                                        - Get additional savings of up to 80% from Insider Deals, Last-Minute Deals, Secret Deals, and more.
                                        <br><br>
                                        - Search over 1,150,000+ hotels, villas, BnBs, and every kind of vacation rental in your own language and currency of choice.
                                        <br><br>
                                        - Choose wisely. Agoda’s useful search filters, hi-res photos, map views, local experience information, and 9+ million verified traveler reviews help you find the perfect accommodation for your specific journey and budget.
                                        <br><br>
                                        - Get support. Agoda’s app saves your voucher, details, and maps right on your device for easy check-in and printer-free travel. You can manage or amend your booking anytime, anywhere. And if something goes wrong, Agoda has live agents ready 24/7 in multiple languages to make sure your journey is as smooth as it is cost-efficient.`
        accommodationAppItem.descCN = `用App订房比网站更便宜！订房神器Agoda App让你走到哪订到哪，一指订随时GO，再享超低优惠价！
                                        <br><br>
                                        - 许多网站无法显示的更低优惠，只留有给安装App的内行A咖！
                                        <br><br>
                                        - 低至2折的隐藏版特惠丶晚鸟订房优惠丶A级机密价，太多订房好康，等你来挖掘！
                                        <br><br>
                                        - 超过1,075,000间国内外饭店丶度假村丶别墅丶民宿甚至假日短租套房，通通支援中文订房，还可选择你喜爱的币别付款。
                                        <br><br>
                                        - 智慧快搜心仪住宿！Agoda提供多样化的筛选功能丶高画质住宿实景图片丶地图找房丶周边热门景点资讯以及超过9百万篇住客真心话住宿体验分享，帮你在预算内轻松找好房，放心用力玩！
                                        <br><br>
                                        - 订单管理一指搞定！不用再费心列印入住凭证和住宿地图，手机直接导航你到住宿，开启电子凭证轻松入住，一起省纸环保爱地球。修改订单免烦恼，「我的订单」功能让你点一点就完成订单管理。如果这些都还是无法解决你的需求，别担心，Agoda备有24小时全年无休的中文客服帮你搞定！`
        accommodationAppItem.descZH = `用App訂房比網站更便宜！訂房神器Agoda App讓你走到哪訂到哪，一指訂隨時GO，再享超低優惠價！
                                        <br><br>
                                        - 許多網站無法顯示的更低優惠，只留有給安裝App的內行A咖！
                                        <br><br>
                                        - 低至2折的隱藏版特惠、晚鳥訂房優惠、A級機密價，太多訂房好康，等你來挖掘！
                                        <br><br>
                                        - 超過1,075,000間國內外飯店、度假村、別墅、民宿甚至假日短租套房，通通支援中文訂房，還可選擇你喜愛的幣別付款。
                                        <br><br>
                                        - 智慧快搜心儀住宿！Agoda提供多樣化的篩選功能、高畫質住宿實景圖片、地圖找房、週邊熱門景點資訊以及超過9百萬篇住客真心話住宿體驗分享，幫你在預算內輕鬆找好房，放心用力玩！
                                        <br><br>
                                        - 訂單管理一指搞定！不用再費心列印入住憑證和住宿地圖，手機直接導航你到住宿，開啟電子憑證輕鬆入住，一起省紙環保愛地球。修改訂單免煩惱，「我的訂單」功能讓你點一點就完成訂單管理。如果這些都還是無法解決你的需求，別擔心，Agoda備有24小時全年無休的中文客服幫你搞定！`
        accommodationAppItem.funFactFlag = false
        accommodationAppItem.funFactPic1 = ''
        accommodationAppItem.funFactPic2 = ''
        accommodationAppItem.funFactDescEN = ''
        accommodationAppItem.funFactDescCN = ''
        accommodationAppItem.funFactDescZH = ''

        this.list.push(accommodationAppItem);
        accommodationAppItem = new AppItem();

    }



}