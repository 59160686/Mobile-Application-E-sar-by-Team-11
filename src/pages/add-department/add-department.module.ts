import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDepartmentPage } from './add-department';

@NgModule({
  declarations: [
    AddDepartmentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDepartmentPage),
  ],
})
export class AddDepartmentPageModule {}
