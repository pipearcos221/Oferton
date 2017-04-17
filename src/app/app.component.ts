import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform, Events } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DatabaseConnection } from '../providers/database/database-connection';
import { NovedadDao } from '../providers/database/novedad-dao';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform,
    public storage: Storage,
    con: DatabaseConnection,
    dao: NovedadDao, 
    events:Events) {

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
      con.openConnection().then(() => {
        dao.createTable().then(() => {
          events.publish("db:ready");
        });
      });
    });
  }
}
