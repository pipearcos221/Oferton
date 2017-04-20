import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
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
  admin: boolean;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: NovedadesService,
    public dao: NovedadDao,
    public storage: Storage,
    public events: Events) {
    this.data = new Novedad;
    this.agg = false;
  }

  ionViewDidEnter() {
    this.storage.get('tipo').then(val =>{
      if(val == 'admin'){
        this.admin = true;
        console.log("es admin")
      }else{
        this.admin = false;
        console.log("es cliente")
      }
    })
    this.id = this.navParams.get('id');
    this.storage.get("" + this.id).then((value: boolean) => {
      if (value) {
        this.agg = value;
      }
      else {
        this.agg = false;
      }
      console.log("ya agregado? " + this.agg);
    });
    this.fav = this.navParams.get('fav');
    if (this.fav) {
      console.log("es favorito " + this.id)
      this.getFavorito(this.id);
    } else {
      console.log("es novedad " + this.id)
      this.getNovedad(this.id)
    }
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
      console.log("getfavorito id " + this.data._id)
    });
  }

  addFavorito() {
    if (this.fav) {
    } else {
      if (!this.agg) {
        this.dao.insert(this.data);
        console.log("id almacenado: " + this.data._id)
        this.agg = true;
        this.storage.set("" + this.id, true);
      }
    }

  }

  delete() {
    if (this.fav) {
      this.dao.delete(this.id);
      this.storage.remove(this.id);
      console.log("favorito eliminado")
      this.navCtrl.pop();
    } else {
      console.log("id eliminado: " + this.data._id)
      this.service.delete(this.data._id).subscribe(
        (res) => {
          this.processResponse(res);
        },
        (err) => this.processResponse(false)
      );
    }
  }

  processResponse(success: boolean) {

    if (success) {
      console.log('OK novedad eliminada');
      this.navCtrl.pop();



    } else {
      this.navCtrl.pop();

    }
  }

  goToEdit(){
    
  }

}