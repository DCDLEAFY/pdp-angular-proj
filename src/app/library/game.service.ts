import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './game';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GameService{
    private url: string = "https://localhost:7257";

    constructor( private http: HttpClient){

    }


    httpGetGames(): Observable<Game[]>{
        return this.http.get<Game[]>(this.url + "/testing-getall");
    }

    httpAddGame(body : Game){
        console.log(body, 'inside')
        return this.http.post<Game>(this.url + "/add-game", body);
    }
}