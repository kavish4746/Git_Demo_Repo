import { Component, OnInit,ViewChild } from '@angular/core';
import { BillService } from '../bill.service';
import { ActivatedRoute,Router } from '@angular/router';
import { pastorder } from '../../app/homepage/pastrecord';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';

@Component({
  selector: 'app-past-order-details',
  templateUrl: './past-order-details.component.html',
  styleUrls: ['./past-order-details.component.css']
})
export class PastOrderDetailsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort:MatSort;
id:number;
arr:pastorder[]=[];
  constructor(private _billdetail:BillService,private _x:ActivatedRoute) { }
  dataSource=new MatTableDataSource(this.arr)
  displayedColumns:string[] = ['dish_name','price','qty'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.id=this._x.snapshot.params['bill_id'];
    this._billdetail.getbilldetails(this.id).subscribe(
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
