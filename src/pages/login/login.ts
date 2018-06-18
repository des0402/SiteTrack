import { Component } from '@angular/core';
import { IonicPage, 
        NavController, 
        NavParams,
        Alert,
        AlertController,
        Loading,
        LoadingController,
        MenuController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
//import { HomePage } from '../home/home';
import { EmailValidator } from '../../validators/email';
import { SignupPage } from '../signup/signup';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { auth } from 'firebase';

import { SitelistPage } from '../sitelist/sitelist';
import { SitecreatePage } from '../sitecreate/sitecreate';
 
import { DashboardPage } from  '../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm:FormGroup;
  public loading:Loading;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public alertCtrl:AlertController,
              public authProvider:AuthProvider,
              public menu:MenuController,
              formBuilder:FormBuilder) {

          this.loginForm = formBuilder.group({
            email:[
              '',
              Validators.compose([Validators.required, EmailValidator.isValid])
            ],
            password:[
              '',
              Validators.compose([Validators.required, Validators.minLength(6)])
            ]
          });
  }

  loginUser():void{
    if(!this.loginForm.valid){
      console.log(
        `Form is not valid yet, current value: ${this.loginForm.value}`
      );
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authProvider.loginUser(email,password).then(
        authData => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(DashboardPage);
          });
        },
        error => {
          this.loading.dismiss().then(()=> {
            const alert: Alert = this.alertCtrl.create({
              message:error.message,
              buttons:[{text: 'Ok', role:'cancel'}]
            });
            alert.present();
          });
        }
      );
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

  goToSignup():void{
    this.navCtrl.push(SignupPage);
  }

  goToResetPassword():void{
    this.navCtrl.push(ResetpasswordPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(false);
  }
  ionViewWillLeave(){
    this.menu.swipeEnable(true);
  }

}
