import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
          AlertController, Alert } from 'ionic-angular';
import { SiteProvider } from '../../providers/site/site';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';
/**
 * Generated class for the JobdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobdetail',
  templateUrl: 'jobdetail.html',
})
export class JobdetailPage {

  public currentJob : any = {};
  public jobDetailRef : Reference;

  public staffListRef: Reference;
  public staffList : Array<any>;

  public jId : string = this.navParams.get("jId");
  public siteId: string = this.navParams.get("siteId");

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public siteProvider: SiteProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.jobDetailRef = firebase
        .database()
        //.ref(`/userProfile/${user.uid}/siteList/${this.siteId}/jobList/`);
        .ref(`/siteList/${this.siteId}/jobList/`);

        this.jobDetailRef.child(this.jId).on("value", jobSnapshot =>{
          this.currentJob = jobSnapshot.val();
          this.currentJob.id = jobSnapshot.key;
        });

        this.staffListRef = firebase
        .database()
        .ref(`/siteList/${this.siteId}/jobList/${this.jId}/staffMember`);


        this.staffListRef.on("value", staffListSnapshot => {
          this.staffList = [];
          staffListSnapshot.forEach(snap => {
            this.staffList.push({
              id:snap.key,
              staff:snap.val().staff
            });
            return false;
          });
        });
      }
    });
  }


  addNewMember(){
      const alert: Alert = this.alertCtrl.create({
        message:"Add New Member",
        inputs:[
          {
             name:"staffName",
             placeholder:"Enter Member Name" 
          },
        ],
        buttons:[
          {text:'cancel'},
          {
            text: 'save',
            handler: data =>{
              this.siteProvider.addStaffMember(data.staffName, this.siteId, this.jId);
              this.alertCtrl.create({
                message:"Member Added Successfully",
                buttons:['ok']
              }).present();
            }
          }
        ]
      });
      alert.present();
    }
  
}
