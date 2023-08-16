import { Component } from '@angular/core';
import { Game } from '../library/game';
import { GameService } from '../library/game.service';

@Component({
  selector: 'app-table-action-bar',
  templateUrl: './table-action-bar.component.html',
  styleUrls: ['./table-action-bar.component.css']
})


export class TableActionBarComponent {

  constructor(private GameService: GameService){}

  addGame(){
    const body : Game = {
      id: 0,
      Genre : "",
      Description : "",
      ImagePath: "",
      RRP: 0,
      isDeleted: false,
      Title: "test100"
    }
    console.log(body, 'test')
    this.GameService.httpAddGame(body);
  }
}