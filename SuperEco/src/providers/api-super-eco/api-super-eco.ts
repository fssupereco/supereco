//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiSuperEcoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiSuperEcoProvider {
  usuario: Array<{ id:number, user:string
              , nombres:string, apellidos:string, edad:string
              , grupo:string, fechaInscripcion:Date, ultIngreso:Date  
              , Registrados:number, Limpios:number
            }>;

  informacion: Array<{ tipo:string, dato:string, valor:number}>;            

  premios: Array<{ usuario:string, premio:string, valor:number, tipo:string }>;    

  usuarioList:any [];
  informacionList:any [];
  premiosList:any [];

  constructor() {
    console.log('Hello ApiSuperEcoProvider Provider');
    this.initData();
  }

  public getLogin(){
    return this.usuario;
  }
  
  public getTop(){
    return this.usuarioList;
  }

  public getInformacion(){
    return this.informacionList;
  }

  public getPremios(){
    return this.premiosList;
  }

  // Guarda datos iniciales
  initData(){
    let now = (new Date()).toISOString();
    // Crea datos de usuario
    this.usuarioList = [ 
      { id:1, user:"pedrop", nombres:"pedro", apellidos:"perez", edad:20
        , grupo:"Recolectores", fechaInscripcion:now, ultIngreso:Date  
        , Registrados:20, Limpios:3
      },
      { id:1, user:"cpelaezp", nombres:"César", apellidos:"Peláez", edad:30
        , grupo:"Recolectores", fechaInscripcion:now, ultIngreso:Date  
        , Registrados:31, Limpios:20
      },
      { id:1, user:"fabianCob", nombres:"Fabian", apellidos:"Monrroy", edad:15
        , grupo:"Limpiadores", fechaInscripcion:now, ultIngreso:Date  
        , Registrados:20, Limpios:3
      },
      { id:1, user:"jairoTech", nombres:"Jairo", apellidos:"Reyes", edad:17
        , grupo:"Electros", fechaInscripcion:now, ultIngreso:Date  
        , Registrados:12, Limpios:3
      },
    ];

    // Selecciona usuario a mostrar
    this.usuario =  this.usuarioList[1];

    // información general
    this.informacionList = [
      { tipo:"Historico", dato:"Contaminados", valor:5000 },
      { tipo:"Historico", dato:"Limpios", valor:3400 },
      { tipo:"Historico", dato:"Promedio", valor:0.4 },
      { tipo:"Actual", dato:"Contaminados", valor:5000 },
      { tipo:"Actual", dato:"Limpios", valor:2000 },
      { tipo:"Actual", dato:"Promedio", valor:0.3 },
    ];

    this.premiosList = [
      { usuario:"pedrop", premio:"Boletas de Cine", valor:5, tipo:"boleta"},
      { usuario:"fabianCob", premio:"Boletas de Cine", valor:5, tipo:"boleta" },
      { usuario:"jairoTech", premio:"Computador", valor:1, tipo:"computador" },
      { usuario:"cpelaezp", premio:"Viaje", valor:1, tipo:"viaje" },
      { usuario:"cpelaezp", premio:"Boletas de Cine", valor:5,  tipo:"boleta" },
      { usuario:"jairoTech", premio:"Boletas de Cine", valor:5,  tipo:"boleta" },
    ];
  } 
}
