import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-managesubjects',
  templateUrl: './managesubjects.component.html',
  styleUrls: ['./managesubjects.component.css']
})
export class ManagesubjectsComponent implements OnInit {
  subjects:any
  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.GetSubjects().subscribe((subjectData:any)=>{
      this.subjects = subjectData.Data;
      console.log(this.subjects);
      
    })
  }

}
