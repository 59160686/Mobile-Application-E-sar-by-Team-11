import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCorsePage } from './add-corse';

@NgModule({
  declarations: [
    AddCorsePage,
  ],
  imports: [
    IonicPageModule.forChild(AddCorsePage),
  ],
})
export class AddCorsePageModule {}
