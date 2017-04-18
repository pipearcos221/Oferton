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
    this.storage.get(this.id).then(value => {
      this.agg = value;
    });
    if (this.fav) {
      console.log("es favorito " + this.id)
      this.getFavorito(this.id);
    } else {
      console.log("es novedad " + this.id)
      this.getNovedad(this.id)
    }
  }

  ionViewDidEnter() {

  }


  getNovedad(id: string) {
    this.service.getOne(id).subscribe(res => {
      this.data = res;
      this.data._id = res._id
      console.log(this.data._id);
    });
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
        console.log("id almacenado: " + this.data._id)
        this.agg = true;
        this.storage.set(this.id, true);
      }
    }

  }

  delete() {
    if (this.fav) {
      this.dao.delete(this.data._id);
    } else {
      this.service.delete(this.data._id).subscribe(
        (res) => {
          this.processResponse(res);
        },
        (err) => this.processResponse(false)
      );

      this.storage.get(this.data._id).then(val => {
        let fav = val;
        if (val) {
          this.dao.delete(this.data._id);          
          console.log("id eliminado: " + this.data._id)
          this.agg = false;
          this.storage.remove(this.id);
        }
      })

      if (this.agg) {
        this.dao.delete(this.data._id);
        console.log("id eliminado: " + this.data._id)
        this.agg = false;
        this.storage.remove(this.id);
      }
    }
    this.navCtrl.pop();

  }

  processResponse(success: boolean) {

    if (success) {
      //this.events.publish("reloadnovedads");
      this.navCtrl.pop();
      console.log('OK');


    } else {
      // this.events.publish("reloadnovedads");
      this.navCtrl.pop();

    }
  }

}