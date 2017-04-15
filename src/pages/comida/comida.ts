import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Comida page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comida',
  templateUrl: 'comida.html'
})
export class ComidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidaPage');
    this.storage.get("tipo").then(val => { console.log(val) });
  }

}
