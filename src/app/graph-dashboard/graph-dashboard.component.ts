import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart ,registerables} from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-graph-dashboard',
  templateUrl: './graph-dashboard.component.html',
  styleUrls: ['./graph-dashboard.component.css']
})
export class GraphDashboardComponent implements OnInit {

  data: any;

  options: any;
  canvas: any;
    ctx: any;

    
  data1: any;

  options1: any;
  canvas1: any;
    ctx1: any;

    
  contactListNumb: any;
  totalUsernumb:any;
  appiledUsers:any;
  shortlistnumb:any;
  rejectlistnumb:any;


  @ViewChild('mychart') mychart: any;
  @ViewChild('myChart1') mychart1: any;
  Shortlistlength: any;
  Shortlists: any;
  RejectsList: any;
  constructor(
  
    private toastr: ToastrService,
    private service: ApiService,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    Chart.register(...registerables);

  }
   

  

    ngOnInit(){
this.getSizesOfTabs();
this.getShortlistJobs();
   
   
    }

    ngAfterViewInit() {
    
   
      setTimeout(() => {
        this.getpieChart();
        this.getBarChart();
      }, 500);
    
     
      
    }

    getBarChart(){

      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
          type: 'bar',
          data: {
              datasets: [{
                  label: 'Total Users',
                  data: [1,10, this.totalUsernumb, 40,],
                  backgroundColor: "rgb(115 185 243 / 65%)",
                  borderColor: "#007ee7",
                 
              },
              {
                  label: 'Appiled Users',
                  data: [1,6, this.appiledUsers, 70, ],
                  backgroundColor: "#47a0e8",
                  borderColor: "#007ee7",
                
              }],
              labels: [ 'JAN 2023','FEB 2023', 'MAR 2023', 'APR 2023']
          },
      });

    }



    getpieChart(){
  
     

      this.canvas1 = this.mychart1.nativeElement;
      this.ctx1 = this.canvas1.getContext('2d');

      new Chart(this.ctx1, {
          type: 'pie',
          data: {
            datasets: [{
                data: [this.appiledUsers,this.contactListNumb,this.totalUsernumb,this.shortlistnumb,this.rejectlistnumb]
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'APPILED USERS',
                'CONTACTED USERS',
                'TOTAL USERS',
                'SHORT LIST',
                'REJECTIONS'
               
            ]
        },
      });

    }



    


    getSizesOfTabs(){
      this.userService.getSizesOfTabs().subscribe((res:any)=>{
        if(res['success']=="true"){

          this.totalUsernumb = res['TotalUsers'] <=9 ?"0"+ res['TotalUsers'] : res['TotalUsers'];
      
          this.appiledUsers = res['TotalAppileUsers'] <= 9 ? "0"+res['TotalAppileUsers'] :res['TotalAppileUsers'];
          this.contactListNumb = res['TotalContactUs'] <=9 ? "0"+res['TotalContactUs']:res['TotalContactUs'];
         
  
        }
      })
    }


    getShortlistJobs(){
      this.service.getRejectJobdetails().subscribe((res:any)=>{
        console.log(res);
    
        if(res['success']==="true"){
          this.Shortlistlength = res['RejectjobDetails'] || [];
         this.Shortlists =  this.Shortlistlength.filter((x:any)=>{return x.status == 'Shortlisted'});
         console.log(this.Shortlists.length);
         this.shortlistnumb = this.Shortlists.length <=9 ? "0"+this.Shortlists.length :this.Shortlists.length;
  
         this.RejectsList =  this.Shortlistlength.filter((x:any)=>{return x.status == 'Rejected'});
  
         this.rejectlistnumb = this.RejectsList.length <=9 ? "0"+this.RejectsList.length : this.RejectsList.length;
        
        }else{
    
        }
        
      })
      }



}
