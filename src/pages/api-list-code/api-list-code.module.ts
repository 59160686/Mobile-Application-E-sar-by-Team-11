import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiListCodePage } from './api-list-code';

@NgModule({
  declarations: [
    ApiListCodePage,
  ],
  imports: [
    IonicPageModule.forChild(ApiListCodePage),
  ],
})
export class ApiListCodePageModule {}
