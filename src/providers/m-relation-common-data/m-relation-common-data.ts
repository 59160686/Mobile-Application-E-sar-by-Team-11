
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class MRelationCommonDataProvider {

  constructor(public http: Http) {
  }

  get_all_approve(){
    return this.http.get('http://10.80.6.165:1030/rcmd/get_all_approve').pipe(map((res)=>res.json())); 
  }
  get_all_pending(){
    return this.http.get('http://10.80.6.165:1030/rcmd/get_all_pending').pipe(map((res)=>res.json())); 
  }
  get_data_by_approved(){
    return this.http.get('http://10.80.6.165:1030/rcmd/get_data_by_approved').pipe(map((res)=>res.json())); 
  }
  get_by_key(id){
    return this.http.post('http://10.80.6.165:1030/rcmd/get_by_key',{rcmd_id:id}).pipe(map((res)=>res.json())); 
  }
}
