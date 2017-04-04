import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, public storage: Storage) {

    storage.ready().then(() => {

      storage.get("logged").then((val) => {
        if (val) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
      });
    });


    platform.ready().then(() => {
     
    });
  }
}
