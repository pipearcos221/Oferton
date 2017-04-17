import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
    public dao: NovedadDao) {
    this.data = new Novedad;
    this.id = navParams.get('id');
    this.fav = navParams.get('fav');
    this.agg = false;
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
      if (this.agg) {
        this.dao.insert(this.data);
        console.log("id almacenado: " + this.data.id)
        this.agg = true;
      }
    }

  }

}
