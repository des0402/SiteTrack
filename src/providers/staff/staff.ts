import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';


/*
  Generated class for the StaffProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StaffProvider {

  public staffListRef : Reference;

  constructor() {
  
  }

  getStaffMembers(){
    
  }

}
