import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { PastOrderDetailsComponent } from './past-order-details/past-order-details.component';

const arr:Routes=[
    
            {path:'',component:LoginComponent},
            {path:'login',component:LoginComponent},
            {path:'homepage',component:HomepageComponent},
            {path:'pastorder/:user_id',component:PastorderComponent},
            {path:'past-order-details/:bill_id',component:PastOrderDetailsComponent},
            
];    

export const routing=RouterModule.forRoot(arr);