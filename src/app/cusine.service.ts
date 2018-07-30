import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CusineService {
  private url:string="http://Localhost:3000/cusine/";
  constructor(private _http:HttpClient) { }

getallcusine(){
  return this._http.get(this.url);
}
}
