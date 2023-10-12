import { Component } from '@angular/core';
import { Game } from '../shared/game';
import { GameService } from '../shared/game.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
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

    public gameTitle : string = "temp";

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
        console.log("Uncaught Error Retreiving from modal")
      }
    }).catch(err =>  console.log(err))
  }

  deleteBytTile(){
    const modalRef = this.modalService.open(ModalDeleteComponent);
    modalRef.componentInstance.gameTitle = this.gameTitle;
    modalRef.result.then((result) => {
      if(result){
        console.log("Success");
      } else {
        console.log("Uncaught Error deleting bt Title")
      }
    }).catch(err =>  console.log(err))
  }
}