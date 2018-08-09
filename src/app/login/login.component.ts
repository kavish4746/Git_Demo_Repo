import { Component, OnInit } from '@angular/core';
import { login_class } from '../../app/homepage/login';
import { Router } from '@angular/router';
import { LoginService } from '../../app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  arr:login_class[]=[];
  user_id:string;
  password:string;
  
  constructor(private _xyz:LoginService,private _r:Router) { }
  onLogin(){
    console.log(this.user_id,this.password);
    this._xyz.getUserLogin(new login_class(this.user_id,this.password)).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data.length>0)
        {
          localStorage.setItem('user_id',this.user_id);
        prompt("","Login Successfully");
        console.log(localStorage.getItem('user_id'))
         this._r.navigate(['/homepage'])
        }
        else
        {
          prompt("","Invalid Password or Email_id");
        }
      }
    );
}

  ngOnInit() {
  }

}
