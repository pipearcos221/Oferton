import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad, NovedadesData } from '../../providers/novedades-data';

@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html'
})
export class DescripcionPage {

  data: Novedad;
  novedades: Novedad[];
  nombre: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public service: NovedadesData) {
      this.novedades = [];
      this.nombre = navParams.get('nombre')
      this.getNovedad(this.nombre)
  }

  ionViewDidLoad() {
    
  }

  getNovedad(name:string){
    this.data = this.service.data.find(x => x.nombre === name)
  }

}
