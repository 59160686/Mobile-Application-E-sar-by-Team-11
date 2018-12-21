import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { UserPage } from '../pages/user/user';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashBoardPage } from '../pages/dash-board/dash-board';
import { DepartmentPage } from '../pages/department/department';
import { AddDepartmentPage } from '../pages/add-department/add-department';
import { YodAndFctPage } from '../pages/yod-and-fct/yod-and-fct';
import { AddCdsPage } from '../pages/add-cds/add-cds';
import { AddCorsePage } from '../pages/add-corse/add-corse';
import { AddFacultyPage } from '../pages/add-faculty/add-faculty';
import { AddMajorPage } from '../pages/add-major/add-major';
import { ApprovePage } from '../pages/approve/approve';
import { DetailApprovePage } from '../pages/detail-approve/detail-approve';
import { CommonDataSetPage } from '../pages/common-data-set/common-data-set';
import { DetailCdsPage } from '../pages/detail-cds/detail-cds';
import { DetailCodeCdsPage } from '../pages/detail-code-cds/detail-code-cds';
import { EditCdsPage } from '../pages/edit-cds/edit-cds';
import { EditCorsePage } from '../pages/edit-corse/edit-corse';
import { EditDepartmentPage } from '../pages/edit-department/edit-department';
import { EditFacultyPage } from '../pages/edit-faculty/edit-faculty';
import { EditMajorPage } from '../pages/edit-major/edit-major';

import { ListMajorPage } from '../pages/list-major/list-major';

import { ApiGencodePage } from '../pages/api-gencode/api-gencode';
import { ApiListCodePage } from '../pages/api-list-code/api-list-code';
import { ApiDetailCodePage } from '../pages/api-detail-code/api-detail-code';

import { MDepartmentProvider } from '../providers/m-department/m-department';
import { MRelationCommonDataProvider } from '../providers/m-relation-common-data/m-relation-common-data';
import { MCourseProvider } from '../providers/m-course/m-course';
import { MFacultyProvider } from '../providers/m-faculty/m-faculty';
import { MMajorProvider } from '../providers/m-major/m-major';
import { MYearProvider } from '../providers/m-year/m-year';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UserPage,
    DashBoardPage,
    DepartmentPage,
    AddDepartmentPage,
    YodAndFctPage,
    AddCdsPage,
    AddCorsePage,
    AddFacultyPage,
    AddMajorPage,
    ApprovePage,
    CommonDataSetPage,
    DetailApprovePage,
    DetailCdsPage,
    DetailCodeCdsPage,
    EditCdsPage,
    EditCorsePage,
    EditDepartmentPage,
    EditFacultyPage,
    EditMajorPage,
    ApiGencodePage,
    ApiListCodePage,
    ApiDetailCodePage,
    ListMajorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UserPage,
    DashBoardPage,
    DepartmentPage,
    AddDepartmentPage,
    YodAndFctPage,
    AddCdsPage,
    AddCorsePage,
    AddFacultyPage,
    AddMajorPage,
    ApprovePage,
    CommonDataSetPage,
    DetailCdsPage,
    DetailCodeCdsPage,
    EditCdsPage,
    EditCorsePage,
    EditDepartmentPage,
    EditFacultyPage,
    EditMajorPage,
    ApiGencodePage,
    ApiListCodePage,
    ApiDetailCodePage,
    ListMajorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MDepartmentProvider,
    MRelationCommonDataProvider,
    MCourseProvider,
    MFacultyProvider,
    MMajorProvider,
    MYearProvider
  ]
})
export class AppModule {}
