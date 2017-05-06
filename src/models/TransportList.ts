import { Injectable } from '@angular/core';
import { AppItem } from "./AppItem";

@Injectable()
export class TransportList {

    public list: AppItem[] = [];

    constructor() {
        this.init();
    }

    init() {
        let transportAppItem = new AppItem();

        // MTR
        transportAppItem.id = 'T001';
        transportAppItem.iosFlag = true;
        transportAppItem.androidFlag = true;
        transportAppItem.goodFlag = true;
        transportAppItem.hotFlag = true;
        transportAppItem.saveFlag = false;
        transportAppItem.nameEN = 'MTR Mobile';
        transportAppItem.nameCN = '港铁 MTR Mobile';
        transportAppItem.nameZH = '港鐵 MTR Mobile';
        transportAppItem.logoPic = 'https://vgy.me/NNkxYv.png';
        transportAppItem.iosLink = 'https://appsto.re/hk/S-Vaw.i';
        transportAppItem.androiLink = 'com.mtr.mtrmobile';
        transportAppItem.iosPicEN1 = 'https://vgy.me/GMohI1.jpeg';
        transportAppItem.iosPicCN1 = 'https://vgy.me/GKfvLw.jpeg';
        transportAppItem.iosPicZH1 = 'https://vgy.me/GKfvLw.jpeg';
        transportAppItem.iosPicEN2 = 'https://vgy.me/ZucAH7.jpeg';
        transportAppItem.iosPicCN2 = 'https://vgy.me/A0jzt3.jpeg';
        transportAppItem.iosPicZH2 = 'https://vgy.me/A0jzt3.jpeg';
        transportAppItem.androidPicEN1 = 'https://vgy.me/t6BaPF.png';
        transportAppItem.androidPicCN1 = 'https://vgy.me/ShFsHL.png';
        transportAppItem.androidPicZH1 = 'https://vgy.me/ShFsHL.png';
        transportAppItem.androidPicEN2 = 'https://vgy.me/J5yKJD.png';
        transportAppItem.androidPicCN2 = 'https://vgy.me/gjxm6E.png';
        transportAppItem.androidPicZH2 = 'https://vgy.me/gjxm6E.png';
        transportAppItem.editorWordEN = 'This is an offical Mass Transit Railway (MTR) app. I suggest visitors download this app because it provides route, fare and tourist info. Even the local people will use it. PS: Only one railway company in Hong Kong.';
        transportAppItem.editorWordCN = '这是官方港铁应用程式。 我建议旅客下载此应用程式，因为它提供车费丶建议路綫丶预计乘车时间丶车资等。当地香港人也会用此程式。备注： 香港只有一间铁路公司。';
        transportAppItem.editorWordZH = '這是官方港鐵應用程式。 我建議旅客下載此應用程式，因為它提供車費、建議路綫、預計乘車時間、車資等。當地香港人也會用此程式。備註： 香港只有一間鐵路公司。';
        transportAppItem.descEN = `MTR Mobile brings you all sorts of useful information relating to MTR trips to help you plan your journey effectively!
                            <br><br>   
                            Train Trip Planner<br> 
                            Search for your route along the MTR by simply tapping on the MTR route map and choosing your starting location and desired destination. Information about your route, including fare information, recommended routing, estimated journey time, interchange guide/platform, first/last train schedule, station services, etc. will be displayed accordingly. In addition of MTR stations, you can also select station exits and see maps of popular locations near the MTR network.
                            <br><br>
                            Traffic News<br> 
                            Traffic News will inform subscribers when train services have been or are expected to be seriously delayed for more than 20 minutes. It will also inform travellers about special train service arrangements during festive holidays or tropical cyclones. Traffic News also allows you to personalise the “push notification function” to receive immediate updates on service information for specific lines to make sure that any updates you get are exactly what you need!
                            <br><br>
                            *Note: Timely delivery of Traffic News messages and alerts may be affected by user traffic on individual mobile phone networks.
                            <br><br>
                            Station Facilities/Barrier-free facilities/Shops<br> 
                            Search easily for facilities, barrier-free facilities and shops in stations, by stations, facility type and shop type. You can also get special service notices of station lifts through the barrier-free-function. 
                            <br><br>
                            Tourist Information<br> 
                            The Tourist Information function offers a wide variety of local attraction guides and information on tourist tickets. You can plan your journey simply by entering the tourist spot as origination or destination in the Train Trip Planner and Light Rail Planner. 
                            <br><br>
                            Airport Express<br> 
                            This provides Airport Express information and allows you to search for travel information from the airport to hotels, including complimentary Airport Express Shuttle Bus service.
                            <br><br>
                            MTR Club<br> 
                            Designed with a clean user interface, users can register as a club member, and check MTR Club information and the eNewsletter easily. During promotional periods of the Bonus Point Scheme, users can also check their bonus points and redeem their gifts anytime, anywhere!`;
        transportAppItem.descCN = `MTR Mobile 让你随时随地掌握与港铁车程有关的各类资讯，助你更轻松计划行程。
                    <br><br>
                    铁路行程指南<br> 
                    搜寻介面以港铁路綫图为本，直接点选起点和目的地车站後，即时显示多项港铁重要旅程资讯，包括车费丶建议路綫丶预计乘车时间丶转綫指示及月台编号丶头班车及尾班车资料等。除点选车站外，更可选择车站出口及附近景点作起点及目的地，计划路綫更得心应手。
                    <br><br>
                    Traffic News<br> 
                    当港铁服务已经或预计受阻超过20分钟时，Traffic News会为你提供有关资讯*，方便你提早选择应变路綫。当风暴令铁路服务有变动或需暂停，或於特别节日的车务安排，Traffic News 都会为你显示最新资料。此外更提供个人化讯息设定功能，让您自订所需路綫接收有关即时车务资讯，以後安排路綫更得心应手。
                    <br><br>
                    注释:应用程式用户能否第一时间接获相关讯息，还要视乎当时的流动电话网络情况。
                    <br><br>
                    车站设施/无障碍设施/商店<br> 
                    根据车站丶设施类别或商店种类，你可搜寻各种车站设施及商店，更包括无障碍设施和站内升降机特别服务资讯。
                    <br><br>
                    旅游资讯<br> 
                    提供本地景点及港铁旅游套票等等有关旅游资讯，亦同时加强搜寻功能，让你在「铁路行程指南」及「轻铁行程指南」可以直接以景点的名称或地址作为起点或终点搜寻，助你更轻松计划旅程。
                    <br><br>
                    机场快綫<br> 
                    为你提供机场快綫及免费接驳巴士资讯，方便由各机场快綫站直达市区各酒店。
                    <br><br>
                    MTR Club<br> 
                    MTR Club 版面清晰简洁，无论登记入会或查阅积分都更就手。程式亦会为你送上会员通讯，让你不在错过优惠情报。在站站奖积分计划举行期间，你亦可透过此手机程式换领心仪礼品，一切画在掌握！`;
        transportAppItem.descZH = `MTR Mobile 讓你隨時隨地掌握與港鐵車程有關的各類資訊，助你更輕鬆計劃行程。
                    <br><br>
                    鐵路行程指南<br> 
                    搜尋介面以港鐵路綫圖為本，直接點選起點和目的地車站後，即時顯示多項港鐵重要旅程資訊，包括車費、建議路綫、預計乘車時間、轉綫指示及月台編號、頭班車及尾班車資料等。除點選車站外，更可選擇車站出口及附近景點作起點及目的地，計劃路綫更得心應手。
                    <br><br>
                    Traffic News<br> 
                    當港鐵服務已經或預計受阻超過20分鐘時，Traffic News會為你提供有關資訊*，方便你提早選擇應變路綫。當風暴令鐵路服務有變動或需暫停，或於特別節日的車務安排，Traffic News 都會為你顯示最新資料。此外更提供個人化訊息設定功能，讓您自訂所需路綫接收有關即時車務資訊，以後安排路綫更得心應手。
                    <br><br>
                    註釋:應用程式用戶能否第一時間接獲相關訊息，還要視乎當時的流動電話網絡情況。
                    <br><br>
                    車站設施/無障礙設施/商店<br> 
                    根據車站、設施類別或商店種類，你可搜尋各種車站設施及商店，更包括無障礙設施和站內升降機特別服務資訊。
                    <br><br>
                    旅遊資訊<br> 
                    提供本地景點及港鐵旅遊套票等等有關旅遊資訊，亦同時加強搜尋功能，讓你在「鐵路行程指南」及「輕鐵行程指南」可以直接以景點的名稱或地址作為起點或終點搜尋，助你更輕鬆計劃旅程。
                    <br><br>
                    機場快綫<br> 
                    為你提供機場快綫及免費接駁巴士資訊，方便由各機場快綫站直達市區各酒店。
                    <br><br>
                    MTR Club<br> 
                    MTR Club 版面清晰簡潔，無論登記入會或查閱積分都更就手。程式亦會為你送上會員通訊，讓你不在錯過優惠情報。在站站獎積分計劃舉行期間，你亦可透過此手機程式換領心儀禮品，一切畫在掌握！`;
        transportAppItem.funFactFlag = false;
        transportAppItem.funFactPic1 = '';
        transportAppItem.funFactPic2 = '';
        transportAppItem.funFactDescEN = '';
        transportAppItem.funFactDescCN = '';
        transportAppItem.funFactDescZH = '';

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        // 香港乘車易
        transportAppItem.id = 'T002'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = true
        transportAppItem.hotFlag = false
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'HKeTransport'
        transportAppItem.nameCN = '香港乘车易'
        transportAppItem.nameZH = '香港乘車易'
        transportAppItem.logoPic = 'https://vgy.me/jkezjE.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/duEzz.i'
        transportAppItem.androiLink = 'com.hketransport'
        transportAppItem.iosPicEN1 = 'https://vgy.me/A1fmE7.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/awfZLC.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/awfZLC.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/2E50HQ.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/FenAPG.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/FenAPG.jpeg'
        transportAppItem.androidPicEN1 = 'https://vgy.me/Eabb12.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/84hmlT.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/vl2Yqm.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/oixkRT.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/AD9dWs.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/zprtyE.png'
        transportAppItem.editorWordEN = 'The interface is not user friendly but it contains enough information from different transportation e.g. bus, railway, ferry. So I suggest you can check the route in this app first.'
        transportAppItem.editorWordCN = '介面不太易操作，但应用程式内的资讯和数据也很足够，例如有巴士丶地铁丶渡船。所以我建议可先在此程式查询路线。'
        transportAppItem.editorWordZH = '介面不太易操作，但應用程式內的資訊和數據也很足夠，例如有巴士、地鐵、渡船。所以我建議可先在此程式查詢路線。'
        transportAppItem.descEN = `This application provides one-stop service of point to point public transport route enquiry for pre-trip planning. The public transport services include Rails, Buses, Green Minibus, Ferry, Tram, Cross Boundary Coach to Huanggang, Buses to Ma Wan and Discovery Bay with adult fare information and elderly fare concession. 
                                    Features include:
                                    <br><br>
                                    1. one stop public transport services route search <br>
                                    2. adult fare and elderly fare concession<br>
                                    3. regular and overnight services <br>
                                    4. sorting routes by number of interchanges, fares, estimated journey time or mode<br>
                                    5. individual route, special services and nearby routes search<br>
                                    6. real-time traffic information (CCTV snapshots, speed map panels, cross-harbour journey times and traffic speed map)<br>
                                    7. estimated time of arrival for route option on tram<br>
                                    8. elderly mode with new user interface with simple operation, voice output, point of interest and fare concession <br>`
        transportAppItem.descCN = `此应用程式提供一站式的点到点路线查询服务,以便预先计划行程。<br>
                                    查询服务涵盖多种公共交通服务包括铁路丶巴士丶专线小巴丶渡轮丶电车丶前往落马洲/皇岗的过境巴士及前往马湾及愉景湾的巴士，并提供成人收费和长者优惠资讯。
                                    <br><br>
                                    内容包括:<br>
                                    1. 一站式公共交通工具搜寻<br>
                                    2. 成人收费和长者优惠资讯<br>
                                    3. 日间和通宵服务<br>
                                    4. 按转乘次数丶收费丶预计行程时间和拟乘搭的交通工具排列路线<br>
                                    5. 个别路线，特别服务路线和地图上附近路线查询<br>
                                    6. 实时交通资讯(交通快拍丶行车速度屏丶过海隧道时间和行车速度图)；<br>
                                    7. 在电车路线选择上显示到站时间<br>
                                    8. 新增长者模式操作介面，提供更简便操作丶朗读丶长者地点分类，及车费优惠资讯<br>`
        transportAppItem.descZH = `此應用程式提供一站式的點到點路線查詢服務,以便預先計劃行程。<br>
                                    查詢服務涵蓋多種公共交通服務包括鐵路、巴士、專線小巴、渡輪、電車、前往落馬洲/皇崗的過境巴士及前往馬灣及愉景灣的巴士，並提供成人收費和長者優惠資訊。
                                    <br><br>
                                    內容包括:<br>
                                    1. 一站式公共交通工具搜尋<br>
                                    2. 成人收費和長者優惠資訊<br>
                                    3. 日間和通宵服務<br>
                                    4. 按轉乘次數、收費、預計行程時間和擬乘搭的交通工具排列路線<br>
                                    5. 個別路線，特別服務路線和地圖上附近路線查詢<br>
                                    6. 實時交通資訊(交通快拍、行車速度屏、過海隧道時間和行車速度圖)；<br>
                                    7. 在電車路線選擇上顯示到站時間<br>
                                    8. 新增長者模式操作介面，提供更簡便操作、朗讀、長者地點分類，及車費優惠資訊<br>`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        // KMB
        transportAppItem.id = 'T003'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = true
        transportAppItem.hotFlag = true
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'APP 1933 - KMB/LWB'
        transportAppItem.nameCN = 'APP 1933 - KMB/LWB'
        transportAppItem.nameZH = 'APP 1933 - KMB/LWB'
        transportAppItem.logoPic = 'https://vgy.me/M0FlNi.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/7BnVfb.i'
        transportAppItem.androiLink = 'com.kmb.app1933'
        transportAppItem.iosPicEN1 = 'https://vgy.me/tG1VTo.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/tG1VTo.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/tG1VTo.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/X4MtYr.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/X4MtYr.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/X4MtYr.jpeg'
        transportAppItem.androidPicEN1 = 'https://vgy.me/brgSP4.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/brgSP4.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/brgSP4.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/txCeG6.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/txCeG6.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/txCeG6.png'
        transportAppItem.editorWordEN = 'This is an offical Kowloon Motor Bus app. It provides first-hand bus route and arrival time but the in-app advertisement annoys users very much.'
        transportAppItem.editorWordCN = '这是官方的九龙巴士应用程式。它提供第一手巴士路线和到达时间，但应用内的广告令用户非常烦扰。'
        transportAppItem.editorWordZH = '這是官方的九龍巴士應用程式。它提供第一手巴士路線和到達時間，但應用內的廣告令用戶非常煩擾。'
        transportAppItem.descEN = `Brand new KMB ‧ LWB Smartphone App is a multi-functional app which provides users with the estimated bus arrival time, updates on bus services and the latest route information to help with journey planning.
                                    <br><br>
                                    Key functions of KMB ‧ LWB Smartphone App:
                                    <br><br>
                                    Estimated Time of Arrival & Journey Time<br>
                                    Passengers can obtain estimated bus arrival information and journey time of bus routes.
                                    <br><br>
                                    Bookmark<br>
                                    Store frequently used bus stops and locations in the app and get estimated arrival times of routes observing these stops.
                                    <br><br>
                                    Instant Traffic News<br>
                                    Receive instant updates on any temporary traffic arrangements affecting bus services.
                                    <br><br>
                                    Route Sharing<br>
                                    Share the desired route information to your friends.
                                    <br><br>
                                    Landmark Route Search<br>
                                    Find your desired route with the help of more landmarks in the °ßpoint-to-point°® route search function.
                                    <br><br>
                                    Bus Stop Navigation<br>
                                    Find your way to the nearest bus stop by using GPS.
                                    <br><br>
                                    Other Functions<br>
                                    - The lowest bus fare and the fewest enroute stop sorting
                                    - Alight reminder<br>
                                    - New intelligent keyboard for route input
                                    <br><br>
                                    Remarks: Using GPS will use extra battery power`
        transportAppItem.descCN = `最新版本的九巴．龙运手机程式，有全新使用介面，让你可随时随地掌握巴士路线资讯，让你每个行程都更有预算。
                                    <br><br>
                                    功能简介 :<br>
                                    1. 巴士到站时间预报及车程时间<br>
                                    全面掌握所有九巴及龙运巴士路线的预计到站时间，以及预计行车时间
                                    <br><br>
                                    2. 收藏地点<br>
                                    随意收藏多个经常前往的地点，设定最常用的家丶公司和学校地址，只须一按就会即时由你所在位置搜寻最快到达的巴士路线，并提供预计到站时间和其他资讯。
                                    <br><br>
                                    3. 智能路线键盘<br>
                                    按钮跟随输入路线改变，输入巴士路线更方便。
                                    <br><br>
                                    4. 最新交通消息<br>
                                    第一时间掌握最新的交通状况，方便计划行程。
                                    <br><br>
                                    5. 路线分享<br>
                                    与朋友分享路线资讯，联系更容易。
                                    <br><br>
                                    6. 地标搜寻选项<br>
                                    地标选项更全面，可更快捷以点对点方式寻找适合的巴士路线。
                                    <br><br>
                                    7. 巴士站方向导航<br>
                                    透过手机的GPS卫星导航系统，更容易从地图上找出最近的巴士站。
                                    <br><br>
                                    8. 其他功能<br>
                                    - 最平丶最直接巴士路线搜寻<br>
                                    - 落车提示
                                    <br><br>
                                    备注 : 会增加电池用量`
        transportAppItem.descZH = `最新版本的九巴．龍運手機程式，有全新使用介面，讓你可隨時隨地掌握巴士路線資訊，讓你每個行程都更有預算。
                                    <br><br>
                                    功能簡介 :<br>
                                    1. 巴士到站時間預報及車程時間<br>
                                    全面掌握所有九巴及龍運巴士路線的預計到站時間，以及預計行車時間
                                    <br><br>
                                    2. 收藏地點<br>
                                    隨意收藏多個經常前往的地點，設定最常用的家、公司和學校地址，只須一按就會即時由你所在位置搜尋最快到達的巴士路線，並提供預計到站時間和其他資訊。
                                    <br><br>
                                    3. 智能路線鍵盤<br>
                                    按鈕跟隨輸入路線改變，輸入巴士路線更方便。
                                    <br><br>
                                    4. 最新交通消息<br>
                                    第一時間掌握最新的交通狀況，方便計劃行程。
                                    <br><br>
                                    5. 路線分享<br>
                                    與朋友分享路線資訊，聯繫更容易。
                                    <br><br>
                                    6. 地標搜尋選項<br>
                                    地標選項更全面，可更快捷以點對點方式尋找適合的巴士路線。
                                    <br><br>
                                    7. 巴士站方向導航<br>
                                    透過手機的GPS衛星導航系統，更容易從地圖上找出最近的巴士站。
                                    <br><br>
                                    8. 其他功能<br>
                                    - 最平、最直接巴士路線搜尋<br>
                                    - 落車提示
                                    <br><br>
                                    備註 : 會增加電池用量`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();


        transportAppItem.id = 'T004'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = false
        transportAppItem.hotFlag = false
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'CitybusNWFB'
        transportAppItem.nameCN = '新巴城巴'
        transportAppItem.nameZH = '新巴城巴'
        transportAppItem.logoPic = 'https://vgy.me/DZM7JJ.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/KIDjC.i'
        transportAppItem.androiLink = 'com.nwfb'
        transportAppItem.iosPicEN1 = 'https://vgy.me/VIPrrK.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/VIPrrK.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/VIPrrK.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/t4V0vX.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/t4V0vX.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/t4V0vX.jpeg'
        transportAppItem.androidPicEN1 = 'https://vgy.me/4ucEqw.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/4ucEqw.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/4ucEqw.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/8hlJHs.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/8hlJHs.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/8hlJHs.png'
        transportAppItem.editorWordEN = 'This is an offical City Bus app. It provides bus service mainly in Hong Kong Island. Bad interface and few routes provide arrival time.'
        transportAppItem.editorWordCN = '这是官方的城市巴士应用程序。主要在港岛提供巴士服务。界面差，少路线提供到达时间。'
        transportAppItem.editorWordZH = '這是官方的城市巴士應用程序。主要在港島提供巴士服務。界面差，少路線提供到達時間。'
        transportAppItem.descEN = `New World First Bus (“NWFB”) & Citybus App v3.1 is now available. The new user interface design and the enhanced route search function make it more convenient to search for bus routes, estimated time of arrival and timetable. 
                            <br><br>
                            Key Functions:
                            <br><br>
                            * Intelligent Route Search
                            -Display the quickest bus routes at your selected time of travel 
                            -Able to input route number directly at main page. Routeing of different time periods are displayed for precision
                            <br><br>
                            * Next Bus Arrival Time Enquiry
                            -A Next Bus icon is added at main page for a more direct search. ETA of the next 3 arrivals within 60 minutes are displayed.
                            <br><br>
                            * User Friendly Bookmark Function
                            -Locations, route and stop, as well as specified origin and destination can be bookmarked to obtain Estimated Time of Arrival (“ETA”) and perform point-to-point search
                            <br><br>
                            * Push notification for Customer Notice
                            - You will receive push notification when new Customer Notice available on your bookmarked route.
                            <br><br>
                            * Instant Traffic News
                            -Display special traffic news provided by Transport Department
                            <br><br>
                            * Nearby Bus Routes Search
                            -Immediately track your real-time location to show all nearby bus routes.
                            <br><br>
                            * Bus Stop Navigation
                            -Equipped with smart navigation functions guiding you to the desired bus stop.
                            <br><br>
                            * Journey Log Tracker
                            -Remind you to alight in 2 phases (300m/600m). Present the latest 10 alight reminders in a summary; automatically remove each reminder upon arrival at the concerned bus stop`
        transportAppItem.descCN = `新巴城巴手机程式3.0版现已隆重登场，换上全新设计介面，配合全新的智能路线搜寻功能，无论是搜寻乘车路线，抑或实时抵站时间或班次资料，都轻松方便。
                                    <br><br>
                                    重点功能简介：
                                    <br><br>
                                    ＊ 智能路线搜寻
                                    - 自订出发日期及时间，提供搜寻时段中最快抵达目的地之路线
                                    - 主页直接输入路线号码，显示路线在不同时段的行车路线
                                    <br><br>
                                    ＊ Next Bus实时抵站时间查询
                                    - 主页增设抵站时间键，让您直接查询提供实时抵站时间的路线，提供未来60分钟内最近三个班次的抵站时间
                                    <br><br>
                                    ＊ 贴心书签功能
                                    - 可登录地点丶个别路线与巴士站，以及自订的起点终点，让您可以迅速地得悉实时抵站时间和进行点对点搜寻
                                    <br><br>
                                    ＊ 最新交通消息
                                    - 提供运输署的即时交通消息
                                    <br><br>
                                    ＊ 附近巴士路线
                                    - 配合手机定位功能即时追踪您所在位置，邻近路线及其巴士站位置资料一目了然
                                    <br><br>
                                    ＊ 巴士站导航
                                    - 全方位导航，带您前往所选的巴士站
                                    <br><br>
                                    ＊ 落车提示
                                    - 两阶段式(300米/600米)到站提示。巴士行驶中，沿途更新您所在位置，您可预设最多10个到站提示，到站後提示会自动在画面删除，准确到达目的地万无一失`
        transportAppItem.descZH = `新巴城巴手機程式3.0版現已隆重登場，換上全新設計介面，配合全新的智能路線搜尋功能，無論是搜尋乘車路線，抑或實時抵站時間或班次資料，都輕鬆方便。
                                    <br><br>
                                    重點功能簡介：
                                    <br><br>
                                    ＊ 智能路線搜尋
                                    - 自訂出發日期及時間，提供搜尋時段中最快抵達目的地之路線
                                    - 主頁直接輸入路線號碼，顯示路線在不同時段的行車路線
                                    <br><br>
                                    ＊ Next Bus實時抵站時間查詢
                                    - 主頁增設抵站時間鍵，讓您直接查詢提供實時抵站時間的路線，提供未來60分鐘內最近三個班次的抵站時間
                                    <br><br>
                                    ＊ 貼心書籤功能
                                    - 可登錄地點、個別路線與巴士站，以及自訂的起點終點，讓您可以迅速地得悉實時抵站時間和進行點對點搜尋
                                    <br><br>
                                    ＊ 最新交通消息
                                    - 提供運輸署的即時交通消息
                                    <br><br>
                                    ＊ 附近巴士路線
                                    - 配合手機定位功能即時追蹤您所在位置，鄰近路線及其巴士站位置資料一目了然
                                    <br><br>
                                    ＊ 巴士站導航
                                    - 全方位導航，帶您前往所選的巴士站
                                    <br><br>
                                    ＊ 落車提示
                                    - 兩階段式(300米/600米)到站提示。巴士行駛中，沿途更新您所在位置，您可預設最多10個到站提示，到站後提示會自動在畫面刪除，準確到達目的地萬無一失`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T005'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = true
        transportAppItem.hotFlag = true
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'HKTaxi - Taxi Hailing App (HK)'
        transportAppItem.nameCN = 'HKTaxi - 香港Call的士App'
        transportAppItem.nameZH = 'HKTaxi - 香港Call的士App'
        transportAppItem.logoPic = 'https://vgy.me/B6SFP1.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/tMLwN.i'
        transportAppItem.androiLink = 'com.cornermation.calltaxi'
        transportAppItem.iosPicEN1 = 'https://vgy.me/2AO9PW.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/GB1Uha.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/GB1Uha.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/sIv9Hk.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/7OAxje.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/7OAxje.jpeg'
        transportAppItem.androidPicEN1 = 'https://vgy.me/oBNuP1.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/oBNuP1.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/oBNuP1.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/VizinU.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/VizinU.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/VizinU.png'
        transportAppItem.editorWordEN = 'Friendly user interface with 24/7 hotline service. Local people use it too.'
        transportAppItem.editorWordCN = '用户界面好，有24/7热线服务。当地人也使用它。'
        transportAppItem.editorWordZH = '用戶界面好，有24/7熱線服務。當地人也使用它。'
        transportAppItem.descEN = `A tail-hailing app created by Hong Kong people. We know your needs, they are ours too.<br>
                                    HKTaxiApp now sports a brand new look. Looks nice, works even nicer.<br>
                                    24/7 service hotline. It's real people answering!<br>
                                    More Than Taxi - A platform for promoting quality rides with a driver accountability mechanism.<br>
                                    1,000,000+ downloads and 38,000+ registered drivers.`
        transportAppItem.descCN = `真正香港本土设计 CALL 的 App<br>
                                    全新介面 HKTaxi App 隆重登场 ! <br>
                                    设有 24 小时客户服务热线 <br>
                                    More Than Taxi - 致力打造优质的士平台，附设投诉机制 <br>
                                    高达 100 万人次下载及拥有超过 3 万 9 千名司机网络`
        transportAppItem.descZH = `真正香港本土設計 CALL 的 App<br>
                                    全新介面 HKTaxi App 隆重登場 ! <br>
                                    設有 24 小時客戶服務熱線 <br>
                                    More Than Taxi - 致力打造優質的士平台，附設投訴機制 <br>
                                    高達 100 萬人次下載及擁有超過 3 萬 9 千名司機網絡`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T006'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = true
        transportAppItem.hotFlag = true
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'Fly Taxi– HKTaxi Booking App'
        transportAppItem.nameCN = '85飞的Taxi - 香港Call的士App HK特快的士'
        transportAppItem.nameZH = '85飛的Taxi - 香港Call的士App HK特快的士'
        transportAppItem.logoPic = 'https://vgy.me/dxGjZ3.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/0gH6U.i'
        transportAppItem.androiLink = 'com.flytaxi.hktaxi'
        transportAppItem.iosPicEN1 = 'https://vgy.me/26dIvW.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/26dIvW.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/26dIvW.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/YUXR7m.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/YUXR7m.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/YUXR7m.jpeg'
        transportAppItem.androidPicEN1 = 'https://vgy.me/sJ1KGZ.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/sJ1KGZ.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/sJ1KGZ.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/hDFIlU.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/hDFIlU.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/hDFIlU.png'
        transportAppItem.editorWordEN = '';
        transportAppItem.editorWordCN = '';
        transportAppItem.editorWordZH = '';
        transportAppItem.descEN = `Experience the best taxi app in Hong Kong with best rated user experience. More than 300,000 users in Hong Kong and 10,000 drivers ready for your service.
                                    <br><br>
                                    - Best Taxi Application in Hong Kong<br>
                                    - Press a button and get a taxi<br>
                                    - More than 10,000 active drivers<br>
                                    - Over 1M successful rides provided`
        transportAppItem.descCN = `全香港最受欢迎Call的士app, 港九新界的士一call 即到
                                    <br><br>
                                    - 超过 10,000司机已加入飞的车队<br>
                                    - 覆盖市区红的,新界绿的 随时随地打的,叫车,call车<br>
                                    - 的士住返机场,快捷方便<br>
                                    - 完善车队管理,车费 一目了然<br>
                                    - 比传统电召的士以及电话的士call台节省一半时间`
        transportAppItem.descZH = `全香港最受歡迎Call的士app, 港九新界的士一call 即到
                                    <br><br>
                                    - 超過 10,000司機已加入飛的車隊<br>
                                    - 覆蓋市區紅的,新界綠的 隨時隨地打的,叫車,call車<br>
                                    - 的士住返機場,快捷方便<br>
                                    - 完善車隊管理,車費 一目了然<br>
                                    - 比傳統電召的士以及電話的士call台節省一半時間`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T007'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = false
        transportAppItem.goodFlag = true
        transportAppItem.hotFlag = false
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'HK Taxi Fare'
        transportAppItem.nameCN = '香港的士收费'
        transportAppItem.nameZH = '香港的士收費'
        transportAppItem.logoPic = 'https://vgy.me/Iiv1AW.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/K7v01.i'
        transportAppItem.androiLink = '';
        transportAppItem.iosPicEN1 = 'https://vgy.me/SFktrw.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/SFktrw.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/SFktrw.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/hHoMmS.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/hHoMmS.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/hHoMmS.jpeg'
        transportAppItem.androidPicEN1 = '';
        transportAppItem.androidPicCN1 = '';
        transportAppItem.androidPicZH1 = '';
        transportAppItem.androidPicEN2 = '';
        transportAppItem.androidPicCN2 = '';
        transportAppItem.androidPicZH2 = '';
        transportAppItem.editorWordEN = 'Easy too use and accurated'
        transportAppItem.editorWordCN = '容易使用和精确'
        transportAppItem.editorWordZH = '容易使用和精確'
        transportAppItem.descEN = `No more afraid of Scam Taxi Driver!!! 
                                    <br><br>
                                    Travelling by Taxi in Hong Kong is convenient and not expensive comparing to other countries.
                                    <br><br>
                                    The HK Taxi Fare app help you to estimate the Taxi fare in Hong Kong in real time and save money easier. 
                                    <br><br>
                                    Feature: <br>
                                    -One tap to find the route<br>
                                    -Local search that you can just enter ""Hotel"" that it will find out all hotels nearby<br>
                                    -Provide multiple paths to your destination<br>
                                    -Include Tunnel Toll Rate <br>
                                    -Show your current location in real time for comparing the suggested route.<br>
                                    -With route direction explained in detail, show it to the taxi driver when they go to the wrong way<br>
                                    -Voice Translation of address in Cantonese ****GOOD FOR VISTOR IN HK*****<br>
                                    -Traffic Condition in HK, powered by DATA.GOV.HK`
        transportAppItem.descCN = `每次乘坐的士时系唔系好想知道去到目的地大约要几多钱？
                                    <br><br>
                                    用下呢个App 就可以立即知道大约几多钱 同 司机有冇乱行多咗路，心情都定啲。
                                    <br><br>
                                    Call Van 便宜啲 或系 乖的士价钱便宜啲，用个HK Taxi Fare App 一计就知.
                                    <br><br>
                                    HK Taxi Fare App 可以让你随时随地计算香港的士车费，更易节省您的时间和金钱。提供极力推荐的85 折 的士司机的联络电话。
                                    <br><br>
                                    特点<br>
                                    -语音翻译粤语地址 ****香港旅游好帮手*****<br>
                                    -轻按找到路线<br>
                                    -你可以输入“酒店”，它会找出所有的酒店<br>
                                    -提供多条路径到达目的地<br>
                                    -包括隧道收费<br>
                                    -详细路线的方向解释，当他们走错路拿出来让的士司机看<br>
                                    -添加香港交通状况-powered by DATA.GOV.HK`
        transportAppItem.descZH = `每次乘坐的士時係唔係好想知道去到目的地大約要幾多錢？
                                    <br><br>
                                    用下呢個App 就可以立即知道大約幾多錢 同 司機有冇亂行多咗路，心情都定啲。
                                    <br><br>
                                    Call Van 便宜啲 或係 乖的士價錢便宜啲，用個HK Taxi Fare App 一計就知.
                                    <br><br>
                                    HK Taxi Fare App 可以讓你隨時隨地計算香港的士車費，更易節省您的時間和金錢。提供極力推薦的85 折 的士司機的聯絡電話。
                                    <br><br>
                                    特點<br>
                                    -語音翻譯粵語地址 ****香港旅遊好幫手*****<br>
                                    -輕按找到路線<br>
                                    -你可以輸入“酒店”，它會找出所有的酒店<br>
                                    -提供多條路徑到達目的地<br>
                                    -包括隧道收費<br>
                                    -詳細路線的方向解釋，當他們走錯路拿出來讓的士司機看<br>
                                    -添加香港交通狀況-powered by DATA.GOV.HK`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T008'
        transportAppItem.iosFlag = false
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = false
        transportAppItem.hotFlag = false
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'HK TAXI FARE CALTOR'
        transportAppItem.nameCN = '的士收费计算机'
        transportAppItem.nameZH = '的士收費計算機'
        transportAppItem.logoPic = 'https://vgy.me/IFsNsz.png'
        transportAppItem.iosLink = ''
        transportAppItem.androiLink = 'com.HKTaxi'
        transportAppItem.iosPicEN1 = ''
        transportAppItem.iosPicCN1 = ''
        transportAppItem.iosPicZH1 = ''
        transportAppItem.iosPicEN2 = ''
        transportAppItem.iosPicCN2 = ''
        transportAppItem.iosPicZH2 = ''
        transportAppItem.androidPicEN1 = 'https://vgy.me/v1LPAm.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/v1LPAm.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/v1LPAm.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/mMsHF5.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/mMsHF5.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/mMsHF5.png'
        transportAppItem.editorWordEN = 'Not very good user interface but it is ok.'
        transportAppItem.editorWordCN = '用户界面不是很好，但也可以。'
        transportAppItem.editorWordZH = '用戶界面不是很好，但也可以。'
        transportAppItem.descEN = `Calculate taxi fares based on users input<br>
                                    Free to set start and end<br>
                                    Planning a route for the result<br>
                                    Show approximate time required`
        transportAppItem.descCN = `的士收费计算机会根据使用者选择的起点和终点<br>
                                    规划出适合的路线<br>
                                    显示所需的大慨时间<br>
                                    计算出此程的士的收费<br>
                                    使用者可根据喜好<br>
                                    自由设定起点和终点 `
        transportAppItem.descZH = `的士收費計算機會根據使用者選擇的起點和終點<br>
                                    規劃出適合的路線<br>
                                    顯示所需的大慨時間<br>
                                    計算出此程的士的收費<br>
                                    使用者可根據喜好<br>
                                    自由設定起點和終點 `
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T009'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = false
        transportAppItem.goodFlag = true
        transportAppItem.hotFlag = false
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'Ding Ding - Hong Kong Tramways'
        transportAppItem.nameCN = '叮叮 - 香港电车'
        transportAppItem.nameZH = '叮叮 - 香港電車'
        transportAppItem.logoPic = 'https://vgy.me/9QQBWp.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/_wu5db.i'
        transportAppItem.androiLink = ''
        transportAppItem.iosPicEN1 = 'https://vgy.me/sSrMjO.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/cplJg0.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/cplJg0.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/1oQGu9.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/6eNZBH.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/6eNZBH.jpeg'
        transportAppItem.androidPicEN1 = ''
        transportAppItem.androidPicCN1 = ''
        transportAppItem.androidPicZH1 = ''
        transportAppItem.androidPicEN2 = ''
        transportAppItem.androidPicCN2 = ''
        transportAppItem.androidPicZH2 = ''
        transportAppItem.editorWordEN = 'Unoffical tram app but get the official data. Friendly user interface and provide arrival time'
        transportAppItem.editorWordCN = '非官方电车应用程序，但得到官方数据。友好的用户界面，并提供到达时间。'
        transportAppItem.editorWordZH = '非官方電車應用程序，但得到官方數據。友好的用戶界面，並提供到達時間。'
        transportAppItem.descEN = `Ding Ding is the ultimate guide for taking ding ding - the 100+ years old tram fleet in Hong Kong.
                                    <br><br>
                                    • Real time departures, official data from Hong Kong Tramways<br>
                                    • Tells you which tram to catch for your destination<br>
                                    • Stop announcement system<br>
                                    • Stops map, automatically locate nearest stop from your location<br>
                                    • Bookmark the stops, and...<br>
                                    • Map for Pokemon Go, catch'em all during your tramway journey`
        transportAppItem.descCN = `叮叮 - 搭电车好帮手
                                    <br><br>
                                    • 实时电车到站时间<br>
                                    • 搭左咁多年都系唔熟路？叮叮话你知边班电车可以带你去到目的地<br>
                                    • 报站系统，同样适合唔熟路人士<br>
                                    • 车站地图，搵埋最近车站<br>
                                    • Mark低常用车站<br>
                                    • Map for Pokemon Go`
        transportAppItem.descZH = `叮叮 - 搭電車好幫手
                                    <br><br>
                                    • 實時電車到站時間<br>
                                    • 搭左咁多年都係唔熟路？叮叮話你知邊班電車可以帶你去到目的地<br>
                                    • 報站系統，同樣適合唔熟路人士<br>
                                    • 車站地圖，搵埋最近車站<br>
                                    • Mark低常用車站<br>
                                    • Map for Pokemon Go`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T010'
        transportAppItem.iosFlag = false
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = false
        transportAppItem.hotFlag = false
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'Hong Kong Tram Go'
        transportAppItem.nameCN =''
            transportAppItem.nameZH = '香港電車Go'
        transportAppItem.logoPic = 'https://vgy.me/9RRjO2.png'
        transportAppItem.iosLink =''
            transportAppItem.androiLink = 'com.shamrockhk.hktramgo'
        transportAppItem.iosPicEN1 =''
            transportAppItem.iosPicCN1 =''
            transportAppItem.iosPicZH1 =''
            transportAppItem.iosPicEN2 =''
            transportAppItem.iosPicCN2 =''
            transportAppItem.iosPicZH2 =''
            transportAppItem.androidPicEN1 = 'https://vgy.me/S2raOt.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/b4GRf8.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/b4GRf8.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/Mb5yTd.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/E21JDx.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/E21JDx.png'
        transportAppItem.editorWordEN = 'User interface is not very well but it provides enough data e.g. route, arrival time.'
        transportAppItem.editorWordCN = '用户界面不是很好，但它提供足够的数据，例如路线，到达时间。'
        transportAppItem.editorWordZH = '用戶界面不是很好，但它提供足夠的數據，例如路線，到達時間。'
        transportAppItem.descEN = `A handy app to let you retrieve the arrival time of the latest 3 approaching trams with locating [MY LOCATION] by GPS feature.
                                    <br><br>
                                    - Easy to use interface with Google map integration<br>
                                    - Locate the nearby Eastbound and Westbound tram stops<br>
                                    - Street view of the tram stop for quick reference<br>
                                    - Provide the arrival time of the latest 3 approaching trams<br>
                                    - Locate all tram stops in the map`
        transportAppItem.descCN = `一个方便的电车应用程序，通过GPS功能[我的位置]定位，让您检索最近3辆电车的到达时间。
                                <br>
                                - 与谷歌地图整合，界面易於使用<br>
                                - 检索最近的东向和西电车站<br>
                                - 提供电车站附近街景作快速参考<br>
                                - 最近3辆电车的到达时间<br>
                                - 在地图上显示所有电车站的定位`
        transportAppItem.descZH = `一個方便的電車應用程序，通過GPS功能[我的位置]定位，讓您檢索最近3輛電車的到達時間。
                                <br>
                                - 與谷歌地圖整合，界面易於使用<br>
                                - 檢索最近的東向和西電車站<br>
                                - 提供電車站附近街景作快速參考<br>
                                - 最近3輛電車的到達時間<br>
                                - 在地圖上顯示所有電車站的定位`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T011'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = false
        transportAppItem.hotFlag = false
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'Star Ferry Mobile'
        transportAppItem.nameCN = '天星小轮'
        transportAppItem.nameZH = '天星小輪'
        transportAppItem.logoPic = 'https://vgy.me/Fim44L.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/_UOMeb.i'
        transportAppItem.androiLink = 'hk.com.starferry'
        transportAppItem.iosPicEN1 = 'https://vgy.me/HjkvDx.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/HjkvDx.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/HjkvDx.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/exTTNJ.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/exTTNJ.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/exTTNJ.jpeg'
        transportAppItem.androidPicEN1 = 'https://vgy.me/tCoQ7l.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/tCoQ7l.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/tCoQ7l.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/quZE4z.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/quZE4z.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/quZE4z.png'
        transportAppItem.editorWordEN = 'No need to download if you already knew the ferry routes and schedules from their website'
        transportAppItem.editorWordCN = '如果您已经从他们的网站上知道渡轮路线和时间表，不需要下载此程式'
        transportAppItem.editorWordZH = '如果您已經從他們的網站上知道渡輪路線和時間表，不需要下載此程式'
        transportAppItem.descEN = `Star Ferry Mobile brings you useful information relating to its ferry services!
                                    <br><br>
                                    - Ferry Routes<br>
                                    It enables you to find service frequencies, time schedules, journey time, ferry crossing routes and fares.
                                    <br><br>
                                    - Harbour Tours<br>
                                    It enables you to find harbour tour routes, facilities onboard a harbour tour ferry, journey time, departures and their associated fares.
                                    <br><br>
                                    - Service News<br>
                                    Service News will inform subscribers ferry service related news and update on special service arrangements during festive holidays or tropical cyclones.
                                    <br><br>
                                    - Kiosk Directory<br>
                                    Browse information on what kiosks are in Star ferry piers, by piers. 
                                    <br><br>
                                    - Harbour Tour Commentary <br>
                                    This function offers commentary on landmarks, iconic buildings, and attractions at waterfronts on both Hong Kong Island and Kowloon Peninsular along the harbour tour route within Victoria Harbour.`
        transportAppItem.descCN = `天星小轮手机应用程式 供用户随时随地紧贴天星服务资讯。
                                    <br><br>
                                    - 渡轮服务<br>
                                    让你渡轮航线资料，如航航线丶航班及船费资料等。
                                    <br><br>
                                    - 天星维港游<br>
                                    显示航班及票价，让你快捷地一览天星维港游的登船时间丶登船地点及各种船票选择。
                                    <br><br>
                                    - 最新消息<br>
                                    最新消息让乘客了解航班最新资讯，及於风暴或特别节日时的服务安排。
                                    <br><br>
                                    - 商户目录<br>
                                    方便总览位於天星码头内各商户之资料。
                                    <br><br>
                                    - 维港游服务评述<br>
                                    以图示显示维港一带景色，并配合评述简介让你从维港游航程中了解各景点。`
        transportAppItem.descZH = `天星小輪手機應用程式 供用户隨時隨地緊貼天星服務資訊。
                                    <br><br>
                                    - 渡輪服務<br>
                                    讓你渡輪航線資料，如航航線、航班及船費資料等。
                                    <br><br>
                                    - 天星維港遊<br>
                                    顯示航班及票價，讓你快捷地一覽天星維港遊的登船時間、登船地點及各種船票選擇。
                                    <br><br>
                                    - 最新消息<br>
                                    最新消息讓乘客了解航班最新資訊，及於風暴或特別節日時的服務安排。
                                    <br><br>
                                    - 商戶目錄<br>
                                    方便總覽位於天星碼頭內各商戶之資料。
                                    <br><br>
                                    - 維港遊服務評述<br>
                                    以圖示顯示維港一帶景色，並配合評述簡介讓你從維港遊航程中了解各景點。`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T012'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = false
        transportAppItem.hotFlag = false
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'eTraffic News'
        transportAppItem.nameCN = '交通快讯'
        transportAppItem.nameZH = '交通快訊'
        transportAppItem.logoPic = 'https://vgy.me/LFcgHS.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/DhzLdb.i'
        transportAppItem.androiLink = 'com.td.hketraffic'
        transportAppItem.iosPicEN1 = 'https://vgy.me/AdVh8z.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/6Hpt4W.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/6Hpt4W.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/j45xEo.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/1PCyGR.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/1PCyGR.jpeg'
        transportAppItem.androidPicEN1 = 'https://vgy.me/vQuJIB.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/GWPnDY.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/GWPnDY.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/nZPbu4.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/OQ15mS.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/OQ15mS.png'
        transportAppItem.editorWordEN = 'It is a transport department offical app for releasing traffic news. Not very good but reliable.'
        transportAppItem.editorWordCN = '这是一个运输处官方应用程序，用作发布交通新闻。不是很好但可靠。'
        transportAppItem.editorWordZH = '這是一個運輸處官方應用程序，用作發布交通新聞。不是很好但可靠。'
        transportAppItem.descEN = `eTraffic News provides the latest news of traffic incidents and service disruption of public transport services with concise headlines, enabling users to grasp the brief details of the incidents at a glance. Customised notifications for designated categories and muting periods are also available. Moreover, the app lists out the major traffic notices issued by the Transport Department, and will issue alerts to users on the effective dates for advance journey planning.
                                    <br><br>
                                    Features include:<br>
                                    1. Classification according to the incident nature, with concise headlines for easy understanding<br>
                                    2. Options for users to receive alerts according to incident categories<br>
                                    3. Muting period available<br>
                                    4. Options for users to forward the contents to advise relatives/friends of the latest traffic conditions<br>
                                    5. Provision of major traffic notices of the Transport Department, including special traffic arrangements and major road works, with alerts sent on the effective dates<br>
                                    6. Scrolling text bar to draw attention to important messages`
        transportAppItem.descCN = `「交通快讯」提供交通事故及公共运输服务受阻的最新消息，备有精简标题，让用户快速得悉事故概况。用户更可自选接收通知的事故类别和静音时段。应用程式另详列运输署的特别交通通告，并会於生效首日发出提示通知，方便用户及早计划行程。
                                    <br><br>
                                    特点包括：<br>
                                    1. 按交通事故性质分类，备有精简标题，一目了然<br>
                                    2. 用户可按事故类别选择接收通知<br>
                                    3. 设有静音时段<br>
                                    4. 可转发内容提醒亲友最新交通状况<br>
                                    5. 提供运输署主要交通通告，包括特别交通安排及主要道路工程，并於实施首日发出提示通知<br>
                                    6. 以滚动字幕提示重要讯息`
        transportAppItem.descZH = `「交通快訊」提供交通事故及公共運輸服務受阻的最新消息，備有精簡標題，讓用戶快速得悉事故概況。用戶更可自選接收通知的事故類別和靜音時段。應用程式另詳列運輸署的特別交通通告，並會於生效首日發出提示通知，方便用戶及早計劃行程。
                                    <br><br>
                                    特點包括：<br>
                                    1. 按交通事故性質分類，備有精簡標題，一目了然<br>
                                    2. 用戶可按事故類別選擇接收通知<br>
                                    3. 設有靜音時段<br>
                                    4. 可轉發內容提醒親友最新交通狀況<br>
                                    5. 提供運輸署主要交通通告，包括特別交通安排及主要道路工程，並於實施首日發出提示通知<br>
                                    6. 以滾動字幕提示重要訊息`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T013'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = false
        transportAppItem.hotFlag = false
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'TurboJET'
        transportAppItem.nameCN = '喷射飞航 TurboJET'
        transportAppItem.nameZH = '噴射飛航 TurboJET'
        transportAppItem.logoPic = 'https://vgy.me/LvRyic.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/1qj_D.i'
        transportAppItem.androiLink = 'com.turbojet.booking'
        transportAppItem.iosPicEN1 = 'https://vgy.me/S89mee.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/S89mee.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/S89mee.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/aWDwkK.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/aWDwkK.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/aWDwkK.jpeg'
        transportAppItem.androidPicEN1 = 'https://vgy.me/Emt11r.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/Emt11r.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/Emt11r.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/u4Dsgy.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/u4Dsgy.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/u4Dsgy.png'
        transportAppItem.editorWordEN = 'Provide ferry service mainly from Hong Kong to Macau (Outer Harbour Ferry).'
        transportAppItem.editorWordCN = '提供主要从香港到澳门（外港）的渡轮服务。'
        transportAppItem.editorWordZH = '提供主要從香港到澳門（外港）的渡輪服務。'
        transportAppItem.descEN = `With TurboJET Mobile, you'll have instant access to your booking account and receive our latest news and reserve your ticket anywhere anytime. Download now for FREE and enjoy the ultimate convenience in sea travel!
                                    <br><br>
                                    Key features:<br>
                                    - Check sailing schedules and book ferry tickets<br>
                                    - User friendly booking procedures<br>
                                    - Departure date alert function<br>
                                    - Check JETPASS member booking record<br>
                                    - Check smartcard booking record<br>
                                    - Learn about TurboJET latest news`
        transportAppItem.descCN = `透过喷射飞航 Mobile，你可即时查阅你的会员帐户及订票纪录，紧贴我们的最新资讯和订购船票。立即免费下载，享受轻松便捷的海上旅程！
                                    <br><br>
                                    主要功能：<br>
                                    - 航班查询及网上订票<br>
                                    - 简易订票流程<br>
                                    - 出发日期提示功能<br>
                                    - 查阅JETPASS会员订票纪录<br>
                                    - 查阅储值卡订票纪录<br>
                                    - 浏览喷射飞航最新资讯`
        transportAppItem.descZH = `透過噴射飛航 Mobile，你可即時查閱你的會員帳戶及訂票紀錄，緊貼我們的最新資訊和訂購船票。立即免費下載，享受輕鬆便捷的海上旅程！
                                <br><br>
                                主要功能：<br>
                                - 航班查詢及網上訂票<br>
                                - 簡易訂票流程<br>
                                - 出發日期提示功能<br>
                                - 查閱JETPASS會員訂票紀錄<br>
                                - 查閱儲值卡訂票紀錄<br>
                                - 瀏覽噴射飛航最新資訊`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T014'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = false
        transportAppItem.hotFlag = false
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'Cotai Water Jet'
        transportAppItem.nameCN = 'CWJ金光飞航手机售票'
        transportAppItem.nameZH = 'CWJ金光飛航手機售票'
        transportAppItem.logoPic = 'https://vgy.me/q94w0d.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/7xQr1.i'
        transportAppItem.androiLink = 'com.cks.mobileticketsHs'
        transportAppItem.iosPicEN1 = 'https://vgy.me/AK4Aur.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/zA2Rqq.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/zA2Rqq.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/PeWG2x.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/JxiW7R.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/JxiW7R.jpeg'
        transportAppItem.androidPicEN1 = 'https://vgy.me/TdruAB.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/fbgR4g.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/fbgR4g.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/b25UfG.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/TrPGVB.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/TrPGVB.png'
        transportAppItem.editorWordEN = 'Provide ferry service mainly from Hong Kong to Macau (Taipa).'
        transportAppItem.editorWordCN = '提供主要从香港到澳门（氹仔）的渡轮服务。'
        transportAppItem.editorWordZH = '提供主要從香港到澳門（氹仔）的渡輪服務。'
        transportAppItem.descEN = `Don’t want to queue when purchasing tickets? Don’t want to be told no seat when you arrive ferry terminal ? Download the Cotai Water Jet Mobile Ticketing App now !
                                    <br><br>
                                    Check out the sailing information anytime and anywhere, Whether you are at home or on the street, you can now purchase your ticket with ease and convenience.
                                    <br><br>
                                    * Check the sailing information in real time.<br>
                                    * Quick and Safe ticket purchasing service.<br>
                                    * Member/ Non-member purchasing service.`
        transportAppItem.descCN = `唔想排队买船飞? 唔想去到先知无位! 马上下载金光飞航手机购票程式!<br>
                                    随时随地查询航班资讯，无论你身在家中或街外，只需要经过简单的步骤便可完成购票。<br>
                                    *实时航班资讯<br>
                                    *最快捷最安全购票服务<br>
                                    *会员/非会员购票`
        transportAppItem.descZH = `唔想排隊買船飛? 唔想去到先知無位! 馬上下載金光飛航手機購票程式!<br>
                                    隨時隨地查詢航班資訊，無論你身在家中或街外，只需要經過簡單的步驟便可完成購票。<br>
                                    *實時航班資訊<br>
                                    *最快捷最安全購票服務<br>
                                    *會員/非會員購票`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

        transportAppItem.id = 'T015'
        transportAppItem.iosFlag = true
        transportAppItem.androidFlag = true
        transportAppItem.goodFlag = true
        transportAppItem.hotFlag = true
        transportAppItem.saveFlag = false
        transportAppItem.nameEN = 'Uber'
        transportAppItem.nameCN = 'Uber 优步，全球便捷搭乘'
        transportAppItem.nameZH = 'Uber 優步，全球便捷搭乘'
        transportAppItem.logoPic = 'https://vgy.me/2ARWwq.png'
        transportAppItem.iosLink = 'https://appsto.re/hk/4hz-v.i'
        transportAppItem.androiLink = 'com.ubercab'
        transportAppItem.iosPicEN1 = 'https://vgy.me/2Bxyzi.jpeg'
        transportAppItem.iosPicCN1 = 'https://vgy.me/3JXGe4.jpeg'
        transportAppItem.iosPicZH1 = 'https://vgy.me/erFdRj.jpeg'
        transportAppItem.iosPicEN2 = 'https://vgy.me/4p52J4.jpeg'
        transportAppItem.iosPicCN2 = 'https://vgy.me/jxvosR.jpeg'
        transportAppItem.iosPicZH2 = 'https://vgy.me/YbSvkj.jpeg'
        transportAppItem.androidPicEN1 = 'https://vgy.me/CwF8CV.png'
        transportAppItem.androidPicCN1 = 'https://vgy.me/mVZF1b.png'
        transportAppItem.androidPicZH1 = 'https://vgy.me/IEFWEf.png'
        transportAppItem.androidPicEN2 = 'https://vgy.me/8i4jxu.png'
        transportAppItem.androidPicCN2 = 'https://vgy.me/EyQe4i.png'
        transportAppItem.androidPicZH2 = 'https://vgy.me/r1gnkp.png'
        transportAppItem.editorWordEN = 'Famous app speak for itself.'
        transportAppItem.editorWordCN = '着名的应用程序，不用多说。'
        transportAppItem.editorWordZH = '著名的應用程序，不用多說。'
        transportAppItem.descEN = `Uber is a ridesharing app for fast, reliable rides in minutes—day or night. There’s no need to park or wait for a taxi or bus. With Uber, you just tap to request a ride, and it’s easy to pay with credit or cash in select cities.
                                    <br><br>
                                    Whether you’re going to the airport or across town, there’s an Uber for every occasion. Uber is available in more than 500 cities worldwide—download the app and take your first trip today.
                                    <br><br>
                                    Requesting your Uber is easy—here’s how it works:<br>
                                    - Just open the app and tell us where you’re going.<br>
                                    - The app uses your location so your driver knows where to pick you up.<br>
                                    - You’ll see your driver’s picture, vehicle details, and can track their arrival on the map.<br>
                                    - Payment can be made by credit card, cash in select cities, Apple Pay, PayPal, and more.<br>
                                    - After the ride, you can rate your driver and provide feedback to help us improve the Uber experience. You’ll also get a receipt by email.`
        transportAppItem.descCN = `只需一键轻触，您即可在全球超过500个城市享受值得信赖的便捷搭乘服务。（服务地区不含中国地区）
                                    <br><br>
                                    Uber 优步是个共乘应用程式，提供不分日夜，几分钟内就可享受的快速安全的交通服务。您不再需要烦恼停车问题，也不需苦等计程车或公车。有了Uber(优步)，只需轻按就可预约车辆，轻松使用信用卡付费，或在指定城市您可采用现金支付。<br>
                                    无论您是前往机场或在城市中移动，Uber 优步 都为您准备好优质并值得信赖的乘车需求。Uber 优步 已在全球超过500个城市提供服务，请下载App，立刻体验您第一次的优质搭乘服务。
                                    <br><br>
                                    预约Uber 优步 非常简单，请看以下说明：<br>
                                    只要开启应用程式，告诉我们您的目的地。<br>
                                    应用程式会自动判读您所在位置，Uber 夥伴司机就会知道要在何处载您上车。<br>
                                    您会看到司机照片与车辆的详细资讯，并在地图上追踪该辆车目前行驶至何处。<br>
                                    可用信用卡丶现金(限指定城市)丶Apple Pay, PayPal 及更多方式付款。<br>
                                    搭乘结束後，您可以为司机评分，提供意见回馈让我们更增进搭乘Uber 优步 的体验。您也会收到以电子邮件寄送的收据。`
        transportAppItem.descZH = `只需一鍵輕觸，您即可在全球超過500個城市享受值得信賴的便捷搭乘服務。（服務地區不含中國地區）
                                    <br><br>
                                    Uber 優步是個共乘應用程式，提供不分日夜，幾分鐘內就可享受的快速安全的交通服務。您不再需要煩惱停車問題，也不需苦等計程車或公車。有了Uber(優步)，只需輕按就可預約車輛，輕鬆使用信用卡付費，或在指定城市您可採用現金支付。<br>
                                    無論您是前往機場或在城市中移動，Uber 優步 都為您準備好優質並值得信賴的乘車需求。Uber 優步 已在全球超過500個城市提供服務，請下載App，立刻體驗您第一次的優質搭乘服務。
                                    <br><br>
                                    預約Uber 優步 非常簡單，請看以下說明：<br>
                                    只要開啟應用程式，告訴我們您的目的地。<br>
                                    應用程式會自動判讀您所在位置，Uber 夥伴司機就會知道要在何處載您上車。<br>
                                    您會看到司機照片與車輛的詳細資訊，並在地圖上追蹤該輛車目前行駛至何處。<br>
                                    可用信用卡、現金(限指定城市)、Apple Pay, PayPal 及更多方式付款。<br>
                                    搭乘結束後，您可以為司機評分，提供意見回饋讓我們更增進搭乘Uber 優步 的體驗。您也會收到以電子郵件寄送的收據。`
        transportAppItem.funFactFlag = false
        transportAppItem.funFactPic1 = ''
        transportAppItem.funFactPic2 = ''
        transportAppItem.funFactDescEN = ''
        transportAppItem.funFactDescCN = ''
        transportAppItem.funFactDescZH = ''

        this.list.push(transportAppItem);
        transportAppItem = new AppItem();

    }



}