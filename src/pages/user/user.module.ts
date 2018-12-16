import { NgModule } from '@angular/core';
import { IonicPageModule,NavController } from 'ionic-angular';
import { UserPage } from './user';

@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
})
export class UserPageModule {
  constructor(public navCtrl: NavController) {

  }
}
