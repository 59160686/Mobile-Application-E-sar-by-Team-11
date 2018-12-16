import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCdsPage } from './detail-cds';

@NgModule({
  declarations: [
    DetailCdsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCdsPage),
  ],
})
export class DetailCdsPageModule {}
