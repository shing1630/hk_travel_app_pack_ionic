import { OpaqueToken } from '@angular/core';

export let OT_GV = new OpaqueToken('gv');

export interface IGV {
    isTestingAdmob: boolean;
    DEPLOY_CHANNEL: string;
    ADMOB_MAX_NUMBER: number;
    admobCount: number;
    gLangInd: string;

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
    RELOAD_EN: string;
    RELOAD_CN: string;
    RELOAD_ZH: string;

    AD_MOB_ID_BANNER: string;
    AD_MOB_ID_INTER: string;
}

export const IGV: IGV = {

    // Change it to true when production
    isTestingAdmob: true,
    DEPLOY_CHANNEL: 'dev',
    // Change it to true when production

    ADMOB_MAX_NUMBER: 5,
    admobCount: 5,

    gLangInd: '',

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

    RELOAD_EN: 'Reload',
    RELOAD_CN: '重载',
    RELOAD_ZH: '重載',

    AD_MOB_ID_BANNER: '',
    AD_MOB_ID_INTER: ''
};

