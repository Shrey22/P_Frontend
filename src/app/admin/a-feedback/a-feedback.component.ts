import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-a-feedback',
  templateUrl: './a-feedback.component.html',
  styleUrls: ['./a-feedback.component.css']
})
export class AFeedbackComponent implements OnInit {

  userData:any;
  constructor( private authService:AuthService, private service:DataService) { }

  ngOnInit() {
    debugger
    this.service.GetAFeedback()
    .subscribe((result:any)=>{
       debugger
      console.log(result.Data);
      
      this.userData = result.Data;
      console.log(this.userData.Name);
      console.log(this.userData.IsLocked);
      
      });  
      
  }
}
