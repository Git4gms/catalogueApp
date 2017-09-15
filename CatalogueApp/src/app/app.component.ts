import { Component,ViewChild } from '@angular/core';
import { Platform ,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
//import { NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  //rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage: Storage) {

  platform.ready().then(() => {
      this.storage.get('appLanguage').then(appLanguage=>{
          if(appLanguage != null) {
             
             this.navCtrl.setRoot(Dashboard);
          } else {
             this.navCtrl.setRoot(HomePage);
          }
          console.log('data: '+ appLanguage);
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

