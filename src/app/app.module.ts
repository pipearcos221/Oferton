import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { NovedadesPage } from '../pages/novedades/novedades';

import {NovedadesData} from '../providers/novedades-data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NovedadesPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NovedadesPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },NovedadesData]
})
export class AppModule { }
