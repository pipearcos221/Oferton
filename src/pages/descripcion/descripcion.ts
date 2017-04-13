import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad} from '../../models/novedad';
import {NovedadesService} from '../../providers/novedades-service';

@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html'
})
export class DescripcionPage {

<<<<<<< HEAD
  data: Novedad;  
  id: string;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public service: NovedadesService) {
    this.data = new Novedad;    
    this.id = navParams.get('id')
    this.getNovedad(this.id)
=======
  data: Novedad;
  novedades: Novedad[];
  nombre: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public service: NovedadesData) {
      this.novedades = [];
      this.nombre = navParams.get('nombre')
      this.getNovedad(this.nombre)
>>>>>>> 57ab165b89ecca469f967081283772d9887111d0
  }

  ionViewDidEnter() {
    
  }

<<<<<<< HEAD
  getNovedad(id: string){
    this.service.getOne(id).subscribe(res => this.data = res);
=======
  getNovedad(name:string){
    this.data = this.service.data.find(x => x.nombre === name)
>>>>>>> 57ab165b89ecca469f967081283772d9887111d0
  }

}
