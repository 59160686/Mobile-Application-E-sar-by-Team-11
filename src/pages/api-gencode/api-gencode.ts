import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiListCodePage } from '../api-list-code/api-list-code';

import { MDepartmentProvider } from '../../providers/m-department/m-department';
/**
 * Generated class for the ApiGencodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-api-gencode',
  templateUrl: 'api-gencode.html',
})
export class ApiGencodePage {
  public dpm_obj: any []
  public dpm_id: any 
  public pushShowCodeAPI : any
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db_dpm: MDepartmentProvider
  
    ) {
      this.pushShowCodeAPI = ApiListCodePage
  }
  ngOnInit() {
    this.db_dpm.get_all_dpm().subscribe((response) => {
     console.log(response); 
     this.dpm_obj = response
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ApiGencodePage');
  }
  dpm_id_input(){
    console.log(this.dpm_id)
  }
}
