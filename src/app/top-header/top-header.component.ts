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

 
constructor(private route:Router,private toast:ToastrService,public service :ApiService){

}
 

  ngOnInit(){

  }





 
    logout(){
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        this.toast.success('Logged Out Successfully ','SUCCESS');
        this.route.navigate(['home']);
    
    }
  
  


  
}
