import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-review-paper',
  templateUrl: './review-paper.component.html',
  styleUrls: ['./review-paper.component.css']
})
export class ReviewPaperComponent implements OnInit {
  subjects: any;
  subject: any;
  questions:any
  
  showPaper : boolean
  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.GetSubjects().subscribe((subjectData:any)=>{
      this.subjects = subjectData.Data;
      console.log(this.subjects);
      
    })
    
  }

  displayPaper(subId)
  {
    this.showPaper = true;
    this.service.GetQuestpaperwithsubjId(subId).subscribe((questionData:any)=>{
      if(questionData.Data !=null || questionData.Data!=undefined)
      this.questions = questionData.Data;
      console.log(this.questions);
      
    })
  }
}
