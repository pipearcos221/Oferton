import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Novedad, NovedadesData } from '../../providers/novedades-data';


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

}
