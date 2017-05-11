import { OpaqueToken } from '@angular/core';
import { AppItem } from "./../models/AppItem";

export let OT_GV = new OpaqueToken('gv');

export interface IGV {
    isTestingAdmob: boolean;
    DEPLOY_CHANNEL: string;
    ADMOB_MAX_NUMBER: number;
    admobCount: number;
    gLangInd: string;
    gAppItemInd: string;
    myAppItemList: AppItem[];
    myAppItemMap: Map<string, AppItem>;

    isIOS: boolean,
    isAndroid: boolean,

    // Lange
    ERROR_EN: string;
    ERROR_ZH: string;
    ERROR_CN: string;
    SORRY_SOMETHING_WRONG_EN: string;
    SORRY_SOMETHING_WRONG_ZH: string;
    SORRY_SOMETHING_WRONG_CN: string;
    NO_NETWORK_CONNECTION_EN: string;
    NO_NETWORK_CONNECTION_ZH: string;
    NO_NETWORK_CONNECTION_CN: string;
    NO_UPDATE_AVAILABLE_EN: string;
    NO_UPDATE_AVAILABLE_CN: string;
    NO_UPDATE_AVAILABLE_ZH: string;
    UPDATE_AVAILABLE_EN: string;
    UPDATE_AVAILABLE_CN: string;
    UPDATE_AVAILABLE_ZH: string;
    DOWNLOADING_TAKE_MIN_EN: string;
    DOWNLOADING_TAKE_MIN_CN: string;
    DOWNLOADING_TAKE_MIN_ZH: string;
    RELOAD_EN: string;
    RELOAD_CN: string;
    RELOAD_ZH: string;
    CLEAR_ALL_MY_FAVOURITE_EN: string;
    CLEAR_ALL_MY_FAVOURITE_CN: string;
    CLEAR_ALL_MY_FAVOURITE_ZH: string;
    YES_EN: string;
    YES_CN: string;
    YES_ZH: string;
    NO_EN: string;
    NO_CN: string;
    NO_ZH: string;

    AD_MOB_ID_BANNER: string;
    AD_MOB_ID_INTER: string;
    AD_MOB_ID_INTER_VIDEO: string;
    AD_MOB_ID_VIDEO: string;
}

export const IGV: IGV = {

    // Change it to false when production
    isTestingAdmob: false,
    DEPLOY_CHANNEL: 'dev',
    // Change it to false when production

    ADMOB_MAX_NUMBER: 8,
    admobCount: 8,

    gLangInd: '',
    gAppItemInd: '',

    myAppItemList: [],

    myAppItemMap: null,

    isIOS: false,
    isAndroid: false,

    // Lang
    ERROR_EN: 'ERROR!',
    ERROR_CN: '错误!',
    ERROR_ZH: '錯誤!',
    SORRY_SOMETHING_WRONG_EN: 'Sorry, something went wrong...',
    SORRY_SOMETHING_WRONG_CN: '抱歉，出了一些问题...',
    SORRY_SOMETHING_WRONG_ZH: '抱歉，出了一些問題...',

    NO_NETWORK_CONNECTION_EN: 'No Network Connection...',
    NO_NETWORK_CONNECTION_CN: '没有网路...',
    NO_NETWORK_CONNECTION_ZH: '沒有網路...',

    NO_UPDATE_AVAILABLE_EN: 'No update available',
    NO_UPDATE_AVAILABLE_CN: '没有更新',
    NO_UPDATE_AVAILABLE_ZH: '沒有更新',

    UPDATE_AVAILABLE_EN: 'Update available!',
    UPDATE_AVAILABLE_CN: '有更新！',
    UPDATE_AVAILABLE_ZH: '有更新！',

    DOWNLOADING_TAKE_MIN_EN: 'Downloading... This will take a few minutes!',
    DOWNLOADING_TAKE_MIN_CN: 'Downloading... This will take a few minutes!',
    DOWNLOADING_TAKE_MIN_ZH: 'Downloading... This will take a few minutes!',

    RELOAD_EN: 'Reload',
    RELOAD_CN: '重载',
    RELOAD_ZH: '重載',

    CLEAR_ALL_MY_FAVOURITE_EN: 'Clear All My Favourite?',
    CLEAR_ALL_MY_FAVOURITE_CN: '清空我的最爱?',
    CLEAR_ALL_MY_FAVOURITE_ZH: '清空我的最愛?',
    YES_EN: 'Yes',
    YES_CN: '是',
    YES_ZH: '是',
    NO_EN: 'No',
    NO_CN: '否',
    NO_ZH: '否',

    AD_MOB_ID_BANNER: '',
    AD_MOB_ID_INTER: '',
    AD_MOB_ID_INTER_VIDEO: '',
    AD_MOB_ID_VIDEO: ''
};

