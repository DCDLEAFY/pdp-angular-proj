import { Component, Input } from '@angular/core';
import { GameService } from '../library/game.service';
import { OnInit } from '@angular/core';
import { Game } from '../library/game';


@Component({
  selector: 'app-table-view-component',
  templateUrl: './table-view-component.component.html',
  styleUrls: ['./table-view-component.component.css']
})
export class TableViewComponentComponent implements OnInit {

  @Input() gamesData : Game[] = [];
  

  constructor(private _gameService: GameService){

  }

  ngOnInit(): void {
    this._gameService.httpGetGames()
    .subscribe({
      next: (data) => this.gamesData = data,
      error: (error) => console.log(error)
    });
  }
}
