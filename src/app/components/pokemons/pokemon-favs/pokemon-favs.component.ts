import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-favs',
  templateUrl: './pokemon-favs.component.html',
  styleUrls: ['./pokemon-favs.component.scss']
})
export class PokemonFavsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private pokemonSvc: PokemonService) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonSvc.pokemons;
  }

}
