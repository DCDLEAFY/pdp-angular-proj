import { Injectable, ɵgetInjectableDef } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Game } from "./game";

@Injectable({providedIn: 'root'})
export class SharedService {

    private GameData = new BehaviorSubject<Game[]>([]);

    constructor() {
        
    }

    UpdateGameData(game : Game[]){
        this.GameData.next(game)
    }

}