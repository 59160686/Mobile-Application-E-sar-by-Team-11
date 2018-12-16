import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCdsPage } from './add-cds';

@NgModule({
  declarations: [
    AddCdsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCdsPage),
  ],
})
export class AddCdsPageModule {}
