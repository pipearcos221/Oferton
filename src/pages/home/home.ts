import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController } from 'ionic-angular';
import { NovedadesPage } from '../novedades/novedades';
import { AlmacenesPage } from '../almacenes/almacenes';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuOpc: IMenu[] = [

    { label: 'Home', icon: 'home' },
    { label: 'Almacenes', icon: 'md-cart' },
    { label: 'Ropa', icon: 'md-shirt' },
    { label: 'Comida', icon: 'md-restaurant' },
    { label: 'Tecnologia', icon: 'md-laptop' },
    { label: 'Cine', icon: 'md-film' },
    { label: 'Favoritos', icon: 'md-heart' }
  ]

  mainContent: any;


  constructor(public navCtrl: NavController, public storage: Storage) {
    this.mainContent = NovedadesPage;
    storage.get("user").then(val => { console.log(val) });
  }

  selectMenu(index: number) {
    if (index == 0) {
      this.mainContent = NovedadesPage;
    } else {
      this.mainContent = AlmacenesPage;
    }

  }

  logout() {
    this.storage.set("logged", false);
    this.navCtrl.setRoot(LoginPage);
  }

}

export interface IMenu {
  label: string;
  icon: string;
} 
