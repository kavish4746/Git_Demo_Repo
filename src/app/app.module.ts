import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { PastorderComponent } from './pastorder/pastorder.component';
import { PastOrderDetailsComponent } from './past-order-details/past-order-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,MatButtonModule,MatIconModule,MatTableModule,MatFormFieldModule,MatFormFieldControl,MatPaginatorModule
  ,MatProgressSpinnerModule,MatSortModule,MatCardModule } from '@angular/material';
import { SignupComponent } from './signup/signup.component';

  
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    PastorderComponent,
    PastOrderDetailsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
