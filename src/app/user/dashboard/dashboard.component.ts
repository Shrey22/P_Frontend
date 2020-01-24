import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 // subjects:any
  constructor(private AuthService:AuthService, private router:Router,public service:DataService ) { 
    
  }
  

  ngOnInit() {
    debugger
    // this.service.GetSubjects()
    // .subscribe((subjectdata:any)=>{
    //   debugger
    //   this.subjects = subjectdata.Data;
    //   console.log(this.subjects);
      
    // })

  }
  
}
