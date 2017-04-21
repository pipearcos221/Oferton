import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Novedad } from '../../models/novedad';
import { NovedadDao } from '../../providers/database/novedad-dao';
import { DescripcionPage } from '../descripcion/descripcion';

/*
  Generated class for the Favoritos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html'
})
export class FavoritosPage {

  favoritos: Novedad[]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public dao: NovedadDao) {
    this.favoritos = [];
    events.subscribe("db:ready", this.loadFavoritos)
  }

  ionViewDidEnter() {
    this.loadFavoritos();
  }

  loadFavoritos() {
    this.dao.all().then(data => {
      this.favoritos = data;
    })
  }

  goToDetail(id: string, tipo: string) {
    console.log("id presionado " + id);
    this.navCtrl.push(DescripcionPage, {
      id: id,
      fav: true,
      tipo: tipo
    })
  }
}
