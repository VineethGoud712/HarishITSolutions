import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  loginFlag:any;
  message!: string;
dashBoardName:any;
 
constructor(private route:Router,private toast:ToastrService,public service :ApiService){

}
 

  ngOnInit(){

  }





 
    logout(){
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('userId');
        this.toast.success('Logged Out Successfully ','SUCCESS');
        this.route.navigate(['home']);
    
    }


    applyJob(){
      if(localStorage.getItem('username') && localStorage.getItem('password')){
         this.route.navigate(['apply'])
      }else{
        this.toast.warning('Please Login and Apply Job','Information');
        this.route.navigate(['login']);
      }
    }

    dashboards(){
      if(localStorage.getItem('username') === 'ADMIN'){
      
        
        this.route.navigate(['adminDashboard']);
      }else{
        
        this.route.navigate(['userDashboard']);
      }

    }
  
  


  
}
