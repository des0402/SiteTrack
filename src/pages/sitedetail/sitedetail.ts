import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
          AlertController, Alert } from 'ionic-angular';
import { SiteProvider } from '../../providers/site/site';
import firebase from 'firebase';
import { Reference } from '@firebase/database-types';
import { JobdetailPage } from '../jobdetail/jobdetail';
/**
 * Generated class for the SitedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sitedetail',
  templateUrl: 'sitedetail.html',
})
export class SitedetailPage {

  public currentSite: any = {};

  public jobListRef: Reference;
  public jobList : Array<any>;

  public staffListRef: Reference;
  public staffList: Array<any>;

  public jobId: string ;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public siteProvider: SiteProvider,
              public alertCtrl:AlertController) {

  }

  ionViewDidLoad() {
    this.siteProvider.getSiteDetail(this.navParams.get("siteId"))
    .on("value", siteSnapshot =>{
      this.currentSite = siteSnapshot.val();
      this.currentSite.id = siteSnapshot.key;
    });

    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.jobListRef = firebase
        .database()
        //.ref(`/userProfile/${user.uid}/siteList/${this.currentSite.id}/jobList`)
        .ref(`/siteList/${this.currentSite.id}/jobList`)

        this.jobListRef.on("value", jobListSnapshot => {
          this.jobList = [];
          jobListSnapshot.forEach(snap => {
            this.jobList.push({
              id:snap.key,
              job:snap.val().job
            });
            
            // this.staffListRef = firebase
            // .database()
            // .ref(`/userProfile/${user.uid}/siteList/${this.currentSite.id}/jobList/${this.jobId}/staffMember`)
             return false;
          });  
        });

        // this.staffListRef.on("value", staffListSnapshot => {
        //   this.staffList = [];
        //   staffListSnapshot.forEach(snap => {
        //     this.staffList.push({
        //       id:snap.key,
        //       staff:snap.val().staff
        //     });

        //  return false;
        //   });
        //  });
        }
      });
   
    // this.siteProvider.getJobList().on("value", jobListSnapshot => {
    //   this.jobList = [];
    //   jobListSnapshot.forEach(snap => {
    //     this.jobList.push({
    //       id:snap.key,
    //       job:snap.val().job
    //     });
    //     return false;
    //   });
    // });
  }

  goToJobDetail(jId):void{
    this.navCtrl.push(JobdetailPage, {jId:jId, siteId:this.currentSite.id});

    console.log(this.staffListRef);
  }

  addNewJob(){
    const alert: Alert = this.alertCtrl.create({
      message:"Add New Job",
      inputs:[
        {
           name:"jobName",
           placeholder:"Enter Job Name" 
        },
      ],
      buttons:[
        {text:'cancel'},
        {
          text: 'save',
          handler: data =>{
            this.siteProvider.addJob(data.jobName, this.currentSite.id);
            this.alertCtrl.create({
              message:"Job Saved Successfully",
              buttons:['ok']
            }).present();
          }
        }
      ]
    });
    alert.present();
  }
}
