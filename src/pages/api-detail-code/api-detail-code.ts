import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MRelationCommonDataProvider } from '../../providers/m-relation-common-data/m-relation-common-data';

/**
 * Generated class for the ApiDetailCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-api-detail-code',
  templateUrl: 'api-detail-code.html',
})
export class ApiDetailCodePage {
  public rcmd_id : any
  public rcmd_obj : any 
  constructor(public navCtrl: NavController, public navParams: NavParams,public db_rcmd : MRelationCommonDataProvider) {
    this.rcmd_id = navParams.get('rcmd_id');
  }
  ngOnInit() {
    console.log(this.rcmd_id); 
    this.db_rcmd.get_by_key(this.rcmd_id).subscribe((response) => {
      console.log(response); 
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ApiDetailCodePage');
  }

}
