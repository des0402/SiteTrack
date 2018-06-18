import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiteProvider } from '../../providers/site/site';
import { Reference } from '@firebase/database-types';
import firebase from 'firebase';
import { snapshotChanges } from 'angularfire2/database';


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/

@IonicPage()

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public siteProvider:SiteProvider) {
  }

  public currentSite: any = {};


  public jobListRef: Reference;

  public siteList: Array<any>;
  //public jobList: Array<any>;

  public jobDetailRef : Reference;
  public jobLists:Array<any>;
 public currentJob : any = {};

  public jobArr: Array<any>;
  public jobDic : {};

  public staffListRef: Reference;
  public staffList: Array<any>;
  
  public siteId: string;
  public jobId: string;

  ionViewDidLoad() {
    // this.siteProvider.getSiteDetail(this.navParams.get("siteId"))
    // .on("value", siteSnapshot =>{
    //   this.currentSite = siteSnapshot.val();
    //   this.currentSite.id = siteSnapshot.key;
    // });

    this.siteProvider.getSiteList().on("value", siteListSnapshot => {
      this.siteList = [];
        siteListSnapshot.forEach(snap => {
        this.siteList.push({
          id:snap.key,
          name:snap.val().name,
          address:snap.val().address,
          createdBy:snap.val().createdBy,
          jobList:snap.val()
        });

        //this.siteId = snap.key; 
        //this.jobArr = [];
        //this.jobArr.push(snap.val().jobList);

        return false;
      });

      });
  }

  goToSiteDetail(siteId):void{
    //this.navCtrl.push(SitedetailPage, {siteId:siteId})
    this.siteProvider.getSiteDetail(siteId)
    .on("value", siteSnapshot =>{
      this.currentSite = siteSnapshot.val();
      this.currentSite.id = siteSnapshot.key;
    });

    this.siteId = this.currentSite.id;

    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.jobListRef = firebase
        .database()
        .ref(`/siteList/${this.currentSite.id}/jobList`)

        this.jobListRef.on("value", jobListSnapshot => {
          this.jobLists = [];
          jobListSnapshot.forEach(snap => {
            this.jobLists.push({
              id:snap.key,
              job:snap.val().job, 
            });          
            //this.goToJobDetail(this.currentSite.id, snap.key); 
            //this.goToJobDetail(snap.key);
             return false;
          });  
        });
        }
      });
      
      
  }

  goToJobDetail(j):void{
    console.log("Job List");

    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.jobDetailRef = firebase
        .database()
        //.ref(`/userProfile/${user.uid}/siteList/${this.siteId}/jobList/`);
        .ref(`/siteList/${this.siteId}/jobList/`);

        this.jobDetailRef.child(j).on("value", jobSnapshot =>{
          this.currentJob = jobSnapshot.val();
          this.currentJob.id = jobSnapshot.key;
        });
      }
            
    this.staffListRef = firebase
    .database()
    .ref(`/siteList/${this.siteId}/jobList/${this.currentJob.id}/staffMember`);


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
  });
    console.log(this.staffList);
  } 

  listJob(){
    console.log(this.jobArr);
  }
}


