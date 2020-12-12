import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon, PokemonAPI } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  ApiURL = 'https://pokeapi.co/api/v2/pokemon';
  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {
    this.checkArray();
  }

  getPokemon(nameOrId: string): Observable<PokemonAPI>{
    return this.http.get<PokemonAPI>(`${this.ApiURL}/${nameOrId}`).pipe(
      map(pokemon => {
        return pokemon;
      })
    );
  }

  addPokemon(pokemon: Pokemon): void{
    this.pokemons.push(pokemon);
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
  }

  removePokemon(pokemon: Pokemon): void{
    const index = this.pokemons.map((poke) => poke.id).indexOf(pokemon.id);
    this.pokemons.splice(index, 1);
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
  }

  checkPokemon(pokemon: Pokemon): boolean{
    const poke = this.pokemons.find((x) => x.id === pokemon.id);
    if (poke){
      return true;
    }
    return false;
  }

  checkArray(): void{
    if (localStorage.getItem('pokemons')){
      this.pokemons = JSON.parse(localStorage.getItem('pokemons') || '[]');
    }else{
      localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
    }
  }
}
