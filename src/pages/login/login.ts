import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { NovedadesPage } from '../novedades/novedades';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: string;
  pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {

  }

  login() {

    // let data = { user: this.user, password: this.pass };
    // this.storage.set("logged", true);
    this.navCtrl.push(NovedadesPage)
  }

}
