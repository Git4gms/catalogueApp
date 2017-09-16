import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GetConstant } from '../../injectables/common';
import { Helper } from '../../injectables/helper';
import { NavController,MenuController  } from 'ionic-angular';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public storage: Storage,public navCtrl: NavController,public constObj:GetConstant,public helperObj:Helper, public menuCtrl: MenuController) {

    this.menuCtrl.enable(false, 'appMenu');
  }

  onlanguageClicked = function(language){
   
    if(language != undefined && language != '' && language != null){
      this.storage.set('appLanguage', language);
    }else{
      this.storage.set('appLanguage', this.constObj.appDefaultLanguage);
    }
    this.navCtrl.push(Dashboard);
  }

  

}
