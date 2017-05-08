import { Injectable } from '@angular/core';
import { AppItem } from "./AppItem";

@Injectable()
export class DiningList {

    public list: AppItem[] = [];

    constructor() {
        this.init();
    }

    init() {

        let diningtAppItem = new AppItem();

        diningtAppItem.id = 'D001'
        diningtAppItem.iosFlag = true
        diningtAppItem.androidFlag = true
        diningtAppItem.goodFlag = true
        diningtAppItem.hotFlag = true
        diningtAppItem.saveFlag = false
        diningtAppItem.nameEN = 'OpenRice'
        diningtAppItem.nameCN = 'OpenRice 开饭喇'
        diningtAppItem.nameZH = 'OpenRice 開飯喇'
        diningtAppItem.logoPic = 'https://vgy.me/Gs3x5F.png'
        diningtAppItem.iosLink = 'https://appsto.re/hk/BIfHs.i'
        diningtAppItem.androiLink = 'com.openrice.android'
        diningtAppItem.iosPicEN1 = 'https://vgy.me/EvPzdA.jpeg'
        diningtAppItem.iosPicCN1 = 'https://vgy.me/5lKERp.jpeg'
        diningtAppItem.iosPicZH1 = 'https://vgy.me/5lKERp.jpeg'
        diningtAppItem.iosPicEN2 = 'https://vgy.me/YO2uJc.jpeg'
        diningtAppItem.iosPicCN2 = 'https://vgy.me/umTJor.jpeg'
        diningtAppItem.iosPicZH2 = 'https://vgy.me/umTJor.jpeg'
        diningtAppItem.androidPicEN1 = 'https://vgy.me/PNLPVt.png'
        diningtAppItem.androidPicCN1 = 'https://vgy.me/kAWjKn.png'
        diningtAppItem.androidPicZH1 = 'https://vgy.me/kAWjKn.png'
        diningtAppItem.androidPicEN2 = 'https://vgy.me/IlhTlJ.png'
        diningtAppItem.androidPicCN2 = 'https://vgy.me/if2J0p.png'
        diningtAppItem.androidPicZH2 = 'https://vgy.me/if2J0p.png'
        diningtAppItem.editorWordEN = 'Famous local dining app. The largest restaurant/review search engine in Hong Kong. If you love food, you do not want to miss it.'
        diningtAppItem.editorWordCN = '当地着名最大的餐厅/评论搜索引擎。如果你喜欢美食，不会错过它。'
        diningtAppItem.editorWordZH = '當地著名最大的餐廳/評論搜索引擎。如果你喜歡美食，不會錯過它。'
        diningtAppItem.descEN = `OpenRice : Search, Food Trend, Offers, Table Booking and Meal Invitation are All-in-One!
                                <br><br>
                                OpenRice has consolidated the restaurant database of Hong Kong, Macau, Taiwan, Japan, Thailand, Singapore, Malaysia and Indonesia in the new version of App, offering you more than an ordinary restaurant search engine. Besides Restaurant Name, Cuisine Type, District and specific filters, the App has been enhanced in various aspects to facilitate your search, for the best matching with your personal dining preferences.
                                <br><br>
                                - Powerful search function:<br>
                                o Relevant information including restaurant listing, offers and related articles will be shown under the keyword search<br>
                                o Facilitate accurate and efficient search with search history <br>
                                o Integrated popular dishes from restaurant database with comprehensive details and information<br>
                                o Refine your restaurant search easily and sort by rating, no of bookmark, price range and distance<br>
                                o Support multiple-select search function. More than one cuisine or district can be selected at the same time<br>
                                <br><br>
                                - Table booking services:<br>
                                o Suggest available tables nearby and restaurant offers based on your current location<br>
                                o Plan ahead by booking a table before your trip to Hong Kong, Macau or Taiwan<br>
                                <br><br>
                                - Send out meal invitation to your friends and vote from various restaurant options<br>
                                o Feature local & global food trends as well as talk-of-the-town restaurants `
        diningtAppItem.descCN = `OpenRice《开饭喇！》: 搜寻餐厅丶美食资讯丶优惠丶订座，一个App轻松完成！
                                <br><br>
                                OpenRice《开饭喇！》全新版本结合香港丶澳门丶台湾丶日本丶泰国丶新加坡丶马来西亚及印尼的餐厅资料库，并大大增强美食搜索引擎，用户除可轻松利用原有餐厅名丶菜式丶地区或特定条件搜寻，更全面Upgrade不同范畴，务求令搜寻更精准贴心，想吃甚麽，一search 就得！
                                <br><br>
                                - 强大搜寻功能：<br>
                                o 依据关键字搜寻，提供餐厅名称选单丶精选优惠及相关文章等资料<br>
                                o 即时列出个人化搜寻纪录，最快最精确找到喜爱餐厅<br>
                                o 餐厅必吃菜全面整合，图文并茂推介餐厅热门菜式 <br>
                                o 搜寻结果以多角度排序，提供全新筛选介面，因应个人喜好依评分丶最多收藏丶价钱及距离排列 o 提供多项条件搜寻功能，可一次输入多於一款菜式及地区 
                                <br><br>
                                -订座服务：<br>
                                o 根据所在位置，即时提供附近有位可订的餐厅及优惠 <br>
                                o 更可订香港丶澳门及台湾餐厅，方便安排旅游行程
                                <br><br>
                                -全新「约饭局」功能，约Friend投选开饭地点更轻松
                                <br><br>
                                -网罗最新饮食资讯，发掘新开张餐厅以至今期饮食风潮`
        diningtAppItem.descZH = `OpenRice《開飯喇！》: 搜尋餐廳、美食資訊、優惠、訂座，一個App輕鬆完成！
                                <br><br>
                                OpenRice《開飯喇！》全新版本結合香港、澳門、台灣、日本、泰國、新加坡、馬來西亞及印尼的餐廳資料庫，並大大增強美食搜索引擎，用戶除可輕鬆利用原有餐廳名、菜式、地區或特定條件搜尋，更全面Upgrade不同範疇，務求令搜尋更精準貼心，想吃甚麼，一search 就得！
                                <br><br>
                                - 強大搜尋功能：<br>
                                o 依據關鍵字搜尋，提供餐廳名稱選單、精選優惠及相關文章等資料<br>
                                o 即時列出個人化搜尋紀錄，最快最精確找到喜愛餐廳<br>
                                o 餐廳必吃菜全面整合，圖文並茂推介餐廳熱門菜式 <br>
                                o 搜尋結果以多角度排序，提供全新篩選介面，因應個人喜好依評分、最多收藏、價錢及距離排列 o 提供多項條件搜尋功能，可一次輸入多於一款菜式及地區 
                                <br><br>
                                -訂座服務：<br>
                                o 根據所在位置，即時提供附近有位可訂的餐廳及優惠 <br>
                                o 更可訂香港、澳門及台灣餐廳，方便安排旅遊行程
                                <br><br>
                                -全新「約飯局」功能，約Friend投選開飯地點更輕鬆
                                <br><br>
                                -網羅最新飲食資訊，發掘新開張餐廳以至今期飲食風潮`
        diningtAppItem.funFactFlag = false
        diningtAppItem.funFactPic1 = ''
        diningtAppItem.funFactPic2 = ''
        diningtAppItem.funFactDescEN = ''
        diningtAppItem.funFactDescCN = ''
        diningtAppItem.funFactDescZH = ''

        this.list.push(diningtAppItem);
        diningtAppItem = new AppItem();

        diningtAppItem.id = 'D002'
        diningtAppItem.iosFlag = true
        diningtAppItem.androidFlag = true
        diningtAppItem.goodFlag = true
        diningtAppItem.hotFlag = false
        diningtAppItem.saveFlag = false
        diningtAppItem.nameEN = 'THE GULU'
        diningtAppItem.nameCN = 'THE GULU'
        diningtAppItem.nameZH = 'THE GULU'
        diningtAppItem.logoPic = 'https://vgy.me/i36xfe.png'
        diningtAppItem.iosLink = 'https://appsto.re/hk/QDDfS.i'
        diningtAppItem.androiLink = 'com.foodgulu'
        diningtAppItem.iosPicEN1 = 'https://vgy.me/Ho97UD.jpeg'
        diningtAppItem.iosPicCN1 = 'https://vgy.me/Ho97UD.jpeg'
        diningtAppItem.iosPicZH1 = 'https://vgy.me/Ho97UD.jpeg'
        diningtAppItem.iosPicEN2 = 'https://vgy.me/Y4raRM.jpeg'
        diningtAppItem.iosPicCN2 = 'https://vgy.me/Y4raRM.jpeg'
        diningtAppItem.iosPicZH2 = 'https://vgy.me/Y4raRM.jpeg'
        diningtAppItem.androidPicEN1 = 'https://vgy.me/Y3Daj1.png'
        diningtAppItem.androidPicCN1 = 'https://vgy.me/Y3Daj1.png'
        diningtAppItem.androidPicZH1 = 'https://vgy.me/Y3Daj1.png'
        diningtAppItem.androidPicEN2 = 'https://vgy.me/gy9hIt.png'
        diningtAppItem.androidPicCN2 = 'https://vgy.me/gy9hIt.png'
        diningtAppItem.androidPicZH2 = 'https://vgy.me/gy9hIt.png'
        diningtAppItem.editorWordEN = 'Online queuing system for some local restaurant. The best part is the remote queue.'
        diningtAppItem.editorWordCN = '部份本地餐厅的在线排队系统，最好的地方是遥距取票。'
        diningtAppItem.editorWordZH = '部份本地餐廳的在線排隊系統，最好的地方是遙距取票。'
        diningtAppItem.descEN = `Queuing is an issue that we face everyday living in a city. Time is money, THEGULU values each user's queuing time spent for getting into a restaurant, thus we have created a realtime queuing app as a solution. 
                                <br><br>
                                THEGULU is a multi function mobile app, enabling users to remote queue, make reservations, order take outs with payment, banquet/party booking, merchants searching, share , post, collect photos, comments or e-coupons all in REALTIME.
                                <br><br>
                                We are bettering functions and improving stability everyday to bring users a better experience and hope more people can benefit from it.`
        diningtAppItem.descCN = `「排队」- 香港人每一天都会遇到的情况，作为忙碌的都市人，时间就是金钱，而THEGULU的宗旨是致力为港人善用排队的时间，非一般的遥距攞飞程式和全球首创的飞数直播，以电子化取代旧式的排队文化，绝对是一个能革新香港排队文化的应用程式！
                                <br><br>
                                THEGULU 集多种功能於一身，具备遥距取票和订座外，更提供预先点餐丶预订外卖丶预订宴会丶浏览餐牌丶商户搜寻丶评分及分享相片等功能，用家更可於群组和朋友分享，让邀请朋友约会用膳增添一份乐趣！
                                <br><br>
                                我们由节省时间的角度出发，希望带给智能手机用家和商户双方一个可靠的程式，令时间和资源更完善和有效地运用，达致双赢的效果。
                                <br><br>
                                本公司希望日後能将此系统运用於其他行业，并在程式上加入更多新元素，不断提升服务和内容，将原用来等候的时间更用得其所！`
        diningtAppItem.descZH = `「排隊」- 香港人每一天都會遇到的情況，作為忙碌的都市人，時間就是金錢，而THEGULU的宗旨是致力為港人善用排隊的時間，非一般的遙距攞飛程式和全球首創的飛數直播，以電子化取代舊式的排隊文化，絕對是一個能革新香港排隊文化的應用程式！
                                <br><br>
                                THEGULU 集多種功能於一身，具備遙距取票和訂座外，更提供預先點餐、預訂外賣、預訂宴會、瀏覽餐牌、商戶搜尋、評分及分享相片等功能，用家更可於群組和朋友分享，讓邀請朋友約會用膳增添一份樂趣！
                                <br><br>
                                我們由節省時間的角度出發，希望帶給智能手機用家和商戶雙方一個可靠的程式，令時間和資源更完善和有效地運用，達致雙贏的效果。
                                <br><br>
                                本公司希望日後能將此系統運用於其他行業，並在程式上加入更多新元素，不斷提升服務和內容，將原用來等候的時間更用得其所！`
        diningtAppItem.funFactFlag = false
        diningtAppItem.funFactPic1 = ''
        diningtAppItem.funFactPic2 = ''
        diningtAppItem.funFactDescEN = ''
        diningtAppItem.funFactDescCN = ''
        diningtAppItem.funFactDescZH = ''

        this.list.push(diningtAppItem);
        diningtAppItem = new AppItem();

        diningtAppItem.id = 'D003'
        diningtAppItem.iosFlag = true
        diningtAppItem.androidFlag = true
        diningtAppItem.goodFlag = true
        diningtAppItem.hotFlag = true
        diningtAppItem.saveFlag = false
        diningtAppItem.nameEN = 'TripAdvisor'
        diningtAppItem.nameCN = 'TripAdvisor'
        diningtAppItem.nameZH = 'TripAdvisor'
        diningtAppItem.logoPic = 'https://vgy.me/28y8BT.png'
        diningtAppItem.iosLink = 'https://appsto.re/hk/7_T-q.i'
        diningtAppItem.androiLink = 'com.tripadvisor.tripadvisor'
        diningtAppItem.iosPicEN1 = 'https://vgy.me/geVRVE.jpeg'
        diningtAppItem.iosPicCN1 = 'https://vgy.me/2lZV75.jpeg'
        diningtAppItem.iosPicZH1 = 'https://vgy.me/2lZV75.jpeg'
        diningtAppItem.iosPicEN2 = 'https://vgy.me/TnOMSV.jpeg'
        diningtAppItem.iosPicCN2 = 'https://vgy.me/87w3ka.jpeg'
        diningtAppItem.iosPicZH2 = 'https://vgy.me/87w3ka.jpeg'
        diningtAppItem.androidPicEN1 = 'https://vgy.me/eUtzQu.png'
        diningtAppItem.androidPicCN1 = 'https://vgy.me/BFPF7U.png'
        diningtAppItem.androidPicZH1 = 'https://vgy.me/Mob6bd.png'
        diningtAppItem.androidPicEN2 = 'https://vgy.me/HPZvrs.png'
        diningtAppItem.androidPicCN2 = 'https://vgy.me/UAvy3R.png'
        diningtAppItem.androidPicZH2 = 'https://vgy.me/l9h9pc.png'
        diningtAppItem.editorWordEN = 'Famous app speaks for itself.'
        diningtAppItem.editorWordCN = '着名的应用程序，不用多说。'
        diningtAppItem.editorWordZH = '著名的應用程序，不用多說。'
        diningtAppItem.descEN = `Millions of traveler reviews, photos, and maps from TripAdvisor. Know better. Book better. Go better. With over 500 million reviews and opinions by travelers, TripAdvisor makes it easy to find the lowest airfare, best hotels, great restaurants, and fun things to do, wherever you go. And booking options for hotels, restaurants and flights are just a tap away.
                                <br><br>
                                The TripAdvisor mobile app is free and easy to use.<br>
                                • Browse millions of reviews, opinions and candid photos by travelers<br>
                                • Find the best hotel for you, including Travelers' Choice award winners<br>
                                • Explore restaurants and reserve tables online<br>
                                • Discover cool things to do in any destination<br>
                                • Compare airfares and find great deals <br>
                                • Use Near Me Now to discover places near your current location<br>
                                • Get answers to your specific travel questions in the forums<br>
                                • Add your own reviews and photos<br>
                                • Download maps, reviews, and your saves for over 300 cities worldwide onto your phone for free; avoid using expensive data roaming plans while you travel`
        diningtAppItem.descCN = `在 TripAdvisor 上查看数千万则旅客评论丶照片和地图。 全面了解，聪明预订，精彩旅行。 不论您在哪里，都可以到 TripAdvisor 查看超过 3 亿 5000 万则旅客评论和意见，轻松查询最低价机票丶最优惠饭店丶最棒餐厅和有趣的观光活动。 而且只要点按几下，即可选择预订饭店丶餐厅和机票。
                                <br><br>
                                TripAdvisor 行动应用程式不但免费，而且使用容易。<br>
                                • 浏览数千万则旅客的评论丶意见和真实照片<br>
                                • 找出适合您的最优惠饭店，包括 Travellers’ Choice 大奖得主<br>
                                • 线上探索餐厅并订位<br>
                                • 探索任何目的地的有趣观光活动<br>
                                • 比较机票票价和查询绝佳优惠 <br>
                                • 使用「此时此地附近」来探索您目前所在位置附近的地点<br>
                                • 在论坛中找出特定旅游相关疑问的解答<br>
                                • 新增您自己的评论和照片<br>
                                • 免费事先下载世界各地超过 300 个城市的地图丶评论和储存清单至您的手机；避免在旅行时使用昂贵的手机漫游服务`
        diningtAppItem.descZH = `在 TripAdvisor 上查看數千萬則旅客評論、照片和地圖。 全面了解，聰明預訂，精彩旅行。 不論您在哪裡，都可以到 TripAdvisor 查看超過 3 億 5000 萬則旅客評論和意見，輕鬆查詢最低價機票、最優惠飯店、最棒餐廳和有趣的觀光活動。 而且只要點按幾下，即可選擇預訂飯店、餐廳和機票。
                                <br><br>
                                TripAdvisor 行動應用程式不但免費，而且使用容易。<br>
                                • 瀏覽數千萬則旅客的評論、意見和真實照片<br>
                                • 找出適合您的最優惠飯店，包括 Travellers’ Choice 大獎得主<br>
                                • 線上探索餐廳並訂位<br>
                                • 探索任何目的地的有趣觀光活動<br>
                                • 比較機票票價和查詢絕佳優惠 <br>
                                • 使用「此時此地附近」來探索您目前所在位置附近的地點<br>
                                • 在論壇中找出特定旅遊相關疑問的解答<br>
                                • 新增您自己的評論和照片<br>
                                • 免費事先下載世界各地超過 300 個城市的地圖、評論和儲存清單至您的手機；避免在旅行時使用昂貴的手機漫遊服務`
        diningtAppItem.funFactFlag = false
        diningtAppItem.funFactPic1 = ''
        diningtAppItem.funFactPic2 = ''
        diningtAppItem.funFactDescEN = ''
        diningtAppItem.funFactDescCN = ''
        diningtAppItem.funFactDescZH = ''

        this.list.push(diningtAppItem);
        diningtAppItem = new AppItem();

    }



}