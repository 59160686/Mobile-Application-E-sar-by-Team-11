import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMajorPage } from './list-major';

@NgModule({
  declarations: [
    ListMajorPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMajorPage),
  ],
})
export class ListMajorPageModule {}
