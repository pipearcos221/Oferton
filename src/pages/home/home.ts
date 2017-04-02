import { Component } from '@angular/core';
//import { Storage } from '@ionic/storage';

import { NavController } from 'ionic-angular';
import { NovedadesPage } from '../novedades/novedades';

//import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuOpc: IMenu[] = [

    { label: 'Home', icon: 'home' },
    { label: 'Ropa', icon: 'md-shirt' },
    { label: 'Comida', icon: 'md-restaurant' },
    { label: 'Tecnologia', icon: 'md-laptop' },
    { label: 'Cine', icon: 'md-film' },
    { label: 'Favoritos', icon: 'md-heart' }
  ]

  mainContent: any;


  constructor(public navCtrl: NavController) {
    this.mainContent = NovedadesPage;
  //  storage.get("user").then(val => { console.log(val) });
  }

  selectMenu(index: number) {
    // if (index == 0) {
    //   this.mainContent = HeladosPage;
    // } else {
    //   this.mainContent = BebidasPage;
    // }

  }

  logout() {
    // this.storage.set("logged", false);
    // this.navCtrl.setRoot(LoginPage);
  }

}

export interface IMenu {
  label: string;
  icon: string;
} 
