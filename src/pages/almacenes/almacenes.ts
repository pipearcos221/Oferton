import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Almacen, AlmacenesData } from '../../providers/almacenes-data';
import { NovedadesAlmacenPage } from '../novedades-almacen/novedades-almacen';


@Component({
  selector: 'page-almacenes',
  templateUrl: 'almacenes.html'
})
export class AlmacenesPage {

  almacenes: Almacen[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: AlmacenesData) {
    this.almacenes = [];
  }

  ionViewDidEnter() {
    this.almacenes = this.service.data;
  }

  goToAlmacen(almacen: string) {
    this.navCtrl.push(NovedadesAlmacenPage, {
      almacen: almacen
    })
  }

}
