import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController, NavParams } from 'ionic-angular';
import { NovedadesPage } from '../novedades/novedades';
import { AlmacenesPage } from '../almacenes/almacenes';
import { CinePage } from '../cine/cine';
import { ComidaPage } from '../comida/comida';
import { ElectrodomesticosPage } from '../electrodomesticos/electrodomesticos';
import { FavoritosPage } from '../favoritos/favoritos';
import { RopaPage } from '../ropa/ropa';

import { DeportesPage } from '../deportes/deportes';


import { LoginPage } from '../login/login';
import { MapaPage } from '../mapa/mapa';

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
    { label: 'Electrodomesticos', icon: 'md-laptop' },
    { label: 'Cine', icon: 'md-film' },
    { label: 'Deportes', icon: 'md-football' },
    { label: 'Favoritos', icon: 'md-heart' },
    { label: 'Mapa', icon: 'md-locate' }
  ]

  mainContent: any;  

  constructor(public navCtrl: NavController,
    public storage: Storage,
    private params: NavParams
  ) {
    this.mainContent = NovedadesPage;    
    
  }

  ionViewDidEnter(){
    this.storage.get("tipo").then(val => { console.log(val) });
  }

  selectMenu(index: number) {

    switch (index) {

      case 0: this.mainContent = NovedadesPage;
        break;

      case 1: this.mainContent = AlmacenesPage;
        break;

      case 2: this.mainContent = RopaPage;
        break;

      case 3: this.mainContent = ComidaPage;
        break;

      case 4: this.mainContent = ElectrodomesticosPage;
        break;

      case 5: this.mainContent = CinePage;
        break;

      case 6: this.mainContent = DeportesPage;
        break;

      case 7: this.mainContent = FavoritosPage;
        break;


      default: this.mainContent = MapaPage;
        break;

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
