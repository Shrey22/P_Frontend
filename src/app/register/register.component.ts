import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message:string
  constructor(public service:DataService, public router: Router) { }

  ngOnInit() {
  }

  register(DataFromUI:any)
  {
    console.log("register");
    let result = this.service.RegisterData(DataFromUI.form.value);

    result.subscribe((data:any)=>{
      if(data.error == null)
      {
        this.message = data.Status;
        console.log(data.Data.UserId);
        this.router.navigate(['login']);
      }
      else
      {
        console.log(data);
        this.message = data.Status;
        console.log(data.Data.Err);
      }
    })
  }

}
