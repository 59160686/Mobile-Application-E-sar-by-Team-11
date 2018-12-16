import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCorsePage } from './edit-corse';

@NgModule({
  declarations: [
    EditCorsePage,
  ],
  imports: [
    IonicPageModule.forChild(EditCorsePage),
  ],
})
export class EditCorsePageModule {}
