import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFacultyPage } from './add-faculty';

@NgModule({
  declarations: [
    AddFacultyPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFacultyPage),
  ],
})
export class AddFacultyPageModule {}
