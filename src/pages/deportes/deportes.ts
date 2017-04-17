import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad } from '../../models/novedad';
import { NovedadesService } from '../../providers/novedades-service';
import { DescripcionPage } from '../descripcion/descripcion';

/*
  Generated class for the Deportes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-deportes',
  templateUrl: 'deportes.html'
})
export class DeportesPage {

  novedades: Novedad[];
  tipo: string = "Deportes";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: NovedadesService) {
    this.novedades = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeportesPage');
    this.load();
  }

  load() {
    this.service.getbytipo(this.tipo).subscribe(data => this.novedades = data);
  }

  goToDetail(id: string) {
    this.navCtrl.push(DescripcionPage, {
      id: id
    })
  }
}
