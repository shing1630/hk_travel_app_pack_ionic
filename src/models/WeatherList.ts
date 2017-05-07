import { Injectable } from '@angular/core';
import { AppItem } from "./AppItem";

@Injectable()
export class WeatherList {

    public list: AppItem[] = [];

    constructor() {
        this.init();
    }

    init() {

        let weatherAppItem = new AppItem();

        weatherAppItem.id = 'W001'
        weatherAppItem.iosFlag = true
        weatherAppItem.androidFlag = true
        weatherAppItem.goodFlag = true
        weatherAppItem.hotFlag = true
        weatherAppItem.saveFlag = false
        weatherAppItem.nameEN = 'MyObservatory'
        weatherAppItem.nameCN = '我的天文台'
        weatherAppItem.nameZH = '我的天文台'
        weatherAppItem.logoPic = 'https://vgy.me/aosguF.png'
        weatherAppItem.iosLink = 'https://appsto.re/hk/N0uIv.i'
        weatherAppItem.androiLink = 'hko.MyObservatory_v1_0'
        weatherAppItem.iosPicEN1 = 'https://vgy.me/AmQ6c9.jpeg'
        weatherAppItem.iosPicCN1 = 'https://vgy.me/vO90jh.jpeg'
        weatherAppItem.iosPicZH1 = 'https://vgy.me/vO90jh.jpeg'
        weatherAppItem.iosPicEN2 = 'https://vgy.me/V76JXw.jpeg'
        weatherAppItem.iosPicCN2 = 'https://vgy.me/3LDxuQ.jpeg'
        weatherAppItem.iosPicZH2 = 'https://vgy.me/3LDxuQ.jpeg'
        weatherAppItem.androidPicEN1 = 'https://vgy.me/OiIAtD.png'
        weatherAppItem.androidPicCN1 = 'https://vgy.me/yfOntf.png'
        weatherAppItem.androidPicZH1 = 'https://vgy.me/yfOntf.png'
        weatherAppItem.androidPicEN2 = 'https://vgy.me/gH7TWw.png'
        weatherAppItem.androidPicCN2 = 'https://vgy.me/w7YZiC.png'
        weatherAppItem.androidPicZH2 = 'https://vgy.me/w7YZiC.png'
        weatherAppItem.editorWordEN = 'Offical weather app. Provide first-hand weather information.'
        weatherAppItem.editorWordCN = '官方天气应用程序提供第一手天气信息。'
        weatherAppItem.editorWordZH = '官方天氣應用程序提供第一手天氣信息。'
        weatherAppItem.descEN = `The “MyObservatory” is one of the most popular weather app providing location-specific weather service in Hong Kong. If permission is granted to determine user’s location, temperature, relative humidity, rainfall, wind direction and speed, as well as weather photograph collected from nearby weather stations will be displayed. 
                                <br><br>
                                Note to users:<br>
                                1. The notificaiton service of weather warnings, Special Weather Tips, and Location-based Rain Forecast. The Hong Kong Observatory cannot guarantee the reception of the above notifications by users. Users should not rely on the mobile app as the only means for reception of important weather information. Depending on factors such as network usage and quality of user's mobile phone connection, it may take 5 to 20 minuntes or even longer for the app to receive the notification after it is issued by the Hong Kong Observatory. 
                                <br><br>
                                2. Use of Location-based Rain Forecast notification will increase the battery usage and data download slightly. Users who wish to save battery usage of the app may enable the notification function in rainy days and before outdoor activities, and disable the function in sunny days and after finishing the outdoor activities. Meanwhile, selecting options of less frequent update and lower postion accuracy in the advanced settings of the notification function may also save battery usage.
                                <br><br>
                                3. Although the “MyObservatory” is a free app, user will be charged by their mobile network service provider on the use of data service. These charges can become very expensive on roaming. Please ensure that the option of “Data Roaming” have been disabled in the settings of your mobile devices. 
                                <br><br>
                                4. In the “My Location Settings”, users can opt for using the automatic location service provided by the smartphone, or designating “My Location” on the map themselves. This location will be displayed on the main page and in “My Weather Report”. The meteorological data displayed on the same page is provided by meteorological stations nearby, and is not necessarily from a station in the same region. In case meteorological data is not available from nearby stations, data from other meteorological stations at headquarter of the Observatory, King’s Park, and Star Ferry will be used instead. Meanwhile, “Hong Kong Observatory” will be used as “My Location”.
                                <br><br>
                                5. The location displayed in the function of ""My Weather Report"" is provided by third party provider. The Hong Kong Observatory does not guarantee the accuracy of the information.
                                <br><br>
                                6. Owing to the difference in topography and altitude between the weather station and user's location, and also the error in the estimated postiion given by the mobile device, users should note that weather information displayed on the app may be different from actual conditions in using the ""MyObservatory"".
                                <br><br>
                                7. The maximum and minimum temperatures displayed on the main page and the ""My Weather Report"" are today's forecast temperature specific to ""My Location"". 
                                <br><br>
                                8. The clock on the main page of the app is displayed with HKT synchronizing automatically to the Observatory's Internet Time Server, and may not be the same as the time displayed on the smartphone.`
        weatherAppItem.descCN = `「我的天文台」是其中一个广受欢迎的天气应用程式，於香港提供定点天气服务。若用户容许程式查询位置，此应用程式会显示最接近用户位置的气象站所提供的温度丶相对湿度丶雨量丶风向丶风速及天气照片等。
                                用户注意事项：
                                <br><br>
                                1. 天气警告丶特别天气提示及定点降雨预报等通知服务，香港天文台不能确保用户能收到以上通知。 用户不应以手机程式的通知服务作唯一方法接收重要的天气信息。同时，於天文台发出通知至被应用程式接收，视乎网络当时的使用量及用户手机连线质素等等因素，可能需时五至二十分钟，或更长时间。
                                <br><br>
                                2. 使用定点降雨预报通知服务会稍为增加耗电量及数据下载量。用户若希望节省程式用电量，可在雨天或於进行户外活动前开启通知服务功能，并於晴天及完成户外活动後关上该功能。此外，使用定点降雨预报通知服务时若於进阶选项内选用较疏更新频率及较低位置准确度亦可节省用电量。
                                <br><br>
                                3. 「我的天文台」是一个免费程式，但用户需向流动网络服务供应商缴付使用数据的费用。如使用漫游服务时，有关费用或会十分高昂。请确保你流动装置上的「资料漫游」选项已经关上。
                                <br><br>
                                4. 用户可於「设定我的位置」内，选择手机提供的自动定位服务，或自行於地图上去设定「我的位置」。该位置会於首页及「我的天气报告」功能内显示。同页显示的气象数据会由附近的气象站提供，但并不表示气象站必然位於同一地区。若附近的气象站没有数据提供时，会使用天文台总部丶京士柏及天星码头气象站的数据代替。同时，「我的位置」会显示为「香港天文台」。
                                <br><br>
                                5. 「我的天气报告」功能内显示的位置资料由第三方供应商提供，香港天文台并不保证其的准确性。
                                <br><br>
                                6. 由於气象站及用户的位置在地形及高度上的差异，而流动装置估算的位置亦与实际有偏差，所以用户在使用「我的天文台」时请注意应用程式显示的天气资料可能与你所在地的实际情况有分别。
                                <br><br>
                                7. 於首页及「我的天气报告」功能内显示的最高最低温度，是当日「我的位置」的温度预测。
                                <br><br>
                                8. 本应用程式首页的时钟显示香港时间共并会与天文台的网上时间伺服器自动校对，时钟显示的时间可能会与智能手机上的时间不同。`
        weatherAppItem.descZH = `「我的天文台」是其中一個廣受歡迎的天氣應用程式，於香港提供定點天氣服務。若用戶容許程式查詢位置，此應用程式會顯示最接近用戶位置的氣象站所提供的溫度、相對濕度、雨量、風向、風速及天氣照片等。
                                用戶注意事項：
                                <br><br>
                                1. 天氣警告、特別天氣提示及定點降雨預報等通知服務，香港天文台不能確保用戶能收到以上通知。 用戶不應以手機程式的通知服務作唯一方法接收重要的天氣信息。同時，於天文台發出通知至被應用程式接收，視乎網絡當時的使用量及用戶手機連線質素等等因素，可能需時五至二十分鐘，或更長時間。
                                <br><br>
                                2. 使用定點降雨預報通知服務會稍為增加耗電量及數據下載量。用戶若希望節省程式用電量，可在雨天或於進行戶外活動前開啟通知服務功能，並於晴天及完成戶外活動後關上該功能。此外，使用定點降雨預報通知服務時若於進階選項內選用較疏更新頻率及較低位置準確度亦可節省用電量。
                                <br><br>
                                3. 「我的天文台」是一個免費程式，但用戶需向流動網絡服務供應商繳付使用數據的費用。如使用漫遊服務時，有關費用或會十分高昂。請確保你流動裝置上的「資料漫遊」選項已經關上。
                                <br><br>
                                4. 用戶可於「設定我的位置」內，選擇手機提供的自動定位服務，或自行於地圖上去設定「我的位置」。該位置會於首頁及「我的天氣報告」功能內顯示。同頁顯示的氣象數據會由附近的氣象站提供，但並不表示氣象站必然位於同一地區。若附近的氣象站沒有數據提供時，會使用天文台總部、京士柏及天星碼頭氣象站的數據代替。同時，「我的位置」會顯示為「香港天文台」。
                                <br><br>
                                5. 「我的天氣報告」功能內顯示的位置資料由第三方供應商提供，香港天文台並不保證其的準確性。
                                <br><br>
                                6. 由於氣象站及用戶的位置在地形及高度上的差異，而流動裝置估算的位置亦與實際有偏差，所以用戶在使用「我的天文台」時請注意應用程式顯示的天氣資料可能與你所在地的實際情況有分別。
                                <br><br>
                                7. 於首頁及「我的天氣報告」功能內顯示的最高最低溫度，是當日「我的位置」的溫度預測。
                                <br><br>
                                8. 本應用程式首頁的時鐘顯示香港時間共並會與天文台的網上時間伺服器自動校對，時鐘顯示的時間可能會與智能手機上的時間不同。`
        weatherAppItem.funFactFlag = false
        weatherAppItem.funFactPic1 = ''
        weatherAppItem.funFactPic2 = ''
        weatherAppItem.funFactDescEN = ''
        weatherAppItem.funFactDescCN = ''
        weatherAppItem.funFactDescZH = ''

        this.list.push(weatherAppItem);
        weatherAppItem = new AppItem();

        weatherAppItem.id = 'W002'
        weatherAppItem.iosFlag = true
        weatherAppItem.androidFlag = true
        weatherAppItem.goodFlag = true
        weatherAppItem.hotFlag = false
        weatherAppItem.saveFlag = false
        weatherAppItem.nameEN = 'HK Rain'
        weatherAppItem.nameCN = '香港雨 HK Rain'
        weatherAppItem.nameZH = '香港雨 HK Rain'
        weatherAppItem.logoPic = 'https://vgy.me/H2Br2V.png'
        weatherAppItem.iosLink = 'https://appsto.re/hk/zMbVib.i'
        weatherAppItem.androiLink = 'com.hkrain0730'
        weatherAppItem.iosPicEN1 = 'https://vgy.me/XYpErX.png'
        weatherAppItem.iosPicCN1 = 'https://vgy.me/w49uSs.png'
        weatherAppItem.iosPicZH1 = 'https://vgy.me/w49uSs.png'
        weatherAppItem.iosPicEN2 = 'https://vgy.me/knL0GV.png'
        weatherAppItem.iosPicCN2 = 'https://vgy.me/E0yc4O.png'
        weatherAppItem.iosPicZH2 = 'https://vgy.me/E0yc4O.png'
        weatherAppItem.androidPicEN1 = 'https://vgy.me/XYpErX.png'
        weatherAppItem.androidPicCN1 = 'https://vgy.me/w49uSs.png'
        weatherAppItem.androidPicZH1 = 'https://vgy.me/w49uSs.png'
        weatherAppItem.androidPicEN2 = 'https://vgy.me/knL0GV.png'
        weatherAppItem.androidPicCN2 = 'https://vgy.me/E0yc4O.png'
        weatherAppItem.androidPicZH2 = 'https://vgy.me/E0yc4O.png'
        weatherAppItem.editorWordEN = 'Predict the weather by analyzing the past weather data. Also provide 9 day weather forecast.'
        weatherAppItem.editorWordCN = '通过分析过去的天气数据去预测天气。也提供九天的天气预测'
        weatherAppItem.editorWordZH = '通過分析過去的天氣數據去預測天氣。也提供九天的天氣預測'
        weatherAppItem.descEN = `Planning for an outdoor activity but worry about the weather? Do you want to know the possibility of rain on a particular day?
                                <br><br>
                                No problem! Our app can provide you reference information and prediction of rain, temperature and humidity in the future two years by analyzing the past weather data from Hong Kong Observatory since 1900.
                                <br><br>
                                The prediction help you decide the outdoor activity date and avoid the rain. Try it out right now!
                                <br><br>
                                (The prediction is for reference only)`
        weatherAppItem.descCN = `筹备下周以至下年的户外活动，想知道当天下雨的机率吗？
                                <br><br>
                                没问题！我们透过分析自1900年至今的香港天文台天气数据，计算并预测未来2年的雨量丶温度和湿度！
                                <br><br>
                                预测结果可以帮助你决定户外活动的日子，避免下雨。不要犹疑，立即去尝试吧！
                                <br><br>
                                (以上预测并非精密科学，结果仅供参考。)`
        weatherAppItem.descZH = `籌備下周以至下年的戶外活動，想知道當天下雨的機率嗎？
                                <br><br>
                                沒問題！我們透過分析自1900年至今的香港天文台天氣數據，計算並預測未來2年的雨量、溫度和濕度！
                                <br><br>
                                預測結果可以幫助你決定戶外活動的日子，避免下雨。不要猶疑，立即去嘗試吧！
                                <br><br>
                                (以上預測並非精密科學，結果僅供參考。)`
        weatherAppItem.funFactFlag = false
        weatherAppItem.funFactPic1 = ''
        weatherAppItem.funFactPic2 = ''
        weatherAppItem.funFactDescEN = ''
        weatherAppItem.funFactDescCN = ''
        weatherAppItem.funFactDescZH = ''

        this.list.push(weatherAppItem);
        weatherAppItem = new AppItem();

    }



}