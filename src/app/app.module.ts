import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { NovedadesPage } from '../pages/novedades/novedades';
import { AddNovedadPage } from '../pages/add-novedad/add-novedad';
import { AlmacenesPage } from '../pages/almacenes/almacenes';
import { DescripcionPage } from '../pages/descripcion/descripcion';
import { MapaPage } from '../pages/mapa/mapa';
import { NovedadesAlmacenPage } from '../pages/novedades-almacen/novedades-almacen';
import { CinePage } from '../pages/cine/cine';
import { ComidaPage } from '../pages/comida/comida';
import { ElectrodomesticosPage } from '../pages/electrodomesticos/electrodomesticos';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { RopaPage } from '../pages/ropa/ropa';

import { DeportesPage } from '../pages/deportes/deportes';


import { NovedadesData } from '../providers/novedades-data';
import { AlmacenesData } from '../providers/almacenes-data';
import { NovedadesService } from '../providers/novedades-service';
import { DatabaseConnection } from '../providers/database/database-connection';
import { NovedadDao } from '../providers/database/novedad-dao';
import {LoginService} from '../providers/login-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NovedadesPage,
    AddNovedadPage,
    AlmacenesPage,
    DescripcionPage,
    MapaPage,
    NovedadesAlmacenPage,
    CinePage,
    ComidaPage,
    ElectrodomesticosPage,
    FavoritosPage,
    RopaPage,
    DeportesPage


  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQBJObhejvEDuX99tJ612awRuhfGotVYU'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NovedadesPage,
    AddNovedadPage,
    AlmacenesPage,
    DescripcionPage,
    MapaPage,
    NovedadesAlmacenPage,
    CinePage,
    ComidaPage,
    ElectrodomesticosPage,
    FavoritosPage,
    RopaPage,
    DeportesPage

  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, NovedadesData, AlmacenesData, NovedadesService, DatabaseConnection, NovedadDao, LoginService]
})
export class AppModule { }
