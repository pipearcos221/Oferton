import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad } from '../../models/novedad';
import { NovedadesService } from '../../providers/novedades-service';

/*
  Generated class for the Electrodomesticos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-electrodomesticos',
  templateUrl: 'electrodomesticos.html'
})
export class ElectrodomesticosPage {

  novedades: Novedad[];
  tipo:string = "Electrodomesticos";

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public service: NovedadesService) {
    this.novedades = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectrodomesticosPage');
    this.load();
  }

  load() {    
    this.service.getbytipo(this.tipo).subscribe(data => this.novedades = data);
  }

}
