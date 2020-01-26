import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';


@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {
  subjectid:any
  Subjpaper:any
  constructor(public service:DataService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() 
  {
    debugger
    this.route.params.subscribe(params=>
      {
        debugger
      this.subjectid= params.subjectid
    
      console.log(this.subjectid);
      });


    this.service.GetQuestpaperwithsubjId(this.subjectid)
    .subscribe((questionpaper:any)=>
    {
      debugger
      this.Subjpaper = questionpaper.Data
      console.log(this.Subjpaper.Question)   
    });

  }  

  answers(datafromUI:any)
  {
    debugger
      console.log(datafromUI.form.value);

     // var jsonString = JSON.stringify(datafromUI.form.value);

     // console.log(jsonString);
      
      this.service.SubmitAns(datafromUI.form.value)
      .subscribe((reply:any)=>{
        debugger
        console.log(reply.Status)
      })
      
  }


  }
