import { Injectable } from '@angular/core';
import { AppItem } from "./AppItem";

@Injectable()
export class UtilityList {

    public list: AppItem[] = [];

    constructor() {
        this.init();
    }

    init() {

        let utilityAppItem = new AppItem();

        utilityAppItem.id = 'U001'
        utilityAppItem.iosFlag = true
        utilityAppItem.androidFlag = true
        utilityAppItem.goodFlag = true
        utilityAppItem.hotFlag = true
        utilityAppItem.saveFlag = false
        utilityAppItem.nameEN = 'My Hong Kong Guide'
        utilityAppItem.nameCN = '香港•我的智游行程'
        utilityAppItem.nameZH = '香港•我的智游行程'
        utilityAppItem.logoPic = 'https://vgy.me/b9RjZb.png'
        utilityAppItem.iosLink = 'https://appsto.re/hk/mUZmW.i'
        utilityAppItem.androiLink = 'com.DiscoverHongKong.MyHKGuide'
        utilityAppItem.iosPicEN1 = 'https://vgy.me/aGjqkE.jpeg'
        utilityAppItem.iosPicCN1 = 'https://vgy.me/373xem.jpeg'
        utilityAppItem.iosPicZH1 = 'https://vgy.me/373xem.jpeg'
        utilityAppItem.iosPicEN2 = 'https://vgy.me/OE18Hq.jpeg'
        utilityAppItem.iosPicCN2 = 'https://vgy.me/xVTEgR.jpeg'
        utilityAppItem.iosPicZH2 = 'https://vgy.me/xVTEgR.jpeg'
        utilityAppItem.androidPicEN1 = 'https://vgy.me/rPSH3r.png'
        utilityAppItem.androidPicCN1 = 'https://vgy.me/MPnogr.png'
        utilityAppItem.androidPicZH1 = 'https://vgy.me/twm3hR.png'
        utilityAppItem.androidPicEN2 = 'https://vgy.me/I5gxoL.png'
        utilityAppItem.androidPicCN2 = 'https://vgy.me/RrrUxI.png'
        utilityAppItem.androidPicZH2 = 'https://vgy.me/U6PWyF.png'
        utilityAppItem.editorWordEN = 'Offical Hong Kong Tourism Board app. Showcase of attractions, restaurants and shops. You can plan your trip in the app too.'
        utilityAppItem.editorWordCN = '香港官方旅游局应用程式展示景点，餐馆和商店。您也可以在应用程式中规划您的行程。'
        utilityAppItem.editorWordZH = '香港官方旅遊局應用程式展示景點，餐館和商店。您也可以在應用程式中規劃您的行程。'
        utilityAppItem.descEN = `The all-in-one trip-planner <br>
                                    Ditch that heavy tome and replace it with My Hong Kong Guide, a virtual guide to one of the world’s most exciting destinations. Why? Because it will allow you to:
                                    <br><br>
                                    Make a guide that’s yours<br>
                                    You get to make the Hong Kong guide you want with thousands of attractions, restaurants and shops in Hong Kong to pick from. 
                                    <br><br>
                                    Browse e-coupons <br>
                                    Explore a world of offers at your fingertips. Download and enjoy instant treats including dining vouchers, attractions discounts, limited edition gifts and more.
                                    <br><br>
                                    Travel light <br>
                                    Access, update and edit your resources online from your mobile or PC, anytime, anywhere. 
                                    <br><br>
                                    And …
                                    <br><br>
                                    Discover Hong Kong Tourist SIM card: Get the most out of My Hong Kong Guide (and your phone) with this card, which includes mobile data and discounted international calls.`
        utilityAppItem.descCN = `「香港·我的智游行程」，您的全方位旅游指南！有了它，您可以：
                                    <br><br>
                                    订做您的私旅行<br>
                                    从千多个景点丶美食及购物热点中挑选您喜爱的，参考其他旅游达人的推荐，规划您独一无二的行程。
                                    <br><br>
                                    乐享好康<br>
                                    下载电子优惠券，尽享美食丶购物及住宿优惠。
                                    <br><br>
                                    轻松出游<br>
                                    随时随地丶随意随兴，用您的电脑或手机新增丶编排或更改行程。
                                    <br><br>
                                    更多……<br>
                                    香港任纵横储值卡：到香港旅游，您还可以配合预付卡使用这个app，享用通话及行动上网服务。`
        utilityAppItem.descZH = `「香港‧我的智遊行程」，您的全方位旅遊指南！有了它，您可以：
                                    <br><br>
                                    訂做您的私旅行<br>
                                    從千多個景點、美食及購物熱點中挑選您喜愛的，參考其他旅遊達人的推薦，規劃您獨一無二的行程。
                                    <br><br>
                                    樂享好康<br>
                                    下載電子優惠券，盡享美食、購物及住宿優惠。
                                    <br><br>
                                    輕鬆出遊<br>
                                    隨時隨地、隨意隨興，用您的電腦或手機新增、編排或更改行程。
                                    <br><br>
                                    更多……<br>
                                    香港任縱橫儲值卡：到香港旅遊，您還可以配合預付卡使用這個app，享用通話及行動上網服務。`
        utilityAppItem.funFactFlag = false
        utilityAppItem.funFactPic1 = ''
        utilityAppItem.funFactPic2 = ''
        utilityAppItem.funFactDescEN = ''
        utilityAppItem.funFactDescCN = ''
        utilityAppItem.funFactDescZH = ''

        this.list.push(utilityAppItem);
        utilityAppItem = new AppItem();

        utilityAppItem.id = 'U002'
        utilityAppItem.iosFlag = true
        utilityAppItem.androidFlag = true
        utilityAppItem.goodFlag = true
        utilityAppItem.hotFlag = true
        utilityAppItem.saveFlag = false
        utilityAppItem.nameEN = 'Toilet Rush'
        utilityAppItem.nameCN = 'Toilet Rush 冲厕'
        utilityAppItem.nameZH = 'Toilet Rush 衝廁'
        utilityAppItem.logoPic = 'https://vgy.me/9KsKJT.png'
        utilityAppItem.iosLink = 'https://appsto.re/hk/mbuHs.i'
        utilityAppItem.androiLink = 'com.nuthon.toiletrush'
        utilityAppItem.iosPicEN1 = 'https://vgy.me/0SCaFf.jpeg'
        utilityAppItem.iosPicCN1 = 'https://vgy.me/yXRbyp.jpeg'
        utilityAppItem.iosPicZH1 = 'https://vgy.me/yXRbyp.jpeg'
        utilityAppItem.iosPicEN2 = 'https://vgy.me/DpdLKc.jpeg'
        utilityAppItem.iosPicCN2 = 'https://vgy.me/jUsefE.jpeg'
        utilityAppItem.iosPicZH2 = 'https://vgy.me/jUsefE.jpeg'
        utilityAppItem.androidPicEN1 = 'https://vgy.me/690suU.png'
        utilityAppItem.androidPicCN1 = 'https://vgy.me/6MFf8r.png'
        utilityAppItem.androidPicZH1 = 'https://vgy.me/drPMNy.png'
        utilityAppItem.androidPicEN2 = 'https://vgy.me/gVCCHN.png'
        utilityAppItem.androidPicCN2 = 'https://vgy.me/p81R4s.png'
        utilityAppItem.androidPicZH2 = 'https://vgy.me/qFtFnV.png'
        utilityAppItem.editorWordEN = 'Large data set of toilet. User friendly interface.'
        utilityAppItem.editorWordCN = '齐全的厕所数据。好的用户界面。'
        utilityAppItem.editorWordZH = '齊全的廁所數據。好的用戶界面。'
        utilityAppItem.descEN = `Toilet Rush is the ultimate toilet guide for Hong Kong. No matter you are a local or tourist, Toilet Rush can always let you know toilets nearby!
                                <br><br>
                                Functionality includes:<br>
                                - Find toilets with no restrictions, completely free and within walking distance!<br>
                                - Advanced search on district and toilet facilities!<br>
                                - Found a toilet not being listed? Let us know by submitting the toilet information to us via the App!<br>
                                - View ratings of toilets before you decide which one to go, and submit a comment if you think it's too nasty!<br>
                                <br><br>
                                Note:<br>
                                - Although the app supports offline mode, it will require internet connection upon your first launch. Roaming data-charge may occur if you are a tourist using mobile internet. So it's recommended to use Wi-Fi whenever possible.<br>
                                - This app only shows toilets within Hong Kong.`
        utilityAppItem.descCN = `人有三急，身处闹巿却找不到厕所（洗手间）？Toilet Rush (冲厕) 是全港唯一的手机流动厕所指南。只要开启本软件，所在地附近的厕所资料立即一目了然！
                                <br><br>
                                软件功能包括：<br>
                                - 寻找所有可供公众使用丶免费而且於步行距离内的厕所资料！<br>
                                - 害怕没有厕纸？利用进阶搜寻功能，确保厕所有您想要的配套设施！<br>
                                - 上载还没有被列出的新厕所，你的分享可以使其他人受惠！<br>
                                - 乾净舒适的厕所很重要，所以在选择想去的厕所前可以先观看其他人的评分及留言（别忘了如厕後也提交您的留言哦）！<br>
                                <br><br>
                                注意：<br>
                                - 虽然本应用程式支援离线模式，但在首次启动时将需要网络连线以下载厕所资料。我们建议使用 Wi-Fi 连线，以确保（可能是游客的您）不会因手机漫游而被收取任何额外费用。<br>
                                - 本应用程式只提供香港境内的厕所资料。`
        utilityAppItem.descZH = `人有三急，身處鬧巿卻找不到廁所（洗手間）？Toilet Rush (衝廁) 是全港唯一的手機流動廁所指南。只要開啟本軟件，所在地附近的廁所資料立即一目了然！
                                <br><br>
                                軟件功能包括：<br>
                                - 尋找所有可供公眾使用、免費而且於步行距離內的廁所資料！<br>
                                - 害怕沒有廁紙？利用進階搜尋功能，確保廁所有您想要的配套設施！<br>
                                - 上載還沒有被列出的新廁所，你的分享可以使其他人受惠！<br>
                                - 乾淨舒適的廁所很重要，所以在選擇想去的廁所前可以先觀看其他人的評分及留言（別忘了如廁後也提交您的留言哦）！<br>
                                <br><br>
                                注意：<br>
                                - 雖然本應用程式支援離線模式，但在首次啟動時將需要網絡連線以下載廁所資料。我們建議使用 Wi-Fi 連線，以確保（可能是遊客的您）不會因手機漫遊而被收取任何額外費用。<br>
                                - 本應用程式只提供香港境內的廁所資料。`
        utilityAppItem.funFactFlag = false
        utilityAppItem.funFactPic1 = ''
        utilityAppItem.funFactPic2 = ''
        utilityAppItem.funFactDescEN = ''
        utilityAppItem.funFactDescCN = ''
        utilityAppItem.funFactDescZH = ''

        this.list.push(utilityAppItem);
        utilityAppItem = new AppItem();

        utilityAppItem.id = 'U003'
        utilityAppItem.iosFlag = true
        utilityAppItem.androidFlag = true
        utilityAppItem.goodFlag = false
        utilityAppItem.hotFlag = false
        utilityAppItem.saveFlag = false
        utilityAppItem.nameEN = 'Hong Kong Public Toilets'
        utilityAppItem.nameCN = '香港公厕'
        utilityAppItem.nameZH = '香港公廁'
        utilityAppItem.logoPic = 'https://vgy.me/ZYw74Q.png'
        utilityAppItem.iosLink = 'https://appsto.re/hk/Omq71.i'
        utilityAppItem.androiLink = 'com.techmaxapp.hkpublictoilet'
        utilityAppItem.iosPicEN1 = 'https://vgy.me/VowqG0.jpeg'
        utilityAppItem.iosPicCN1 = 'https://vgy.me/V6XAi3.jpeg'
        utilityAppItem.iosPicZH1 = 'https://vgy.me/V6XAi3.jpeg'
        utilityAppItem.iosPicEN2 = 'https://vgy.me/3vu0A5.jpeg'
        utilityAppItem.iosPicCN2 = 'https://vgy.me/rS611v.jpeg'
        utilityAppItem.iosPicZH2 = 'https://vgy.me/rS611v.jpeg'
        utilityAppItem.androidPicEN1 = 'https://vgy.me/Wbhtg3.png'
        utilityAppItem.androidPicCN1 = 'https://vgy.me/Wbhtg3.png'
        utilityAppItem.androidPicZH1 = 'https://vgy.me/Wbhtg3.png'
        utilityAppItem.androidPicEN2 = 'https://vgy.me/UISFQT.png'
        utilityAppItem.androidPicCN2 = 'https://vgy.me/UISFQT.png'
        utilityAppItem.androidPicZH2 = 'https://vgy.me/UISFQT.png'
        utilityAppItem.editorWordEN = 'Only show the public toilets.'
        utilityAppItem.editorWordCN = '只显示公厕'
        utilityAppItem.editorWordZH = '只顯示公廁'
        utilityAppItem.descEN = `This app helps you find public toilets in Hong Kong<br>
                                - Works Offline, which suitable for travellers <br>
                                - Support GPS <br>
                                - Support street view`
        utilityAppItem.descCN = `香港公厕 - 帮你找香港公厕
                                <br><br>
                                - 支持离线模式, 适合旅行者<br>
                                - 支持GPS<br>
                                - 支持街景视图<br>
                                <br><br>
                                香港有成千上万的公厕，所以没有藉口街头撒尿。`
        utilityAppItem.descZH = `香港公廁 - 幫你找香港公廁
                                <br><br>
                                - 支持離線模式, 適合旅行者<br>
                                - 支持GPS<br>
                                - 支持街景視圖<br>
                                <br><br>
                                香港有成千上萬的公廁，所以沒有藉口街頭撒尿。`
        utilityAppItem.funFactFlag = false
        utilityAppItem.funFactPic1 = ''
        utilityAppItem.funFactPic2 = ''
        utilityAppItem.funFactDescEN = ''
        utilityAppItem.funFactDescCN = ''
        utilityAppItem.funFactDescZH = ''

        this.list.push(utilityAppItem);
        utilityAppItem = new AppItem();

        utilityAppItem.id = 'U004'
        utilityAppItem.iosFlag = true
        utilityAppItem.androidFlag = true
        utilityAppItem.goodFlag = true
        utilityAppItem.hotFlag = true
        utilityAppItem.saveFlag = false
        utilityAppItem.nameEN = 'Wi-Fi.HK'
        utilityAppItem.nameCN = 'Wi-Fi.HK'
        utilityAppItem.nameZH = 'Wi-Fi.HK'
        utilityAppItem.logoPic = 'https://vgy.me/sxJXML.png'
        utilityAppItem.iosLink = 'https://appsto.re/hk/3NQL1.i'
        utilityAppItem.androiLink = 'org.wtia.wifihk'
        utilityAppItem.iosPicEN1 = 'https://vgy.me/FZP66F.jpeg'
        utilityAppItem.iosPicCN1 = 'https://vgy.me/qXpaML.jpeg'
        utilityAppItem.iosPicZH1 = 'https://vgy.me/qXpaML.jpeg'
        utilityAppItem.iosPicEN2 = 'https://vgy.me/9DG4Yq.jpeg'
        utilityAppItem.iosPicCN2 = 'https://vgy.me/02W4dk.jpeg'
        utilityAppItem.iosPicZH2 = 'https://vgy.me/02W4dk.jpeg'
        utilityAppItem.androidPicEN1 = 'https://vgy.me/lWcCX6.png'
        utilityAppItem.androidPicCN1 = 'https://vgy.me/Mqv47X.png'
        utilityAppItem.androidPicZH1 = 'https://vgy.me/LcH7L8.png'
        utilityAppItem.androidPicEN2 = 'https://vgy.me/eYmGby.png'
        utilityAppItem.androidPicCN2 = 'https://vgy.me/WPT903.png'
        utilityAppItem.androidPicZH2 = 'https://vgy.me/FPzG17.png'
        utilityAppItem.editorWordEN = 'Easy to use and great data set.'
        utilityAppItem.editorWordCN = '易於使用和齐全的数据'
        utilityAppItem.editorWordZH = '易於使用和齊全的數據'
        utilityAppItem.descEN = `“Wi-Fi.HK” mobile app facilitates the public and visitors to find the “Wi-Fi.HK” hotspots in Hong Kong which are offered by the participating organisations from the public and private sectors completely free of charge or time-limited free of charge.`
        utilityAppItem.descCN = `「Wi-Fi.HK」流动应用程式是一个方便市民及访客搜寻在香港由参与计划的公私营机构所提供的完全免费或设有免费使用时段的「Wi-Fi.HK」热点位置。`
        utilityAppItem.descZH = `「Wi-Fi.HK」流動應用程式是一個方便市民及訪客搜尋在香港由參與計劃的公私營機構所提供的完全免費或設有免費使用時段的「Wi-Fi.HK」熱點位置。`
        utilityAppItem.funFactFlag = false
        utilityAppItem.funFactPic1 = ''
        utilityAppItem.funFactPic2 = ''
        utilityAppItem.funFactDescEN = ''
        utilityAppItem.funFactDescCN = ''
        utilityAppItem.funFactDescZH = ''

        this.list.push(utilityAppItem);
        utilityAppItem = new AppItem();

        utilityAppItem.id = 'U005'
        utilityAppItem.iosFlag = true
        utilityAppItem.androidFlag = true
        utilityAppItem.goodFlag = false
        utilityAppItem.hotFlag = false
        utilityAppItem.saveFlag = false
        utilityAppItem.nameEN = 'HK GovWiFi'
        utilityAppItem.nameCN = '香港政府WiFi通'
        utilityAppItem.nameZH = '香港政府WiFi通'
        utilityAppItem.logoPic = 'https://vgy.me/HilGRG.png'
        utilityAppItem.iosLink = 'https://appsto.re/hk/hEBT3.i'
        utilityAppItem.androiLink = 'com.fourdirections.govwifi'
        utilityAppItem.iosPicEN1 = 'https://vgy.me/qrHeQp.png'
        utilityAppItem.iosPicCN1 = 'https://vgy.me/bWUa5V.png'
        utilityAppItem.iosPicZH1 = 'https://vgy.me/HWZkDj.png'
        utilityAppItem.iosPicEN2 = 'https://vgy.me/ovr6jZ.png'
        utilityAppItem.iosPicCN2 = 'https://vgy.me/YlGYh2.png'
        utilityAppItem.iosPicZH2 = 'https://vgy.me/oR9N4B.png'
        utilityAppItem.androidPicEN1 = 'https://vgy.me/qrHeQp.png'
        utilityAppItem.androidPicCN1 = 'https://vgy.me/bWUa5V.png'
        utilityAppItem.androidPicZH1 = 'https://vgy.me/HWZkDj.png'
        utilityAppItem.androidPicEN2 = 'https://vgy.me/ovr6jZ.png'
        utilityAppItem.androidPicCN2 = 'https://vgy.me/YlGYh2.png'
        utilityAppItem.androidPicZH2 = 'https://vgy.me/oR9N4B.png'
        utilityAppItem.editorWordEN = 'Showcase of government free wifi but the connnection is slow.'
        utilityAppItem.editorWordCN = '展示政府免费的WiFi，但连接速度很慢。'
        utilityAppItem.editorWordZH = '展示政府免費的WiFi，但連接速度很慢。'
        utilityAppItem.descEN = `HK GovWiFi mobile app facilitates citizens and visitors in using the GovWiFi service`
        utilityAppItem.descCN = `香港政府WiFi通流动应用程式方便市民及游客使用「WiFi通」服务。`
        utilityAppItem.descZH = `香港政府WiFi通流動應用程式方便市民及遊客使用「WiFi通」服務。`
        utilityAppItem.funFactFlag = false
        utilityAppItem.funFactPic1 = ''
        utilityAppItem.funFactPic2 = ''
        utilityAppItem.funFactDescEN = ''
        utilityAppItem.funFactDescCN = ''
        utilityAppItem.funFactDescZH = ''


        this.list.push(utilityAppItem);
        utilityAppItem = new AppItem();

        utilityAppItem.id = 'U006'
        utilityAppItem.iosFlag = true
        utilityAppItem.androidFlag = true
        utilityAppItem.goodFlag = true
        utilityAppItem.hotFlag = false
        utilityAppItem.saveFlag = false
        utilityAppItem.nameEN = 'HK Post'
        utilityAppItem.nameCN = '香港邮政'
        utilityAppItem.nameZH = '香港郵政'
        utilityAppItem.logoPic = 'https://vgy.me/yohVZM.png'
        utilityAppItem.iosLink = 'https://appsto.re/hk/Na7tA.i'
        utilityAppItem.androiLink = 'com.hkpost.android'
        utilityAppItem.iosPicEN1 = 'https://vgy.me/83B0Br.jpeg'
        utilityAppItem.iosPicCN1 = 'https://vgy.me/83B0Br.jpeg'
        utilityAppItem.iosPicZH1 = 'https://vgy.me/83B0Br.jpeg'
        utilityAppItem.iosPicEN2 = 'https://vgy.me/KHG6dc.jpeg'
        utilityAppItem.iosPicCN2 = 'https://vgy.me/KHG6dc.jpeg'
        utilityAppItem.iosPicZH2 = 'https://vgy.me/KHG6dc.jpeg'
        utilityAppItem.androidPicEN1 = 'https://vgy.me/f1qfA8.png'
        utilityAppItem.androidPicCN1 = 'https://vgy.me/f1qfA8.png'
        utilityAppItem.androidPicZH1 = 'https://vgy.me/f1qfA8.png'
        utilityAppItem.androidPicEN2 = 'https://vgy.me/E3zpnd.png'
        utilityAppItem.androidPicCN2 = 'https://vgy.me/E3zpnd.png'
        utilityAppItem.androidPicZH2 = 'https://vgy.me/E3zpnd.png'
        utilityAppItem.editorWordEN = 'Calculate postage and find your nearest post offices and street posting boxes.'
        utilityAppItem.editorWordCN = '计算邮费和搜寻附近的邮政局及邮箱。'
        utilityAppItem.editorWordZH = '計算郵費和搜尋附近的郵政局及郵箱。'
        utilityAppItem.descEN = `This mobile application is produced by the Hongkong Post. It gives you an instant, on-the-go access to the postal information of Hong Kong.
                                <br><br>
                                You can enjoy the following services …<br>
                                - Promptly access tracking history of your mailing items with just a click of a button<br>
                                - Advise others of the delivery status of your mail items by SMS or email<br>
                                - Calculate postage of any item from a postcard to a parcel while you are on the move<br>
                                - Find your nearest post offices and street posting boxes<br>
                                - View the latest notices or press releases of the Hongkong Post in one click<br>
                                - Keep you abreast of the latest promotion offers at the Hongkong Post<br>
                                - Find and check the correct presentation of Hong Kong local address and save it into the mobile app`
        utilityAppItem.descCN = `此应用程式由香港邮政制作,让你透过手机随时随地查询邮政服务的详细资料。
                                <br><br>
                                你可以…<br>
                                - 迅时查询及追踪邮件的派递详情<br>
                                - 可透过短讯或电邮将邮件的最新派递情况通知你的客户<br>
                                - 计算邮费及比较各种邮递服务，协助你选择最合适的邮递方法<br>
                                - 搜寻附近的邮政局及邮箱，提供相关邮局及邮箱的详细资料，例如地址丶办公时间丶提供的邮递服务和信件最後收集时间等等<br>
                                - 即时查阅香港邮政的最新通告及新闻公报<br>
                                - 第一时间取得香港邮政的最新推广活动，不会错失任何优惠机会<br>
                                - 搜寻本地地址的正确书写格式及将邮寄地址储存在手机应用程式内`
        utilityAppItem.descZH = `此應用程式由香港郵政製作,讓你透過手機隨時隨地查詢郵政服務的詳細資料。
                                <br><br>
                                你可以…<br>
                                - 迅時查詢及追蹤郵件的派遞詳情<br>
                                - 可透過短訊或電郵將郵件的最新派遞情況通知你的客戶<br>
                                - 計算郵費及比較各種郵遞服務，協助你選擇最合適的郵遞方法<br>
                                - 搜尋附近的郵政局及郵箱，提供相關郵局及郵箱的詳細資料，例如地址、辦公時間、提供的郵遞服務和信件最後收集時間等等<br>
                                - 即時查閱香港郵政的最新通告及新聞公報<br>
                                - 第一時間取得香港郵政的最新推廣活動，不會錯失任何優惠機會<br>
                                - 搜尋本地地址的正確書寫格式及將郵寄地址儲存在手機應用程式內`
        utilityAppItem.funFactFlag = false
        utilityAppItem.funFactPic1 = ''
        utilityAppItem.funFactPic2 = ''
        utilityAppItem.funFactDescEN = ''
        utilityAppItem.funFactDescCN = ''
        utilityAppItem.funFactDescZH = ''

        this.list.push(utilityAppItem);
        utilityAppItem = new AppItem();

    }



}