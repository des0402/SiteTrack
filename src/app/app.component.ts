import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { SitelistPage } from '../pages/sitelist/sitelist';
import { SitedetailPage } from '../pages/sitedetail/sitedetail';
import { SitecreatePage } from '../pages/sitecreate/sitecreate';
import { LoginPage } from '../pages/login/login';

import firebase from 'firebase';
import { firebaseConfig } from './credentials';

import { AuthProvider } from '../providers/auth/auth';
import { ProfilepagePage } from '../pages/profilepage/profilepage';
import { DashboardPage } from '../pages/dashboard/dashboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public authProvider:AuthProvider,
              public menu:MenuController
              ) {
    this.initializeApp();
    firebase.initializeApp(firebaseConfig);

    // used for an example of ngFor and navigation
    
    // if(this.rootPage = LoginPage){
    //   this.pages = [
    //     { title: 'Login', component: LoginPage },
    //     //{ title: 'Sites', component: SitelistPage }
    //   ];
    // }else{
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'Sites', component: SitelistPage },
    //   //{ title: 'Logout', }
    // ];
    // }

    this.pages = [
      //{ title: 'Home', component: HomePage },
      { title: 'My Dashboard', component:DashboardPage},
      { title: 'Sites', component: SitelistPage }
      //{ title: 'My Account', component: ProfilepagePage}
      //{ title: 'Logout', }
    ];

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(!user){
        this.rootPage = LoginPage;
        unsubscribe();
      } else {
        this.rootPage = DashboardPage;
        unsubscribe();
      }
    });

  }

  logoutClicked(){
    this.authProvider.logoutUser();
    this.nav.setRoot(LoginPage);
    this.menu.close();
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
}
