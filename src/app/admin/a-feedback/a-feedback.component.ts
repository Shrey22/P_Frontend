import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-feedback',
  templateUrl: './a-feedback.component.html',
  styleUrls: ['./a-feedback.component.css']
})
export class AFeedbackComponent implements OnInit {

  fdktable:any;
  users:any;
  fdkusers:any;
  arr:any;
  constructor(public service:DataService,public router:Router ) { }

  ngOnInit() {

    // this.service.GetUsers()
    //   .subscribe((fetchedusers)=>{
    //     this.users = fetchedusers
    //   }) 

    this.service.GetAFeedback()
    .subscribe((fetchdata)=>{
      this.fdktable = fetchdata
      debugger
      console.log(this.fdktable.Data);
     this.users = this.fdktable.Data;
     console.log(this.users)
    
    })      
    
  }


  
}
