import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-exam',
  templateUrl: './u-exam.component.html',
  styleUrls: ['./u-exam.component.css']
})
export class UExamComponent implements OnInit {
  subject:any
  subjectname:any   
  message:string
  constructor(public service:DataService, public route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.subjectname= params['SubName']});
   
  //  this.service.GetSubject(this.id).subscribe((subjectData:any)=>{
  //    if(subjectData.Data !=null || subjectData.Data!=undefined)
  //    this.subject = subjectData.Data;
  //    //console.log(this.subject);
  }



}
