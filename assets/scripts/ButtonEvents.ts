import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

import Yodo1Ads from './Yodo1Ads';

@ccclass('ButtonEvents')
export class ButtonEvents extends Component {
    start() {
        Yodo1Ads.getInstance().initializeMasSdk("dNBGSrfElQ",true);
    }

    initializeAdsAllType() {
        console.log("LOAD InterstitialAds");
        Yodo1Ads.getInstance().initializeInterstitialAds();
        console.log("LOAD Rewards");
        Yodo1Ads.getInstance().initializeRewardAds();
    }

    showInterstitialAds() {
        console.log("Show Interstitial Ads");
        Yodo1Ads.getInstance().showInterstitialAds();   
    }

    update(deltaTime: number) {
        
    }
}

