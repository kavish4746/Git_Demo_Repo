import { Component, OnInit } from '@angular/core';
import { CusineService } from '../cusine.service';
import { cusine } from './cusine_class';
import { GetcusineService } from '../getcusine.service';
import { cusine_dish } from './cusine_dish';
import { BillService } from '../bill.service';
import { bill_class } from './bill_class';
import { billdetail_class } from './billdetail';
import { Router,ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _r:Router,private _cusine:CusineService,private _xyz:GetcusineService,private _bill:BillService) { }
cusine_arr:cusine[]=[];
cusine_dish_arr:cusine_dish[]=[];
bill:cusine_dish[]=[];
qty:number[]=[];
total:number=0;
user:string;
price:number[]=[];
bill_arr:bill_class[]=[];
bill_id:number=1;
i:number;
bill_past:bill_class[]=[];
n:number[]=[
  1,2,3,4,5,6,7,8,9,10
];
arr1:billdetail_class[]=[];
onclick(cusine_name:cusine[]){
  this._xyz.getfoodbyName(cusine_name).subscribe(
    (data:any[])=>{
      this.cusine_dish_arr=data;
      console.log(data);
    }
  );
}
onchange(item,i)
{
  if(this.qty[i]<=0){
    this.qty[i]=1;
    alert("Qty Cant be Zero")
  }

  this.total=this.total-this.price[i];
    this.price[i]=this.qty[i]*item.dish_price;
    this.total+=this.price[i];

}
onclicklogout(){
  this._r.navigate(['/login']);
  localStorage.setItem('"  "',"  ");
}
onclickdiv(item:cusine_dish){
    if(this.bill.find(x=>x.dish_id==item.dish_id))
    {
      alert("Already in cart")
    }
    else
    {
      this.bill.push(new cusine_dish(item.cusine_id,item.cusine_name,item.dish_id,item.dish_name,item.dish_price,item.dish_img,item.fk_cusine_id))
      this.price.push(item.dish_price);
      this.qty.push(1);
      this.total=this.total+item.dish_price;
    }
  
    
}
onclickcheckout(item){
    this._bill.addProduct(new bill_class(this.total,localStorage.getItem('user_id'))).subscribe(
      (data:any)=>{
        this.bill_arr=data;
        console.log(this.bill_arr);
        alert("Succefully Added");
          for(this.i=0;this.i<this.bill.length;this.i++)
          {
              this.arr1.push(new billdetail_class(data.insertId,this.bill[this.i].dish_id,this.price[this.i],this.qty[this.i]))
          }
          this._bill.insertBillDetails(this.arr1).subscribe(
            (data:any)=>{
              console.log(data);
              
            }
          );
      }
    );
}
ondelclick(i)
{
  this.total-=this.price[i];
  this.bill.splice(i,1);
  this.price.splice(i,1);
  this.qty.splice(i,1);
  
}
onclickpast(){
  this._r.navigate(['/pastorder',localStorage.getItem('user_id')]);
}
  ngOnInit() {
    this._cusine.getallcusine().subscribe(
      (data:any[])=>{
        this.cusine_arr=data;
        console.log(data);
      }
    );
    this._xyz.getfoodbyName('pizza').subscribe(
      (data:any[])=>{
        this.cusine_dish_arr=data;
        console.log(data);
      }  
    )};

}
