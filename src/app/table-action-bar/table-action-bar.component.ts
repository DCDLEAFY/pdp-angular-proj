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
      title: "test",
      description: "test",
      genre: "test",
      rRP: 0,
      imagePath: "test",
      isDeleted: false
    }

  constructor(
    private GameService: GameService,
    private modalService: NgbModal){}

  addGame(){
    const body : Game = {
      id: 0,
      genre : "test",
      description : "test",
      imagePath: "test",
      rRP: 0,
      isDeleted: false,
      title: "Mock"
    }
    console.log(body, 'test')
    this.GameService.httpAddGame(body);
  }

  createModal(){
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.game = this.game;
    modalRef.result.then((result) => {
      if(result){
        console.log(result);
      } else {
        console.log("Maaaaan")
      }
    }).catch(err =>  console.log(err))
  }
}