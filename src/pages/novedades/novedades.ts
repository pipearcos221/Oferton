import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad, NovedadesData } from '../../providers/novedades-data';
import { AddNovedadPage } from '../add-novedad/add-novedad';
<<<<<<< HEAD
import {DescripcionPage} from '../descripcion/descripcion';
import {NovedadesService} from '../../providers/novedades-service';
=======
import { DescripcionPage } from '../descripcion/descripcion';

>>>>>>> 57ab165b89ecca469f967081283772d9887111d0

@Component({
  selector: 'page-novedades',
  templateUrl: 'novedades.html'
})
export class NovedadesPage {

  novedades: Novedad[]

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public service: NovedadesService) {
    this.novedades = [];
  }

  ionViewDidEnter() {
    this.service.all().subscribe(data => this.novedades = data);
    console.log(this.novedades);
    
  }

  goToAdd() {
    this.navCtrl.push(AddNovedadPage)
  }

  goToDetail(id: string){
    this.navCtrl.push(DescripcionPage, {
      id: id
    })
  }

  goToDetail(name: string) {
    this.navCtrl.parent.push(DescripcionPage, {
      nombre: name
    })
  }
}
