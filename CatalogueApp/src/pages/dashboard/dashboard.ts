import { Component } from '@angular/core';
import { MenuController  } from 'ionic-angular';

/**
 * Generated class for the Dashboard page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {

  constructor( public menuCtrl: MenuController) {

    this.menuCtrl.enable(true, 'appMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }

}
