import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailApprovePage } from './detail-approve';

@NgModule({
  declarations: [
    DetailApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailApprovePage),
  ],
})
export class DetailApprovePageModule {}
