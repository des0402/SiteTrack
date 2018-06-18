import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
         Alert, AlertController, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiteProvider } from '../../providers/site/site';

/**
 * Generated class for the SitecreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sitecreate',
  templateUrl: 'sitecreate.html',
})
export class SitecreatePage {

  public siteForm:FormGroup;
  public loading:Loading;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl:LoadingController,
              public alertCtrl:AlertController,
              public siteProvider:SiteProvider,
              formBuilder:FormBuilder) {

              this.siteForm = formBuilder.group({
                siteName:[
                  '', Validators.compose([Validators.required])
                ],
                siteAddress:[
                  '', Validators.compose([Validators.required])
                ]
              })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SitecreatePage');
  }

}
