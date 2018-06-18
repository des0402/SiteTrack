import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { SitecreatePage } from '../sitecreate/sitecreate';
import { SiteProvider } from '../../providers/site/site';
import { database } from 'firebase';
import firebase from 'firebase';
import { AuthProvider } from '../../providers/auth/auth';
import { SitedetailPage } from '../sitedetail/sitedetail';

/**
 * Generated class for the SitelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sitelist',
  templateUrl: 'sitelist.html',
})
export class SitelistPage {

  public siteList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl:AlertController,
              public siteProvider:SiteProvider,
              public authProvider:AuthProvider) {
  }

  ionViewDidLoad() {
    this.siteProvider.getSiteList().on("value", siteListSnapshot => {
      this.siteList = [];
      siteListSnapshot.forEach(snap => {
        this.siteList.push({
          id:snap.key,
          name:snap.val().name,
          address:snap.val().address,
          createdBy:snap.val().createdBy
        });
        return false;
      });
    });
  }

  goToSiteDetail(siteId):void{
    this.navCtrl.push(SitedetailPage, {siteId:siteId})
  }

  addNewSite(){
    //this.navCtrl.push(SitecreatePage);
    const alert: Alert = this.alertCtrl.create({
      message:"Add New Site",
      inputs:[
        {
           name:"siteName",
           placeholder:"Enter site Name" 
        },
        {
          name:"siteAddress",
          placeholder:"Enter site address" 
        },
        {
          name:"createdBy",
          placeholder:"Your name"
        }
      ],
      buttons:[
        {text:'cancel'},
        {
          text: 'save',
          handler: data =>{
            this.siteProvider.createSite(data.siteName, data.siteAddress, data.createdBy);
            this.alertCtrl.create({
              message:"Site Saved Successfully",
              buttons:['ok']
            }).present();
          }
        }
      ]
    });
    alert.present();
  }

}
