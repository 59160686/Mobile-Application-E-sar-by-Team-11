import { Http } from '@angular/http';
//import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
/*
  Generated class for the MDepartmentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MDepartmentProvider {
  constructor(public http:Http) {
    //console.log('Hello MDepartmentProvider Provider');
  }
  
  insert_dpm(data) {
    console.log(data)
    return this.http.post('http://10.80.6.165:1030/dpm/insert_dpm',data).pipe(map((res)=>res.json()));
  }
  update_dpm() {
    
  }
  delete_dpm() {
    
  }
  get_by_id() {
    
  } 
  get_all_summary() {
    
  }
  get_all_dpm() {
    return this.http.get('http://10.80.6.165:1030/dpm/get_all_dpm').pipe(map((res)=>res.json())); 
  }
}
