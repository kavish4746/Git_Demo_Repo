import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cusine } from './homepage/cusine_class';
@Injectable({
  providedIn: 'root'
})
export class GetcusineService {
  private url:string="http://Localhost:3000/food/";
  constructor(private _xyz:HttpClient) { }

  getfoodbyName(cuusine_name){
    return this._xyz.get(this.url+cuusine_name)
  }
}
