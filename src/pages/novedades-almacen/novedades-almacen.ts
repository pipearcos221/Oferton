import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad } from '../../models/novedad';
import { NovedadesService } from '../../providers/novedades-service';

import { DescripcionPage } from '../descripcion/descripcion';
/*
  Generated class for the NovedadesAlmacen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-novedades-almacen',
  templateUrl: 'novedades-almacen.html'
})
export class NovedadesAlmacenPage {

  novedades: Novedad[];
  almacen: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: NovedadesService) { 
      this.novedades = [];
      this.almacen = navParams.get('almacen')
      this.getNovedades(this.almacen)
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovedadesAlmacenPage');
  }

  ionViewDidEnter() {
    this.getNovedades(this.almacen)

  }

  getNovedades(almacen: string){
    this.service.getbyalmacen(almacen).subscribe(res => this.novedades = res)
  }

  goToDetail(id: string) {
    this.navCtrl.push(DescripcionPage, {
      id: id
    })
  }

}
