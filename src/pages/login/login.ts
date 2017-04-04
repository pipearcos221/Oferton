import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: string;
  pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) { }

  ionViewDidLoad() {

  }

  login() {

    let data = { user: this.user, password: this.pass };
    this.storage.set("logged", true);
    this.storage.set("user", JSON.stringify(data));

    this.navCtrl.setRoot(HomePage);
  }

}
