import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  message:string
  loginUserData ={}
    msg: string;
    constructor(public service:DataService, public auth_service:AuthService, public router:Router) { }
  
  ngOnInit() {
  }
  
  Validation(credentials:any)
  {
  
    console.log(credentials.EmailId);
    console.log(credentials.Password);
    
    if( credentials.EmailId ==null || credentials.Password ==null )
      {
        debugger
          this.msg = "Username/Password is required!!";
          console.log(this.msg);
          
      }
      else
      {
        this.Login(credentials);
      }
  
  }
  Login(credentials: {EmailId:any; Password:any;})
  {
    debugger
     // throw new Error("Method not implemented.");
    let isLoggedIn:any;
    let result=this.service.LoginUserData(credentials)
    result.subscribe((result1:any)=>{
      //debugger
      console.log(result1);
      // if(credentials.EmailId == result1.Data.EmailId && credentials.Password == result1.Data.Password)
      // {
      //   isLoggedIn = true;
      // }
      debugger
      if(result1.Status == "success")
      {
        isLoggedIn = true;
      }
      else 
      {
        this.msg =" Username / Password is invalid";  
        console.log(this.msg);
        
      } 
  
      if (isLoggedIn)
     {
      //  debugger
        this.auth_service.Login(result1);
        this.msg ="";
        debugger
        if(result1.Data.RoleId == 2)
        {
        this.router.navigate(['/user/home'])
        }
        else
        {
          this.router.navigate(['/admin/home']);
        }
      } 
      else 
      {
        this.msg =" Username / Password is invalid";  
      }
    },(error)=>{
        this.msg = "Username / Password is wrong!!";   
  });
  }
  
  }