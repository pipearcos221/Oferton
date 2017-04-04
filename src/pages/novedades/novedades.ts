import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad, NovedadesData } from '../../providers/novedades-data';
import { AddNovedadPage } from '../add-novedad/add-novedad';


@Component({
  selector: 'page-novedades',
  templateUrl: 'novedades.html'
})
export class NovedadesPage {

  novedades: Novedad[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: NovedadesData) {
    this.novedades = [];
  }

  ionViewDidEnter() {
    this.novedades = this.service.data;
  }

  goToAdd() {
    this.navCtrl.parent.push(AddNovedadPage)
  }



}
