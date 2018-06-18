import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SitelistPage } from '../pages/sitelist/sitelist';
import { SitedetailPage } from '../pages/sitedetail/sitedetail';
import { SitecreatePage } from "../pages/sitecreate/sitecreate";
import { LoginPage } from '../pages/login/login';
import { SignupPage } from  '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { SiteProvider } from '../providers/site/site';
import { SitelistPageModule } from '../pages/sitelist/sitelist.module';
import { SitecreatePageModule } from '../pages/sitecreate/sitecreate.module';
import { SitedetailPageModule } from '../pages/sitedetail/sitedetail.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { ResetpasswordPageModule } from '../pages/resetpassword/resetpassword.module';
import { ProfilepagePageModule } from '../pages/profilepage/profilepage.module';
import { ProfileProvider } from '../providers/profile/profile';
import { JobdetailPageModule } from '../pages/jobdetail/jobdetail.module';
import { firebaseConfig } from './credentials';
import { FirebaseApp } from 'angularfire2/firebase.app.module';
import { StaffProvider } from '../providers/staff/staff';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SitelistPageModule,
    SitecreatePageModule,
    SitedetailPageModule,
    LoginPageModule,
    SignupPageModule,
    ResetpasswordPageModule,
    ProfilepagePageModule,
    JobdetailPageModule,
    DashboardPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    SiteProvider,
    Camera,
    ProfileProvider,
    StaffProvider
  ]
})
export class AppModule {}
