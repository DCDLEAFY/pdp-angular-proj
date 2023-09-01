import { Component } from '@angular/core';
import { Game } from '../shared/game';
import { GameService } from '../shared/game.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';
@Component({
  selector: 'app-table-action-bar',
  templateUrl: './table-action-bar.component.html',
  styleUrls: ['./table-action-bar.component.css']
})


export class TableActionBarComponent {

  public game : Game = 
    {
      id: 1,
      title: "temp",
      description: "temp",
      genre: "temp",
      rRP: 0,
      imagePath: "temp",
      isDeleted: false
    }

  constructor(
    private GameService: GameService,
    private modalService: NgbModal){}

  createModal(){
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.game = this.game;
    modalRef.result.then((result) => {
      if(result){
        this.GameService.httpAddGame(result)
      } else {
        console.log("Error Retreiving from modal")
      }
    }).catch(err =>  console.log(err))
  }
}