import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad } from '../../models/novedad';
import { AddNovedadPage } from '../add-novedad/add-novedad';
import { MapaPage } from '../mapa/mapa';

import { DescripcionPage } from '../descripcion/descripcion';
import { NovedadesService } from '../../providers/novedades-service';


@Component({
  selector: 'page-novedades',
  templateUrl: 'novedades.html'
})
export class NovedadesPage {

  novedades: Novedad[]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: NovedadesService) {
    this.novedades = [];
  }

  ionViewDidEnter() {
    this.service.all().subscribe(data => this.novedades = data);
  }

  goToAdd() {
    this.navCtrl.push(AddNovedadPage);
  }

  goToDetail(id: string) {
    this.navCtrl.push(DescripcionPage, {
      id: id
    })
  }

  goToNovedades() {
    this.navCtrl.push(NovedadesPage)
  }

  goToMapa() {
    this.navCtrl.push(MapaPage)
  }

}
