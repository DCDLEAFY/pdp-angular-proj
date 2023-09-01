import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Game } from '../shared/game';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  @Input() public game: any;
  public gameKey: any;

  constructor(public activeModal: NgbActiveModal){ }

  ngOnInit(): void {
    console.log(this.game)
  }

  addModal(){
    let woo = [
      {
        title: "Game Number Modal",
        description: "Description Modal",
        genre: "Genre Modal",
        rRP: 11,
        imagePath: "Modal",
        isDeleted: false
      }
    ]
    console.log("Add Modal")
    this.activeModal.close(this.game);
  }

  updateModal(){
    console.log("Update Modal")
    this.activeModal.close(this.game)
  }
}
