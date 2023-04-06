import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-short-list',
  templateUrl: './short-list.component.html',
  styleUrls: ['./short-list.component.css']
})
export class ShortListComponent implements OnInit{

  Shortlist:any;
  Shortlists:any;
  totalShortlistJob:any;
  constructor(private service :ApiService){



  }


  ngOnInit(){
    this.getShortlistJobs();
  }


  getShortlistJobs(){
  this.service.getRejectJobdetails().subscribe((res:any)=>{
    console.log(res);

    if(res['success']==="true"){
      this.Shortlist = res['RejectjobDetails'] || [];
     this.Shortlists =  this.Shortlist.filter((x:any)=>{return x.status == 'Shortlisted'});
     console.log(this.Shortlists);
     
      this.totalShortlistJob = res['TotalRejectJobs'];
    }else{

    }
    
  })
  }
}
