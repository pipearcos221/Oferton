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

import { NovedadesData } from '../providers/novedades-data';
import { AlmacenesData } from '../providers/almacenes-data';

import { NovedadesService } from '../providers/novedades-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
    NovedadesAlmacenPage

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
    NovedadesAlmacenPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, NovedadesData, AlmacenesData, NovedadesService]
})
export class AppModule { }
