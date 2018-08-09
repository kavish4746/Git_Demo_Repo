import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { bill_class } from '../app/homepage/bill_class';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private url:string="http://Localhost:3000/cusine/";
  private url1:string="http://Localhost:3000/bill/";
  private bill_details_url:string="http://Localhost:3000/billdetail/";
  private past_record:string="http://Localhost:3000/past/";
  private past_detail:string="http://Localhost:3000/pastrecord/";
  constructor(private _http:HttpClient) { }
  
addProduct(item:bill_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url1,body,{headers:head1})
  }
  insertBillDetails(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.bill_details_url,body,{headers:head1});
  }
  getbillrecord(user_id)
  {
    console.log(user_id);
    return this._http.get(this.past_record+user_id);
  }
  getbilldetails(bill_id)
  {
    console.log(bill_id);
    return this._http.get(this.past_detail+bill_id);
  }
}
