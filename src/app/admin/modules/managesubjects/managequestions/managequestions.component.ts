import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-managequestions',
  templateUrl: './managequestions.component.html',
  styleUrls: ['./managequestions.component.css']
})
export class ManagequestionsComponent implements OnInit {
  subject:any
  id:any  
  constructor(public service:DataService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
       this.id= params['SubId']});
    debugger
    this.service.GetSubject(this.id).subscribe((subjectData:any)=>{
      this.subject = subjectData.Data;
      console.log(this.subject);
      
    })
  }

}
