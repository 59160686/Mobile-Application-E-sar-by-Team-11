import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from '../user/user';
import { DashBoardPage } from '../dash-board/dash-board';
import { DepartmentPage } from '../department/department';
import { ApiGencodePage } from '../api-gencode/api-gencode';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  constructor(public navCtrl: NavController) {
  }
  
  show_userpage(){
    this.navCtrl.push(UserPage);
  }
  pushDashBoard(){
    this.navCtrl.push(DashBoardPage);
  }
  pushGenapi(){
    this.navCtrl.push(ApiGencodePage);
  }
  pushDepartment(){
    this.navCtrl.push(DepartmentPage);
  }
}
