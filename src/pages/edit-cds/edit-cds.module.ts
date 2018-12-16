import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCdsPage } from './edit-cds';

@NgModule({
  declarations: [
    EditCdsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCdsPage),
  ],
})
export class EditCdsPageModule {}
