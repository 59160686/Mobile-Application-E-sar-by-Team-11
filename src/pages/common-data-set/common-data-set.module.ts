import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonDataSetPage } from './common-data-set';

@NgModule({
  declarations: [
    CommonDataSetPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonDataSetPage),
  ],
})
export class CommonDataSetPageModule {}
