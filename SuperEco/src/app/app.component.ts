import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// imports for themes https://medium.freecodecamp.org/how-to-dynamically-theme-your-ionic-application-and-make-your-users-happy-ffa17e15dbf7
import { AppState } from '../app/app.global';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon:string }>;
  themes: Array<{title: string, theme: string, color:string}>;

  constructor(public platform: Platform
            , public statusBar: StatusBar
            , public splashScreen: SplashScreen
            , public global:AppState
            , public modalCtrl: ModalController
          ) {
    this.initializeApp();


    // Themes
    this.themes = [
      {title:'Default Theme', theme: 'theme-red', color:'assets/imgs/FF0000.png'},
      {title:'Red Theme', theme: 'theme-red', color:'assets/imgs/333333.png'},
      {title:'Dark Theme', theme: 'theme-dark', color:'assets/imgs/333333.png'}
    ];

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage, icon:"person" },
      { title: 'Registrar', component: RegisterPage, icon:"logo-buffer" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  // function change themes
  changeTheme(theme:any){
    this.global.set('theme', theme);
    //console.log("theme " + theme.title + ", " + this.global.get('theme'));
  }

  showRegistartPunto(page) {
    let lpage:any;

    switch(page){
      case 'Login': lpage = LoginPage; break;
      case 'Registrar': lpage = RegisterPage; break;
    }
    
    let profileModal = this.modalCtrl.create(lpage, { userId: 8675309 });
    profileModal.present();
  }
}
