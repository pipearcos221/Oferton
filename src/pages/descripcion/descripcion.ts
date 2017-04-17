import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Novedad } from '../../models/novedad';
import { NovedadesService } from '../../providers/novedades-service';
import { NovedadDao } from '../../providers/database/novedad-dao';



@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html'
})
export class DescripcionPage {


  data: Novedad;
  id: string;
  fav: boolean;
  agg: boolean;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: NovedadesService,
    public dao: NovedadDao,
    public storage: Storage) {
    this.data = new Novedad;
    this.id = navParams.get('id');
    this.fav = navParams.get('fav');
    this.agg = false;
    this.storage.get(this.id).then(value =>{
      this.agg = value;
    });
    if (this.fav) {
      this.getFavorito(this.id);
    } else {
      this.getNovedad(this.id)
    }
  }

  ionViewDidEnter() {

  }


  getNovedad(id: string) {
    this.service.getOne(id).subscribe(res => this.data = res);
  }

  getFavorito(id: string) {
    this.dao.getById(id).then(data => {
      this.data = data;
    });
  }

  addFavorito() {
    if (this.fav) {

    } else {
      if (!this.agg) {
        this.dao.insert(this.data);
        console.log("id almacenado: " + this.data.id)
        this.agg = true;
        this.storage.set(this.id, true);
      }
    }

  }

}
