import { Component } from '@angular/core';
import { IonicPage, 
         NavController, 
         NavParams,
         Alert,
         AlertController,
         Loading,
         LoadingController
          } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';

/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  public resetPasswordForm: FormGroup;
  public loading:Loading;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authProvider: AuthProvider,
              public alertCtrl: AlertController,
              public loadingCtrl:LoadingController,
              formBuilder: FormBuilder) {
                this.resetPasswordForm = formBuilder.group({
                  email:['', Validators.compose([Validators.required, EmailValidator.isValid])]
                });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

  resetPassword():void{
    if(!this.resetPasswordForm.valid){
      console.log(`Form is not valid yet, current value: ${this.resetPasswordForm.value}`);
    } else{
      const email: string = this.resetPasswordForm.value.email;
      this.authProvider.resetPassword(email).then(user => {
        const alert : Alert = this.alertCtrl.create({
          message:'Check your email for a password reset link',
          buttons:[
            {
              text:'Ok',
              role:'cancel',
              handler: () => {
                this.navCtrl.pop();
              }
            }
          ]
        });
        alert.present();
      },
      error => {
        const errorAlert = this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'Ok', role:'cancel'}]
        });
        errorAlert.present();
      }
      );
    }
    // this.loading = this.loadingCtrl.create();
    // this.loading.present();
  }
}
