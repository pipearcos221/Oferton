import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Novedad } from '../../models/novedad';

import { NovedadesService } from '../../providers/novedades-service';

/*
  Generated class for the NovedadesTipo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-novedades-tipo',
  templateUrl: 'novedades-tipo.html'
})
export class NovedadesTipoPage {

  novedades: Novedad[];
  tipo: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public service: NovedadesService) {
    this.novedades = [];
    this.tipo = ""
    this.tipo = this.navParams.get('tipo');
  }

  ionViewDidLoad() {
    this.load();
  }

  ionViewDidEnter() {

  }



  load() {
    this.tipo = this.navParams.data.tipo;
    this.service.getbytipo(this.tipo).subscribe(data => this.novedades = data);
  }


}
