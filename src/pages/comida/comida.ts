import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad } from '../../models/novedad';
import { NovedadesService } from '../../providers/novedades-service';

import { DescripcionPage } from '../descripcion/descripcion';
/*
  Generated class for the Comida page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comida',
  templateUrl: 'comida.html'
})
export class ComidaPage {

  novedades: Novedad[];
  tipo: string = "Comida";

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public service: NovedadesService
   ) { 
     this.novedades = [];
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidaPage');
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
