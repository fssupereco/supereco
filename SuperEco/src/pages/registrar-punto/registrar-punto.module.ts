import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarPuntoPage } from './registrar-punto';

@NgModule({
  declarations: [
    RegistrarPuntoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarPuntoPage),
  ],
})
export class RegistrarPuntoPageModule {}
