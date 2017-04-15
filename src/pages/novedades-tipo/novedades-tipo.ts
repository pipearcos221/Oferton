import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
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
    private event: Events,
    public storage: Storage,
    public service: NovedadesService) {
    this.novedades = [];
    this.load();
    this.event.subscribe("reload", () => {
      this.load();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovedadesTipoPage');

  }

  ionViewDidEnter() {
    this.event.subscribe("reload", () => {
      this.load();
    });
  }



  load() {
    this.storage.get("tipo").then((val: string) => {
      this.tipo = val;
      this.service.getbytipo(this.tipo).subscribe(data => this.novedades = data);
    });
    
  }

  ngOnDestroy() {
    this.event.unsubscribe("reload");
  }

}
