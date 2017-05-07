import { Injectable } from '@angular/core';
import { AppItem } from "./AppItem";

@Injectable()
export class EntertainmentList {

    public list: AppItem[] = [];

    constructor() {
        this.init();
    }

    init() {

        let entertainmentAppItem = new AppItem();

        entertainmentAppItem.id = 'E001'
        entertainmentAppItem.iosFlag = true
        entertainmentAppItem.androidFlag = true
        entertainmentAppItem.goodFlag = true
        entertainmentAppItem.hotFlag = true
        entertainmentAppItem.saveFlag = false
        entertainmentAppItem.nameEN = 'Hong Kong Movie'
        entertainmentAppItem.nameCN = 'Hong Kong Movie 香港电影'
        entertainmentAppItem.nameZH = 'Hong Kong Movie 香港電影'
        entertainmentAppItem.logoPic = 'https://vgy.me/2qmpd9.png'
        entertainmentAppItem.iosLink = 'https://appsto.re/hk/r_Oes.i'
        entertainmentAppItem.androiLink = 'gt.farm.hkmovies'
        entertainmentAppItem.iosPicEN1 = 'https://vgy.me/LOIWXY.jpeg'
        entertainmentAppItem.iosPicCN1 = 'https://vgy.me/fj13n0.jpeg'
        entertainmentAppItem.iosPicZH1 = 'https://vgy.me/fj13n0.jpeg'
        entertainmentAppItem.iosPicEN2 = 'https://vgy.me/weIKty.jpeg'
        entertainmentAppItem.iosPicCN2 = 'https://vgy.me/UrTVu5.jpeg'
        entertainmentAppItem.iosPicZH2 = 'https://vgy.me/UrTVu5.jpeg'
        entertainmentAppItem.androidPicEN1 = 'https://vgy.me/uEB28p.png'
        entertainmentAppItem.androidPicCN1 = 'https://vgy.me/uEB28p.png'
        entertainmentAppItem.androidPicZH1 = 'https://vgy.me/uEB28p.png'
        entertainmentAppItem.androidPicEN2 = 'https://vgy.me/iYJNzS.png'
        entertainmentAppItem.androidPicCN2 = 'https://vgy.me/iYJNzS.png'
        entertainmentAppItem.androidPicZH2 = 'https://vgy.me/iYJNzS.png'
        entertainmentAppItem.editorWordEN = 'Provide ticketing service from different cinemas.'
        entertainmentAppItem.editorWordCN = '提供不同的电影院的售票服务。'
        entertainmentAppItem.editorWordZH = '提供不同的電影院的售票服務。'
        entertainmentAppItem.descEN = `Hong Kong Movie brings you the brand new experience from choosing the movie to ticketing processes. Wherever and whenever you are, this award-winning app allows you to buy movie tickets in few simple steps and browser comprehensive movie information including movie synopsis, movie showtimes, user reviews and rating, and real-time seating plan! You can also comment on the movie, and share the comment with your friends! 
                                        <br><br>
                                        - Fast and secure ticketing service<br>
                                        - User movie reviews and rating<br>
                                        - Latest movie synopsis and trailer<br>
                                        -「Notify Me」function<br>
                                        - Movie showtimes<br>
                                        - Real-time seating plan<br>
                                        - All Hong Kong cinemas details`
        entertainmentAppItem.descCN = `Hong Kong Movie 带给你由看电影前到看电影後一站式的体验，你可以由浏览电影介绍丶预告片丶电影评论来选择你心水的电影。当心水电影上映後，你更可以经由 Hong Kong Movie 购买戏票，我们提供全港各场电影放映时间及实时销售情况，无论你在家中或在街上只需要经过简单步骤便可成功购票，安全快捷！最後看完电影，你还可以对电影进行评分，与其他会员一起评论电影！
                                        <br><br>
                                        - 最快捷最安全购票服务<br>
                                        - 电影评论和电影评分<br>
                                        - 最新电影介绍和预告片<br>
                                        -「通知」功能，当电影上映时立即通知你！<br>
                                        - 全港各场电影放映时间<br>
                                        - 实时销售情况<br>
                                        - 全港戏院资料`
        entertainmentAppItem.descZH = `Hong Kong Movie 帶給你由看電影前到看電影後一站式的體驗，你可以由瀏覽電影介紹、預告片、電影評論來選擇你心水的電影。當心水電影上映後，你更可以經由 Hong Kong Movie 購買戲票，我們提供全港各場電影放映時間及實時銷售情況，無論你在家中或在街上只需要經過簡單步驟便可成功購票，安全快捷！最後看完電影，你還可以對電影進行評分，與其他會員一起評論電影！
                                        <br><br>
                                        - 最快捷最安全購票服務<br>
                                        - 電影評論和電影評分<br>
                                        - 最新電影介紹和預告片<br>
                                        -「通知」功能，當電影上映時立即通知你！<br>
                                        - 全港各場電影放映時間<br>
                                        - 實時銷售情況<br>
                                        - 全港戲院資料`
        entertainmentAppItem.funFactFlag = false
        entertainmentAppItem.funFactPic1 = ''
        entertainmentAppItem.funFactPic2 = ''
        entertainmentAppItem.funFactDescEN = ''
        entertainmentAppItem.funFactDescCN = ''
        entertainmentAppItem.funFactDescZH = ''

        this.list.push(entertainmentAppItem);
        entertainmentAppItem = new AppItem();

        entertainmentAppItem.id = 'E002'
        entertainmentAppItem.iosFlag = true
        entertainmentAppItem.androidFlag = true
        entertainmentAppItem.goodFlag = true
        entertainmentAppItem.hotFlag = true
        entertainmentAppItem.saveFlag = false
        entertainmentAppItem.nameEN = 'TrailWatch: Your Best Hiking Guide'
        entertainmentAppItem.nameCN = 'TrailWatch: 随身行山向导'
        entertainmentAppItem.nameZH = 'TrailWatch: 隨身行山嚮導'
        entertainmentAppItem.logoPic = 'https://vgy.me/6l2lgc.png'
        entertainmentAppItem.iosLink = 'https://appsto.re/hk/5yZjV.i'
        entertainmentAppItem.androiLink = 'com.computancy.countrypark'
        entertainmentAppItem.iosPicEN1 = 'https://vgy.me/abXuXR.jpeg'
        entertainmentAppItem.iosPicCN1 = 'https://vgy.me/abXuXR.jpeg'
        entertainmentAppItem.iosPicZH1 = 'https://vgy.me/abXuXR.jpeg'
        entertainmentAppItem.iosPicEN2 = 'https://vgy.me/DgdS8g.jpeg'
        entertainmentAppItem.iosPicCN2 = 'https://vgy.me/DgdS8g.jpeg'
        entertainmentAppItem.iosPicZH2 = 'https://vgy.me/DgdS8g.jpeg'
        entertainmentAppItem.androidPicEN1 = 'https://vgy.me/abXuXR.jpeg'
        entertainmentAppItem.androidPicCN1 = 'https://vgy.me/abXuXR.jpeg'
        entertainmentAppItem.androidPicZH1 = 'https://vgy.me/abXuXR.jpeg'
        entertainmentAppItem.androidPicEN2 = 'https://vgy.me/DgdS8g.jpeg'
        entertainmentAppItem.androidPicCN2 = 'https://vgy.me/DgdS8g.jpeg'
        entertainmentAppItem.androidPicZH2 = 'https://vgy.me/DgdS8g.jpeg'
        entertainmentAppItem.editorWordEN = 'Provide hiking routes and hiking record.'
        entertainmentAppItem.editorWordCN = '提供远足路线和远足记录。'
        entertainmentAppItem.editorWordZH = '提供遠足路線和遠足記錄。'
        entertainmentAppItem.descEN = `Hike with a purpose: join us in protecting Hong Kong’s country parks! 
                                        <br><br>
                                        TrailWatch is the first smartphone app in Hong Kong that combines conservation with the appreciation for Hong Kong’s country parks.
                                        <br><br>
                                        When you hike with TrailWatch, you can track your hikes in real-time using GPS, and help surveil the countryside by reporting unusual incidents. You can also plan and share your trails, as well as check out routes created by other users.
                                        <br><br>
                                        Enjoy. Share. Protect.
                                        <br><br>
                                        Key Features 
                                        <br><br>
                                        Hiking record: Supplement records of your hikes with your own photos and statistics calibrated by the app, including elevation, length, distance, speed, calories burnt etc.
                                        <br><br>
                                        Browse routes: Find feature trails or routes near you and bookmark them—or customise them to suit your needs! Search for featured and routes near you and start tracking, or modify and bookmark them to suit your preferences
                                        <br><br>
                                        Plan routes: Plot routes simply by tapping the start and end points—and the app will map the rest of the trail for you. If you wish, you may personalise the route and add points of interest.
                                        <br><br>
                                        Invite friends: Create a group tracking event and send your TrailWatch friends an invitation! The invitation will contain everything your friends need to know, including route details, where to meet, and so on.
                                        <br><br>
                                        Locate friends: Using internet data, members of a group tracking event can identify the real-time locations of all participants. This means even those who have wandered off course can be located.
                                        <br><br>
                                        Share photos: All photos taken by group members can be automatically uploaded to the group tracking event and shared with all members without making additional settings. 
                                        <br><br>
                                        See who finished fastest: The time spent by each individual group member to complete a group tracking event will be published on a list after the event has ended.
                                        <br><br>
                                        Safeguard our trails: Users are encouraged to monitor and protect country parks by reporting unusual incidents during their hikes. “Concrete Path,” a new category of incidents, allows users to report concrete paved walkways along trails.
                                        <br><br>
                                        TrailWatch offers four kinds of maps: the TrailWatch HK Map, TrailWatch Terrain Map, Open Cycle Map, and MapBox Streets Map.`
        entertainmentAppItem.descCN = `让行山变得更有意义，齐来守护香港的郊野公园。<br>
                                        TrailWatch是香港首个给合保育郊野及行山运动的手机程式。你可以利用TrailWatch的GPS功能，实时记录行山活动。若遇到任何破坏郊野的活动，更可以即时举报。你亦可计划丶记录和分享行山活动，并搜索和下载多条香港的行山路线。<br>
                                        乐在山林 守护郊野<br>
                                        主要特点<br><br>
                                        行山记录 － 你的个人行山全记录，配备重要资讯包括高度丶时间丶距离丶速度及卡路里消耗量等。<br><br>
                                        搜寻路线 － 多条路线按主题及地区分类，可供即时跟随，亦可作收藏或修改，留待日後使用。<br><br>
                                        计划路线 － 轻按地图设定起点和终点，两地之间最便捷的路线便会自动出现。你亦可配合个人兴趣，於路线上加入途经点和景点。<br><br>
                                        举办行山活动更易更好玩 － 可发出活动邀请给TrailWatch山友参加行山群组活动，邀请通知已包括了路线资讯和集合详情。<br><br>
                                        即时找到同行的队员－ 有网络的情况下，可即时知道组员的实时位置。对於各人所在位置，或有没组员走失，也一目了然。<br><br>
                                        分享活动图片 － 组员所拍照片都会一起放在群组活动内。毋须另行按键分享，也可欣赏到彼此的照片。<br><br>
                                        纪录完成时间－ 同一路线，各组员的所需时间各有不同。现在可在同一列表上看见各人的完成时间。<br><br>
                                        保衞行山径 － 新增「石屎化山径」的类别。请大家一起监察，并透过举报防止行山径石屎化。<br><br>
                                        本程式有以下四张地图：TrailWatch HK Map, TrailWatch Terrain Map, Open Cycle Map, MapBox Streets Map`
        entertainmentAppItem.descZH = `讓行山變得更有意義，齊來守護香港的郊野公園。<br>
                                        TrailWatch是香港首個給合保育郊野及行山運動的手機程式。你可以利用TrailWatch的GPS功能，實時記錄行山活動。若遇到任何破壞郊野的活動，更可以即時舉報。你亦可計劃、記錄和分享行山活動，並搜索和下載多條香港的行山路線。<br>
                                        樂在山林 守護郊野<br>
                                        主要特點<br><br>
                                        行山記錄 – 你的個人行山全記錄，配備重要資訊包括高度、時間、距離、速度及卡路里消耗量等。<br><br>
                                        搜尋路線 – 多條路線按主題及地區分類，可供即時跟隨，亦可作收藏或修改，留待日後使用。<br><br>
                                        計劃路線 – 輕按地圖設定起點和終點，兩地之間最便捷的路線便會自動出現。你亦可配合個人興趣，於路線上加入途經點和景點。<br><br>
                                        舉辦行山活動更易更好玩 – 可發出活動邀請給TrailWatch山友參加行山群組活動，邀請通知已包括了路線資訊和集合詳情。<br><br>
                                        即時找到同行的隊員– 有網絡的情況下，可即時知道組員的實時位置。對於各人所在位置，或有沒組員走失，也一目了然。<br><br>
                                        分享活動圖片 – 組員所拍照片都會一起放在群組活動內。毋須另行按鍵分享，也可欣賞到彼此的照片。<br><br>
                                        紀錄完成時間– 同一路線，各組員的所需時間各有不同。現在可在同一列表上看見各人的完成時間。<br><br>
                                        保衞行山徑 – 新增「石屎化山徑」的類別。請大家一起監察，並透過舉報防止行山徑石屎化。<br><br>
                                        本程式有以下四張地圖：TrailWatch HK Map, TrailWatch Terrain Map, Open Cycle Map, MapBox Streets Map`
        entertainmentAppItem.funFactFlag = false
        entertainmentAppItem.funFactPic1 = ''
        entertainmentAppItem.funFactPic2 = ''
        entertainmentAppItem.funFactDescEN = ''
        entertainmentAppItem.funFactDescCN = ''
        entertainmentAppItem.funFactDescZH = ''

        this.list.push(entertainmentAppItem);
        entertainmentAppItem = new AppItem();

        entertainmentAppItem.id = 'E003'
        entertainmentAppItem.iosFlag = true
        entertainmentAppItem.androidFlag = true
        entertainmentAppItem.goodFlag = true
        entertainmentAppItem.hotFlag = false
        entertainmentAppItem.saveFlag = false
        entertainmentAppItem.nameEN = 'Enjoy Hiking'
        entertainmentAppItem.nameCN = '郊野乐行 Enjoy Hiking'
        entertainmentAppItem.nameZH = '郊野樂行 Enjoy Hiking'
        entertainmentAppItem.logoPic = 'https://vgy.me/kSo06T.png'
        entertainmentAppItem.iosLink = 'https://appsto.re/hk/EuTky.i'
        entertainmentAppItem.androiLink = 'com.hkgeopark.enjoyhiking'
        entertainmentAppItem.iosPicEN1 = 'https://vgy.me/KqcYqo.jpeg'
        entertainmentAppItem.iosPicCN1 = 'https://vgy.me/KqcYqo.jpeg'
        entertainmentAppItem.iosPicZH1 = 'https://vgy.me/KqcYqo.jpeg'
        entertainmentAppItem.iosPicEN2 = 'https://vgy.me/KqcYqo.jpeg'
        entertainmentAppItem.iosPicCN2 = 'https://vgy.me/KqcYqo.jpeg'
        entertainmentAppItem.iosPicZH2 = 'https://vgy.me/KqcYqo.jpeg'
        entertainmentAppItem.androidPicEN1 = 'https://vgy.me/xcQQiV.png'
        entertainmentAppItem.androidPicCN1 = 'https://vgy.me/xcQQiV.png'
        entertainmentAppItem.androidPicZH1 = 'https://vgy.me/xcQQiV.png'
        entertainmentAppItem.androidPicEN2 = 'https://vgy.me/aDtspG.png'
        entertainmentAppItem.androidPicCN2 = 'https://vgy.me/aDtspG.png'
        entertainmentAppItem.androidPicZH2 = 'https://vgy.me/aDtspG.png'
        entertainmentAppItem.editorWordEN = 'Offical goverment app. Showcase various hiking trails in Hong Kong.'
        entertainmentAppItem.editorWordCN = '政府应用程式，列出的香港各种远足径。'
        entertainmentAppItem.editorWordZH = '政府應用程式，列出的香港各種遠足徑。'
        entertainmentAppItem.descEN = `Hong Kong, despite being so small, has some of South China’s most striking and valuable natural landscapes. This unique system, with its countless routes, lies very close to the city: one is never far away from natural settings and beguiling trails. The Agriculture, Fisheries and Conservation Department has launched its iPhone app to showcase various hiking trails in Hong Kong. You can select suitable route with reference to your interest, physical fitness and experience to enjoy hiking in the countryside of Hong Kong.`
        entertainmentAppItem.descCN = `香港幅员虽小,却拥有壮丽和珍贵的天然美景。不管你身在何处,附近总会有一些可欣赏自然美景和郊游漫步的优美径道。渔农自然护理署推出iPhone应用程式,展示香港的山径及路线,让你因应个人兴趣丶体能及经验选择合适路线,乐行香港的郊野。
                                        *注意: 连续使用远足留踨服务会使大量消耗电池寿命`
        entertainmentAppItem.descZH = `香港幅員雖小,卻擁有壯麗和珍貴的天然美景。不管你身在何處,附近總會有一些可欣賞自然美景和郊遊漫步的優美徑道。漁農自然護理署推出iPhone應用程式,展示香港的山徑及路線,讓你因應個人興趣、體能及經驗選擇合適路線,樂行香港的郊野。
                                        *注意: 連續使用遠足留踨服務會使大量消耗電池壽命`
        entertainmentAppItem.funFactFlag = false
        entertainmentAppItem.funFactPic1 = ''
        entertainmentAppItem.funFactPic2 = ''
        entertainmentAppItem.funFactDescEN = ''
        entertainmentAppItem.funFactDescCN = ''
        entertainmentAppItem.funFactDescZH = ''

        this.list.push(entertainmentAppItem);
        entertainmentAppItem = new AppItem();

    }



}