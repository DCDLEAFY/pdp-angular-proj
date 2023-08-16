import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Game } from './game';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GameService{

    // MockEntry = [
    //     {
    //         id: 1,
    //         Title: "Game Number 1",
    //         Description: "Description 1",
    //         Genre: "Genre 1",
    //         RRP: 11,
    //         ImagePath: "1",
    //         isDeleted: false
    //     }
    // ]

    private url: string = "https://localhost:7257";
    private gameDataSource = new BehaviorSubject<Game[]>([]);
    gameData = this.gameDataSource.asObservable();

    constructor( private http: HttpClient){

    }

    UpdateGameData(gData : Game[]){
        this.gameDataSource.next(gData)
    }

    httpGetGames(){
        this.http.get<Game[]>(this.url + "/testing-getall").subscribe({
            next: (allGames : Game[]) => {
                this.UpdateGameData(allGames);
                console.log("Games Retrieved")
            },
            error: (err : Error) => console.error(err)
        })
    }

    httpAddGame(body : Game){
        var result;
        this.http.post<Game>(this.url + "/add-game", body).subscribe({
            next: (game : Game) => {
                result = game;
                console.log("Game added");
                this.httpGetGames();
            },
            error: (err : Error) => console.error(err)
        })

        

        return result;
    }
}