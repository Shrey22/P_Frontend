import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public service:DataService,public router:Router) { }

  ngOnInit() {
  }

  addfeedback(datafromUI)
  {
    datafromUI.UserId_ = parseInt(sessionStorage.getItem("UserId"))
    this.service.insertFeedback(datafromUI)
    .subscribe((fetcheddata:any)=>{
      console.log(fetcheddata.Status)
      if(fetcheddata.Status =="success")
      {
        alert("Feedback submited.Thank your for your response :)")
        this.router.navigate(['user/dashboard'])
        
      }
    })
  }
}
 