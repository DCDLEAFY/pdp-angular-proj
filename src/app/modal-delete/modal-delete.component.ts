import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {

  @Input() public gameTitle: any;

  constructor(public activeModal: NgbActiveModal){ }

  ngOnInit(): void {
    console.log(this.gameTitle)
  }

  deleteModal(){
    console.log("Add Modal")
    this.activeModal.close(this.gameTitle);
  }

  updateModal(){
    console.log("Update Modal")
    this.activeModal.close(this.gameTitle)
  }
}
