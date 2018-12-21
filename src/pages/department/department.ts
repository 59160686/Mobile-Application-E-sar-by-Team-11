import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController  } from 'ionic-angular';
import { AddDepartmentPage } from '../add-department/add-department';
import { YodAndFctPage } from '../yod-and-fct/yod-and-fct';
import { EditDepartmentPage } from '../edit-department/edit-department';
import { MDepartmentProvider } from '../../providers/m-department/m-department';

@IonicPage()
@Component({
  selector: 'page-department',
  templateUrl: 'department.html',
})
export class DepartmentPage {
  public dpm_obj: any [];
  constructor(public navCtrl: NavController, public db_dpm: MDepartmentProvider,private alertCtrl: AlertController) {
  //constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    this.db_dpm.get_all_dpm().subscribe((response) => {
     console.log(response); 
     this.dpm_obj = response
    });
  }
  pushAddDepartment(){
    this.navCtrl.push(AddDepartmentPage);
    
  }
  pushYodAndFct(dpm_id){
    this.navCtrl.push(YodAndFctPage,{'dpm_id': dpm_id});
    console.log(dpm_id)
  }
  popToHomePage() {
    this.navCtrl.popToRoot();
  }
  popEditDepartment(dpm_id) {
    this.navCtrl.push(EditDepartmentPage,{'dpm_id': dpm_id});
    console.log(dpm_id)
  }
  presentConfirm(id) {
    let alert = this.alertCtrl.create({
      title: 'ยืนยันการลบข้อมูล',
      message: 'คุณต้องการลบข้อมูลนี้หรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            console.log(id);
          }
        }
      ]
    });
    alert.present();
  }
}
