import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ApiSuperEcoProvider } from '../../providers/api-super-eco/api-super-eco';

import { EstadisticasPage } from '../estadisticas/estadisticas';
import { RegistrarPuntoPage } from '../registrar-punto/registrar-punto';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info:any;
  login:any;
  top:any;
  informacion:any;
  premios:any;

  constructor(public navCtrl: NavController
                   , public modalCtrl: ModalController
                   , public api:ApiSuperEcoProvider) {
    this.getData();
    this.info = "top";
  }

  public getData(){
    this.login = this.api.getLogin();
    this.top = this.api.getTop();
    this.informacion = this.api.getInformacion();
    this.premios = this.api.getPremios();
  }

  public getIcon(TypeData, option){
    switch(TypeData){
      case 'premio':
          switch(option){
            case 'boleta': return 'pricetag';
            case 'viaje': return 'plane';
            case 'computador': return 'laptop';
            default: return '';
          }
    }
  }

  showRegistartPunto() {
    let profileModal = this.modalCtrl.create(RegistrarPuntoPage, { userId: 8675309 });
    profileModal.present();
  }

  showEstadisticas(){
    let profileModal = this.modalCtrl.create(EstadisticasPage, { userId: 8675309 });
    profileModal.present();
  }
}
