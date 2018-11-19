import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RegistrarPuntoPage } from '../pages/registrar-punto/registrar-punto';
import {EstadisticasPage} from '../pages/estadisticas/estadisticas';

// themes
import { AppState } from '../app/app.global';
import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiSuperEcoProvider } from '../providers/api-super-eco/api-super-eco';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    RegistrarPuntoPage,
    EstadisticasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    RegistrarPuntoPage,
    EstadisticasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppState,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiSuperEcoProvider
  ]
})
export class AppModule {}
