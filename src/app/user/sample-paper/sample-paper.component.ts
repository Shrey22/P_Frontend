import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-paper',
  templateUrl: './sample-paper.component.html',
  styleUrls: ['./sample-paper.component.css']
})
export class SamplePaperComponent implements OnInit {

  constructor(public service:DataService,public router:Router) { }

  ngOnInit() {
  }

  pdf()
  {
    debugger
    this.service.GetPDF()
    .subscribe((fetchpdf)=>{
      debugger
      console.log("pdf fetched")
    })
  }

}
