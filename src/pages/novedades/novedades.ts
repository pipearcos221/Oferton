import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Novedad } from '../../models/novedad';
import { AddNovedadPage } from '../add-novedad/add-novedad';
import { MapaPage } from '../mapa/mapa';

import { DescripcionPage } from '../descripcion/descripcion';
import { NovedadesService } from '../../providers/novedades-service';


@Component({
  selector: 'page-novedades',
  templateUrl: 'novedades.html'
})
export class NovedadesPage {

  novedades: Novedad[];
  admin: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: NovedadesService,
    public storage: Storage) {
    this.novedades = [];   
    
  }

  // ionViewDidLoad(){
  //   this.storage.get('tipo').then(val =>{
  //     if(val == 'admin'){
  //       this.admin = true;
  //       console.log("es admin")
  //     }else{
  //       this.admin = false;
  //       console.log("es cliente")
  //     }
  //   })
  // }

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
    this.service.all().subscribe(data => this.novedades = data);
  }

  goToAdd() {
    this.navCtrl.push(AddNovedadPage);
  }

  goToDetail(id: string) {
    this.navCtrl.push(DescripcionPage, {
      id: id,
      fav: false
    })
  }

  goToNovedades() {
    this.navCtrl.push(NovedadesPage)
  }

  goToMapa() {
    this.navCtrl.push(MapaPage)
  }

}
