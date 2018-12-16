import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddDepartmentPage } from '../add-department/add-department';
import { YodAndFctPage } from '../yod-and-fct/yod-and-fct';

@IonicPage()
@Component({
  selector: 'page-department',
  templateUrl: 'department.html',
})
export class DepartmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushAddDepartment(){
    this.navCtrl.push(AddDepartmentPage);
  }
  pushYodAndFct(){
    this.navCtrl.push(YodAndFctPage);
  }
  popToHomePage() {
    this.navCtrl.popToRoot();
  }
}
