import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  login: string;
  password: string;

  constructor(public navCtrl: NavController) {

  }


  next() {
    this.navCtrl.push(InicioPage, { user: this.login, pass: this.password });
  }
}
