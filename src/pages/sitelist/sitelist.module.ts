import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitelistPage } from './sitelist';

@NgModule({
  declarations: [
    SitelistPage,
  ],
  imports: [
    IonicPageModule.forChild(SitelistPage),
  ],
})
export class SitelistPageModule {}
