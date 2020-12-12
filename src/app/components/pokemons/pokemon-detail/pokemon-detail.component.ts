import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon = {
    id: 0,
    name: '',
    ability: '',
    type: '',
    height: 0,
    weight: 0,
    img: ''};

  check = false;

  constructor(private pokemonSvc: PokemonService) { }

  ngOnInit(): void {
    this.checkPokemon(this.pokemon);
  }

  addPokemon(pokemon: Pokemon): void{
    this.pokemonSvc.addPokemon(pokemon);
    this.checkPokemon(this.pokemon);
  }

  removePokemon(pokemon: Pokemon): void{
    this.pokemonSvc.removePokemon(pokemon);
    this.checkPokemon(this.pokemon);
  }

  checkPokemon(pokemon: Pokemon): boolean{
    this.check = this.pokemonSvc.checkPokemon(pokemon);
    return this.check;
  }

}
