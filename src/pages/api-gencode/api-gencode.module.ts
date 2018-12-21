import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiGencodePage } from './api-gencode';

@NgModule({
  declarations: [
    ApiGencodePage,
  ],
  imports: [
    IonicPageModule.forChild(ApiGencodePage),
  ],
})
export class ApiGencodePageModule {}
