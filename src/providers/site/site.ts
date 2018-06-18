//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';

/*
  Generated class for the SiteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SiteProvider {

  public siteListRef: Reference;
  public jobListRef: Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.siteListRef = firebase
        .database()
        .ref(`/siteList`);
      }
    });
  }


  createSite(
    siteName:string,
    siteAddress:string,
    siteCreatedBy:string
  ):ThenableReference{
    return this.siteListRef.push({
      name: siteName,
      address: siteAddress,
      createdBy: siteCreatedBy
    })
  }

  addStaffMember(staffName:string, siteId:string, jobId:string):PromiseLike<any>{ 
    return this.siteListRef.child(`${siteId}/jobList/${jobId}/staffMember`).push({
      staff:staffName
    });
  }

  addJob(jobName: string, siteId: string
  ): PromiseLike<any> {
  return this.siteListRef.child(`${siteId}/jobList`).push({
    job: jobName});
  }

  getJobList():Reference{
    return this.jobListRef;
  }

  getJobDetail(jobId:string): Reference{
    return this.jobListRef.child(jobId);
  }

  getSiteList(): Reference{
    return this.siteListRef;
  }

  getSiteDetail(siteId:string): Reference{
    return this.siteListRef.child(siteId);
  }

}
