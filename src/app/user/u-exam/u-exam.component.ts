import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-u-exam',
  templateUrl: './u-exam.component.html',
  styleUrls: ['./u-exam.component.css']
})
export class UExamComponent implements OnInit {
  subject:any
  subjectid:any   
  message:string
  Subjpaper:any
  constructor(public service:DataService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    
    this.route.params.subscribe(params=>{
      this.subjectid= params.subjectid
  
      console.log(this.subjectid);

      this.service.GetSubject(this.subjectid)
      .subscribe((fetchsubj:any)=>{
        
        console.log(fetchsubj);
        
        if(fetchsubj.Status == "success")
        {

          this.subject = fetchsubj.Data.SubName
          console.log(this.subject);
          
        }
      })
    });
  }

  startexam() 
  {
       this.router.navigate(['/user/uexam/paper/'+this.subjectid]);
      
  
  }
}

