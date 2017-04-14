import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NovedadesService } from '../../providers/novedades-service';
import { Novedad } from '../../models/novedad';

@Component({
  selector: 'page-add-novedad',
  templateUrl: 'add-novedad.html'
})
export class AddNovedadPage {

  novedad: Novedad;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: NovedadesService) {
    this.novedad = new Novedad()
  }

  save() {
    this.service.add(this.novedad).subscribe(
      (res) => {
        this.processResponse(res);
      },
      (err) => this.processResponse(false)
    );

  }

  processResponse(success: boolean) {

    if (success) {
      //this.events.publish("reloadAnimals");
      this.navCtrl.pop();
      console.log('OK');


    } else {
      // this.events.publish("reloadAnimals");
      this.navCtrl.pop();
      console.log('mal');
    }
  }
  



}
