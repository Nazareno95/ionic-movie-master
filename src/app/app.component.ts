import { Component,ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from "../pages/login/login";
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  pages = [
    {
      index: 0,
      page: 'Listado de películas',
      iconName: 'film'
    },
    {
      index: 1,
      page: 'Películas que me gustaron',
      iconName: 'star'
    }
  ];

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
    goToTabById(i: number){
      this.nav.setRoot(TabsPage, {index: i});
    }

    logout(){
      this.nav.setRoot(LoginPage);
    }
  }


