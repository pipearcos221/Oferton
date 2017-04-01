import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar, SplashScreen } from '@ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {

    });
  }
}
