import { Component } from '@angular/core';
import { Game } from '../shared/game';
import { GameService } from '../shared/game.service';

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
}