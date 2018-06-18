import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitedetailPage } from './sitedetail';

@NgModule({
  declarations: [
    SitedetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SitedetailPage),
  ],
})
export class SitedetailPageModule {}
