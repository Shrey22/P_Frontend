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
  myarray: any[];
  scorearray:any ;


  constructor(public service:DataService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() 
  {
    
    this.route.params.subscribe(params=>
      {
        
      this.subjectid= params.subjectid
    
      console.log(this.subjectid);
      });


    // this.service.GetQuestpaperwithsubjId(this.subjectid)
     this.service.GetQuestpaperwithsubjId(this.subjectid)
    .subscribe((questionpaper:any)=>
    {
      
      this.Subjpaper = questionpaper.Data
      console.log(this.Subjpaper.Question)   
    });

  }  

  // answers(datafromUI:any)
  // {
  //   debugger
    
  //     console.log(datafromUI.value);
  //   let formData = datafromUI.value

  //   console.log(formData);
    
  //   // var myJSON = JSON.stringify(formData);

  //   // console.log(myJSON);
  //    let uid = parseInt(sessionStorage.getItem("UserId")); 

  //   // console.log(formData);
  //   // let qid =formData.QueId

  //     const array = Object.keys(formData).map( qid=>({QueId:qid, value:formData[qid]}));
  //     console.log(array);
  //     let UID = {userId:uid,subId:this.subjectid}
  //    // array.push(UID);
     
  //     this.service.SubmitAns(array)
  //     .subscribe((reply:any)=>{
  //       debugger
  //       if(reply.Status == "success")
  //       {
  //         alert("Your Score is "+reply.Data+".\nYou can go through our Sample paper Series.\nclick Ok")
  //         this.router.navigate(["user/samplepapers"])
  //       }
  //       console.log(reply.Status)
  //     })
      
  // }


  answers(datafromUI:any)
  {
    debugger
    
      console.log(datafromUI.value);
    let formData = datafromUI.value

    console.log(formData);
    
     let uid = parseInt(sessionStorage.getItem("UserId")); 

     var subjid = parseInt(this.subjectid)

      const array = Object.keys(formData).map( qid=>({QueId:qid, value:formData[qid]}));
      console.log(array);
      let UID = {userId:uid,subId:this.subjectid}
     // array.push(UID);
     
      this.service.SubmitAns(array)
      .subscribe((reply:any)=>{
        debugger
        if(reply.Status == "success")
        {
          alert("Your Score is "+reply.Data+".\nYou can go through our Sample paper Series.\nclick Ok")

          this.scorearray = 
            {"UserId":uid.toString(),"SubId":subjid.toString(),"CntCorrectAns":(reply.Data).toString()}
          
          // let rd = reply.Data
          // let tempObj = {uid,subjid,rd}
        console.log(this.scorearray);

        // const array1 = Object.keys(tempObj).map( qid=>({UserId:qid, value:tempObj[qid]}),sid=>({SubId:sid, value:tempObj[sid]}));
        // console.log(array1);
        
        this.service.SendScore(this.scorearray)
        .subscribe((replyfromserver:any)=>{
          console.log(replyfromserver.Status);
          
        })

          this.router.navigate(["user/samplepapers"])
        }
        console.log(reply.Status)
      })
      
  }


  }


  