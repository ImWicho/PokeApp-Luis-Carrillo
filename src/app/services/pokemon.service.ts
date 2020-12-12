import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon, PokemonAPI } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  ApiURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(nameOrId: string): Observable<PokemonAPI>{
    return this.http.get<PokemonAPI>(`${this.ApiURL}/${nameOrId}`).pipe(
      map(pokemon => {
        return pokemon;
      })
    );
  }
}
