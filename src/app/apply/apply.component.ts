import { Component,OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent implements OnInit{
  closeResult = '';
  AppliedJobsByUserIdDetails:any
  angularFlag:any;
  javaFlag:any;
  count:any;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(private modalService: NgbModal,private service :ApiService,private toast:ToastrService) {}
  ngOnInit(){
    this.count = 0;
   this.getAppliedJobsByUserId();
  }

  open(content: any) {
    this.modalService.open(content, {
      size: 'xl',
      ariaLabelledBy: 'modal-basic-title',
    });

    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    // 	(result) => {
    // 		this.closeResult = `Closed with: ${result}`;
    // 	},
    // 	(reason) => {
    // 		this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // 	},
    // );
  }

  open1(content2: any) {
    this.modalService.open(content2, {
      size: 'xl',
      ariaLabelledBy: 'modal-basic-title',
    });

    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    // 	(result) => {
    // 		this.closeResult = `Closed with: ${result}`;
    // 	},
    // 	(reason) => {
    // 		this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // 	},
    // );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  applyContentList = [
    'Building self-contained, reusable, and testable modules and components',
    'Ensuring a clear dependency chain, in terms of both application logic as well as file relationships',
    'Ensuring high performance on mobile and desktop',
    'Writing non-blocking code, and resorting to advanced techniques such as multi-threading, when needed',
    'Cooperating with the back-end developer in the process of building the RESTful API',
    'Communicating with external web services',
    'Profile optimization (memory, speed)',
    'Knowledge of NodeJS and ReactJS',
    'Experience with back-end technologies (Node.js, Express) is a plus',
    'Strong proficiency in HTML, CSS3, and JavaScript',
    'Familiarity with newer specifications of ECMAScript is also a major advantage.',
  ];

  applyJavaContentList = [
    'Contribute to all stages of software development lifecycle',
    'Design, implement and maintain Java-based applications that can be high-volume and low-latency',
    'Analyze user requirements to define business objectives',
    'Envisioning system features and functionality',
    'Define application objectives and functionality',
    'Ensure application designs conform with business goals',
    'Develop and test software',
    'Identify and resolve any technical issues arising',
    'Create detailed design documentation',
    'Propose changes to current Java infrastructure',
    'Develop technical designs for application development',
    'Develop multimedia applications',
  ];

  applyJob(val: any) {
	console.log(val);

	const params ={} as any;

	if(val == 'java'){

		params['applyedRole'] = val? 'Java Developer' : '',
		params['userId'] = localStorage.getItem('userId') ? localStorage.getItem('userId') : ''
     this.service.saveAppiledJob(params).subscribe((res:any)=>{
      console.log(res);
      if(res['success'] === 'true'){
        this.modalService.dismissAll();
        this.toast.success(res['message'],'SUCCESS');
        this.getAppliedJobsByUserId();
      
      }else{
        this.toast.error(res['message'],'ERROR');
      }
  
 })
		

	}else{

		params['applyedRole'] = val? 'Angular Developer' : '',
		params['userId'] = localStorage.getItem('userId') ? localStorage.getItem('userId') : ''
    this.service.saveAppiledJob(params).subscribe((res:any)=>{
      console.log(res);
      if(res['success'] === 'true'){
        this.modalService.dismissAll();
        this.getAppliedJobsByUserId();
        this.toast.success(res['message'],'SUCCESS')
      }else{
        this.toast.error(res['message'],'ERROR');
      } 

	})
  }
}

getAppliedJobsByUserId(){

  this.service.getAppliedJobsByUserId(localStorage.getItem('userId')).subscribe((res:any)=>{
    console.log(res['jobDetails']);
    this.AppliedJobsByUserIdDetails = res['jobDetails'];
    this.AppliedJobsByUserIdDetails.forEach((ele:any) => {
       if(ele.applyedRole === 'Java Developer'){
          this.javaFlag = true;
       }

       if(ele.applyedRole === 'Angular Developer'){
         this.angularFlag = true;
       }
    });
  })
  
}
}
