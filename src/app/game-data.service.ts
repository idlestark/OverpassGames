import { Game } from './game-list/Game';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "https://638401da3fa7acb14feb4bec.mockapi.io/api/v1/games/games"

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(URL).pipe(
      tap((games: Game[]) => games.forEach(game => game.quantity = 0))

    );
  }
}
