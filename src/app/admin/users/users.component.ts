import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData:any;
  constructor( private authService:AuthService, private service:DataService) { }

  ngOnInit() {
    this.service.GetUsers()
    .subscribe((result:any)=>{
      // debugger
      this.userData = result.Data;
      
        
      });  
      
  }


}
