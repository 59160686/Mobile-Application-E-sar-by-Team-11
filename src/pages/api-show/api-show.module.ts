import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiShowPage } from './api-show';

@NgModule({
  declarations: [
    ApiShowPage,
  ],
  imports: [
    IonicPageModule.forChild(ApiShowPage),
  ],
})
export class ApiShowPageModule {}
