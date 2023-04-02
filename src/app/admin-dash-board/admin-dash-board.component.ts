import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { UsersService } from '../users.service';


const USERS:any = [];


@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit{

  degreeFlag:boolean | undefined;
  degreeFlag1:boolean = true;
  registerForm:any;
  options:any;
 
  users:any = [];
  page = 1;
	pageSize = 8;
	collectionSize = USERS.length;
	countries:any;
  login :any;
  appiledJobusers: any;
   applyFlag:boolean | undefined;
	constructor(private toastr: ToastrService,private service :ApiService,private route:ActivatedRoute,private userService:UsersService) {
		this.refreshUsers();
	}
  ngOnInit() {
   
    this.getUsers();
    this.getAppiledJobUsers();

    this.route.queryParams.subscribe(res=>{
      console.log(res);
      // alert(JSON.stringify(res))
      this.login = res['login'];
    })

    this.options = {opacity:1};
    this.createForm();
  }

  

  getUsers(){
    this.service.getUsers().subscribe((res:any)=>{
      console.log(res);
      this.users = res['userDetails'];
      
    })
  }


    

  getAppiledJobUsers(){
    this.service.getAppiledUsers().subscribe((res:any)=>{
      console.log(res);
      this.appiledJobusers = res['jobDetails'];
      
    })
  }

	refreshUsers() {
		this.countries =  this.users.map((users:any, i:number) => ({ id: i + 1, ...users })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}


  createForm(){
    this.registerForm =  new FormGroup(
      {
        
        jobTitle:new FormControl('',[Validators.required]),
        jobResponsibilites:new FormControl('',[Validators.required]),
      
        jobRequirments:new FormControl('',[Validators.required]),
  
      }
    );
  }








get f() { return this.registerForm.controls; }

  

saveJob(){
this.service.saveJob(this.registerForm.value).subscribe((res:any)=>{
  console.log(res);
  if(res['success']==="true"){
 this.toastr.success(res['message'],'SUCCESS')
 this.createForm();
  }else{
    this.toastr.error(res['message'],'ERROR')
  }
})
}

deleteUser(id:any){
  this.service.deketeuser(id).subscribe(res=>{
    console.log(res);
    this.getUsers();
  })
}


reject(id:any){
  this.service.deleteAppiledJobUser(id).subscribe(res=>{
    console.log(res);
    this.getAppiledJobUsers();
  })
}


}
