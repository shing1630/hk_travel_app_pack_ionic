import { Injectable} from '@angular/core';
import { AppItem } from "./AppItem";

@Injectable()
export class TransportList {

    public list: AppItem[] = [];

    constructor() {
        this.init();
     }

    init() {
        // MTR
        let mtr = new AppItem();
        mtr.id = 'T001';
        mtr.nameEN = 'MTR';
        mtr.nameCN = '港铁 MTR';
        mtr.nameZH = '港鐵 MTR';
        mtr.logoPic = 'https://img.eservice-hk.net/upload/2017/04/26/161956_bc05e328de8beb0e44e54dfed21b80ca.jpg';
        mtr.iosPic1 = 'https://img.eservice-hk.net/upload/2017/04/26/162123_f9dff8b35171ab83bdbff5210122cd89.jpeg';
        mtr.iosPic2 = 'https://img.eservice-hk.net/upload/2017/04/26/162223_6d9e3f981ac6d907792f96e014d731eb.jpeg';
        mtr.androidPlc1 = 'https://img.eservice-hk.net/upload/2017/04/26/162123_f9dff8b35171ab83bdbff5210122cd89.jpeg';
        mtr.androidPlc2 = 'https://img.eservice-hk.net/upload/2017/04/26/162223_6d9e3f981ac6d907792f96e014d731eb.jpeg';
        mtr.iosLink = 'https://itunes.apple.com/hk/app/mtr-mobile/id369295276';
        mtr.androiLink = 'https://play.google.com/store/apps/details?id=com.mtr.mtrmobile';
        mtr.descEN = 'Good';
        mtr.descCN = '好';
        mtr.descZH = '好';
        mtr.editorWordEN = 'MTR Mobile brings you all sorts of useful information relating to MTR trips to help you plan your journey effectively! Train Trip Planner Search for your route along the MTR by simply tapping on the MTR route map and choosing your starting location and desired destination. Information about your route, including fare information, recommended routing, estimated journey time, interchange guide/platform, first/last train schedule, station services, etc. will be displayed accordingly. In addition of MTR stations, you can also select station exits and see maps of popular locations near the MTR network.';
        mtr.editorWordCN = '铁路行程指南 搜寻介面以港铁路綫图为本，直接点选起点和目的地车站後，即时显示多项港铁重要旅程资讯，包括车费丶建议路綫丶预计乘车时间丶转綫指示及月台编号丶头班车及尾班车资料等。除点选车站外，更可选择车站出口及附近景点作起点及目的地，计划路綫更得心应手。';
        mtr.editorWordZH = '鐵路行程指南 搜尋介面以港鐵路綫圖為本，直接點選起點和目的地車站後，即時顯示多項港鐵重要旅程資訊，包括車費、建議路綫、預計乘車時間、轉綫指示及月台編號、頭班車及尾班車資料等。除點選車站外，更可選擇車站出口及附近景點作起點及目的地，計劃路綫更得心應手。';
        
        // Test
        let test = new AppItem();
        test.id = 'T002';
        test.nameEN = 'Test';
        test.nameCN = '铁 Test';
        test.nameZH = '鐵 Test';
        test.logoPic = 'https://img.eservice-hk.net/upload/2017/04/26/161956_bc05e328de8beb0e44e54dfed21b80ca.jpg';
        test.iosPic1 = 'https://img.eservice-hk.net/upload/2017/04/26/162123_f9dff8b35171ab83bdbff5210122cd89.jpeg';
        test.iosPic2 = 'https://img.eservice-hk.net/upload/2017/04/26/162223_6d9e3f981ac6d907792f96e014d731eb.jpeg';
        test.androidPlc1 = 'https://img.eservice-hk.net/upload/2017/04/26/162123_f9dff8b35171ab83bdbff5210122cd89.jpeg';
        test.androidPlc2 = 'https://img.eservice-hk.net/upload/2017/04/26/162223_6d9e3f981ac6d907792f96e014d731eb.jpeg';
        test.iosLink = 'https://itunes.apple.com/hk/app/mtr-mobile/id369295276';
        test.androiLink = 'https://play.google.com/store/apps/details?id=com.mtr.mtrmobile';
        test.descEN = 'Test';
        test.descCN = '以港铁路';
        test.descZH = '面以港鐵路綫圖';
        test.editorWordEN = 'help you plan your journey effectively! Train Trip Planner Search for your route along the MTR by simply tapping on the MTR route map and choosing your starting location and desired destination. Information about your route, including fare information, recommended routing, estimated journey time, interchange guide/platform, first/last train schedule, station services, etc. will be displayed accordingly. In addition of MTR stations, you can also select station exits and see maps of popular locations near the MTR network.';
        test.editorWordCN = '包括车费丶建议路綫丶预计乘车时间丶转綫指示及月台编号丶头班车及尾班车资料等。除点选车站外，更可选择车站出口及附近景点作起点及目的地，计划路綫更得心应手。';
        test.editorWordZH = '包括車費、建議路綫、預計乘車時間、轉綫指示及月台編號、頭班車及尾班車資料等。除點選車站外，更可選擇車站出口及附近景點作起點及目的地，計劃路綫更得心應手。';

        this.list.push(mtr);

        this.list.push(test);

        // Test
        test = new AppItem();
        test.nameEN = 'Test2';
        test.logoPic = 'https://img.eservice-hk.net/upload/2017/04/26/234021_01984a199964cd97522c4d3c23e1a9f6.png';
        this.list.push(test);

        test = new AppItem();
        test.nameEN = 'Test3';
        test.logoPic = 'https://img.eservice-hk.net/upload/2017/04/26/234044_fc1afa35f9fb2143ac8cf6960093865b.png';
        this.list.push(test);

        test = new AppItem();
        test.nameEN = 'Test4';
        test.logoPic = 'https://img.eservice-hk.net/upload/2017/04/26/234058_1c351754871d815810c025c30f45eb8f.png';
        this.list.push(test);

        test = new AppItem();
        test.nameEN = 'Test5';
        test.logoPic = 'https://img.eservice-hk.net/upload/2017/04/26/234113_7a88555d9548f0cd46f18d3f48e89c93.png';
        this.list.push(test);

        test = new AppItem();
        test.nameEN = 'Test6';
        test.logoPic = 'https://img.eservice-hk.net/upload/2017/04/26/234130_e6cad4595f83c3b0012494ac4353a4a4.png';
        this.list.push(test);

        test = new AppItem();
        test.nameEN = 'Test7';
        test.logoPic = 'https://img.eservice-hk.net/upload/2017/04/26/234145_0073d275ef6c931e87b955e549d63591.png';
        this.list.push(test);

        test = new AppItem();
        test.nameEN = 'Test8';
        test.logoPic = 'https://img.eservice-hk.net/upload/2017/04/26/234208_8fe18434a8e7f3c5795d5b54ea038685.png';
        this.list.push(test);

        test = new AppItem();
        test.nameEN = 'Test9';
        test.logoPic = 'https://img.eservice-hk.net/upload/2017/04/26/234220_56f669924b0d0414ff2e0daaf962af9f.png';
        this.list.push(test);
    }

   

}