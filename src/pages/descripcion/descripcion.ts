import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad, NovedadesData } from '../../providers/novedades-data';

@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html'
})
export class DescripcionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: NovedadesData) {

  }

  ionViewDidLoad() {
    
  }

}
