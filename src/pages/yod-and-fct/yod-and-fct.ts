import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-yod-and-fct',
  templateUrl: 'yod-and-fct.html',
})
export class YodAndFctPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YodAndFctPage');
  }
  popToHomePage() {
    this.navCtrl.popToRoot();
  }
}
