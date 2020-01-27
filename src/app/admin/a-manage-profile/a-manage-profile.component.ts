import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-a-manage-profile',
  templateUrl: './a-manage-profile.component.html',
  styleUrls: ['./a-manage-profile.component.css']
})
export class AManageProfileComponent implements OnInit {
  UserId:any
  userObj:any
  newPassword:any
  cnfPassword:any
  message:any
  constructor(private service:DataService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // this.activatedRoute.params
    // .subscribe((params:any)=>{
      this.UserId = sessionStorage.getItem("UserId");
      console.log(this.UserId);
    //   console.log(params);
      
      
      this.service.UserData(this.UserId)
      .subscribe((result:any)=>{
        this.userObj = result.Data;
        console.log(this.userObj);
        
      })
    // })

  }

  update(UIData:any)
  {
    debugger
    
    if(UIData.Password == this.userObj.Password)
    {
      if(UIData.newPassword == UIData.cnfPassword)
      {
        this.userObj.Password = UIData.newPassword;
        this.service.UpdateUser(this.UserId,this.userObj)
        .subscribe((result:any)=>{
          if(result.affectedRows>0)
          {
            this.router.navigate(['home']);
          }
        })
      }
      else
      {
        this.message = "Password mis-match!"
      }
    }
    else
      {
        this.message = "Incorrect Password"
      }
  }
}