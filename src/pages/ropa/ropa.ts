import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Ropa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ropa',
  templateUrl: 'ropa.html'
})
export class RopaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RopaPage');
    this.storage.get("tipo").then(val => { console.log(val) });
  }

}
