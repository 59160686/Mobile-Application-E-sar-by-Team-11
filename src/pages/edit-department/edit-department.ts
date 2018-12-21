import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MDepartmentProvider } from '../../providers/m-department/m-department';

/**
 * Generated class for the EditDepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-department',
  templateUrl: 'edit-department.html',
})
export class EditDepartmentPage {
  public dpm_code: string
  public data: {dpm_id: string,dpm_code: string ,  dpm_name : string };
  constructor(public navCtrl: NavController, public navParams: NavParams,public db_dpm:MDepartmentProvider) {
    this.data = { dpm_id: "",dpm_code : "", dpm_name: "" }
  }

  set_dpm_code(value) {
    this.data.dpm_code = value
    // console.log(this.data)
  }
  set_dpm_name(value) {
    this.data.dpm_name= value
    // console.log(this.data)
  }
  insert() {
    this.db_dpm.insert_dpm(this.data)
    //console.log('add succes')
  }
  popToHomePage() {
    this.navCtrl.popToRoot();
  }

}
