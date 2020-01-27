import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-managequestions',
  templateUrl: './managequestions.component.html',
  styleUrls: ['./managequestions.component.css']
})
export class ManagequestionsComponent implements OnInit {
  subject:any
  subId:any  
  message:string
  quesAdded:any
  questions: any;
  editQues:boolean
  specificQues: any;
  // Question:any
  // Opt1:any
  // Opt2:any
  // Opt3:any
  // Opt4:any
  // CorrectAns:any
  // // cnt:number
  constructor(public service:DataService, public route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(params=>{
       this.subId= params['SubId']});
    
    this.service.GetSubject(this.subId).subscribe((subjectData:any)=>{
      if(subjectData.Data !=null || subjectData.Data!=undefined)
      this.subject = subjectData.Data;
      //console.log(this.subject);
    })

    this.service.GetQuestpaperwithsubjId(this.subId).subscribe((questionData:any)=>{
      if(questionData.Data !=null || questionData.Data!=undefined)
      this.questions = questionData.Data;
      //console.log(this.questions);
    });
  }
  addQues(quesObj)
  {
    // console.log(quesObj.value);
    // const array = Object.keys(quesObj.value).map(key => ({type: key, value: quesObj[key]}));
    // console.log(array); 
    
  //  this.Question=quesObj.Question
  //  this.Opt1=quesObj.Opt1
  //  this.Opt2=quesObj.Opt2
  //  this.Opt3=quesObj.Opt3
  //   debugger
  //   //this.cnt = 0;
    quesObj.value.SubId = this.subId;
    this.service.AddQuestions(quesObj.value)
    .subscribe((result:any)=>{
      console.log(result.Status);
      if (result.Status == "success") {
        this.message = "Question added"
        alert(this.message)

        //++this.cnt
        //this.quesAdded = ("Question "+this.cnt);
        quesObj.resetForm()

      }
      else
      {
        this.message = "Failed"
        
      }
    })
  }
  editQuestion(ques)
  {
    this.editQues = true 
    this.specificQues = ques;
    console.log(this.specificQues);
     
  }
  cancel()
  {
    this.editQues =false;
  }

}
