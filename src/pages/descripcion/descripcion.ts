import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Novedad } from '../../models/novedad';
import { NovedadesService } from '../../providers/novedades-service';

@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html'
})
export class DescripcionPage {


  data: Novedad;
  id: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: NovedadesService) {
    this.data = new Novedad;
    this.id = navParams.get('id')
    this.getNovedad(this.id)

  }

  ionViewDidEnter() {

  }


  getNovedad(id: string) {
    this.service.getOne(id).subscribe(res => this.data = res);

  }

}
