import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMajorPage } from './add-major';

@NgModule({
  declarations: [
    AddMajorPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMajorPage),
  ],
})
export class AddMajorPageModule {}
