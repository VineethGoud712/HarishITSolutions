import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  closeResult = '';
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(private modalService: NgbModal) {}

	open(content:any) {
    this.modalService.open(content, { size: 'lg' ,ariaLabelledBy: 'modal-basic-title' });
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
}
