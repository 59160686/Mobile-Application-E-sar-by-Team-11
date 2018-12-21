import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { DashBoardPage } from '../pages/dash-board/dash-board';
import { DepartmentPage } from '../pages/department/department';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any ,icon : string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'DashBoard', component: DashBoardPage ,icon : 'podium' },
      { title: 'ข้อมูลพื้นฐาน', component: DepartmentPage ,icon : 'list-box'},
      { title: 'ข้อมูล Comon Data Set', component: DepartmentPage ,icon : 'ios-link' },
      { title: 'แสดง Code Api', component: DepartmentPage ,icon : 'ios-code-download'},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByName('#0099FF');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(page.component);
    //this.nav.setRoot(page.component);
  }
}
