import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDepartmentPage } from './edit-department';

@NgModule({
  declarations: [
    EditDepartmentPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDepartmentPage),
  ],
})
export class EditDepartmentPageModule {}
