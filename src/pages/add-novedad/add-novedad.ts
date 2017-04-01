import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad, NovedadesData } from '../../providers/novedades-data';

@Component({
  selector: 'page-add-novedad',
  templateUrl: 'add-novedad.html'
})
export class AddNovedadPage {

  novedad: Novedad;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: NovedadesData) {
    this.novedad = new Novedad()
  }

  save() {
    this.service.data.push(this.novedad);
    this.navCtrl.pop();
  }


}
