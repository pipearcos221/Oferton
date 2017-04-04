import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { NovedadesPage } from '../pages/novedades/novedades';
import { AddNovedadPage } from '../pages/add-novedad/add-novedad';
import { AlmacenesPage } from '../pages/almacenes/almacenes';
import {DescripcionPage} from '../pages/descripcion/descripcion';

import { NovedadesData } from '../providers/novedades-data';
import { AlmacenesData } from '../providers/almacenes-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NovedadesPage,
    AddNovedadPage,
    AlmacenesPage,
    DescripcionPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NovedadesPage,
    AddNovedadPage,
    AlmacenesPage,
    DescripcionPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, NovedadesData, AlmacenesData]
})
export class AppModule { }
