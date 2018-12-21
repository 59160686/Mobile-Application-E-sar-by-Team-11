import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MRelationCommonDataProvider } from '../../providers/m-relation-common-data/m-relation-common-data';

import { ApiDetailCodePage } from '../api-detail-code/api-detail-code';

@IonicPage()
@Component({
  selector: 'page-api-list-code',
  templateUrl: 'api-list-code.html',
})
export class ApiListCodePage {
  public rcmd_obj : any 
  constructor(public navCtrl: NavController, public navParams: NavParams ,public db_rcmd : MRelationCommonDataProvider) {
  }

  ngOnInit() {
    this.db_rcmd.get_data_by_approved().subscribe((response) => {
     console.log(response); 
     this.rcmd_obj = response
    });
  }
  pushDetailCode(id){
    this.navCtrl.push(ApiDetailCodePage,{rcmd_id:id});
  }

}
