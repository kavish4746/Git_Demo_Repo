import { Component, OnInit,ViewChild } from '@angular/core';
import { BillService } from '../bill.service';
import { Router } from '@angular/router';
import { bill_class } from '../homepage/bill_class';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort:MatSort;
  bill_amt:number;
 date:Date;
 arr:bill_class[]=[];
  constructor(private _bill:BillService,private _x:Router) { }
  dataSource=new MatTableDataSource(this.arr)
  displayedColumns:string[] = ['bill_amt','date','action'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onclickdone(item){
    this._x.navigate(['/past-order-details',item.bill_id])
  }


  ngOnInit() {
    this._bill.getbillrecord(localStorage.getItem('user_id')).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr=data;
        this.dataSource= new MatTableDataSource(this.arr);    
        this.dataSource.paginator = this.paginator;
       this.dataSource.sort=this.Sort;
      }
    );
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
