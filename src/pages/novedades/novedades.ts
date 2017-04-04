import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad, NovedadesData } from '../../providers/novedades-data';
import { AddNovedadPage } from '../add-novedad/add-novedad';
import {DescripcionPage} from '../descripcion/descripcion';

@Component({
  selector: 'page-novedades',
  templateUrl: 'novedades.html'
})
export class NovedadesPage {

  novedades: Novedad[]

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public service: NovedadesData) {
    this.novedades = [];
  }

  ionViewDidEnter() {
    this.novedades = this.service.data;
  }

  goToAdd() {
    this.navCtrl.push(AddNovedadPage)
  }

  goToDetail(name: string){
    this.navCtrl.push(DescripcionPage, {
      nombre: name
    })
  }



}
