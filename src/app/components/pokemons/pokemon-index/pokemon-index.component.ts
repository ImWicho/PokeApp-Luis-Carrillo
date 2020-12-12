import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pokemon, PokemonAPI } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss']
})
export class PokemonIndexComponent implements OnInit {
  urlLogo = environment.urlLogo;
  loading = false;
  error = false;
  poke: Pokemon | undefined;

  form = this.fb.group({
    pokemon: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private pokemonSvc: PokemonService) { }

  ngOnInit(): void {
  }

  onSearchPokemon(): void{
    if (this.form.valid){
      this.error = false;
      this.loading = true;
      this.poke = undefined;
      const stringPoke = this.form.get('pokemon')?.value;
      this.pokemonSvc.getPokemon(stringPoke).subscribe((data) => {
        this.setPokemon(data);
        this.loading = false;
        this.form.reset();
      }, error => {
      this.loading = false;
      this.error = true;
      });
    }
  }

  setPokemon(data: PokemonAPI): void{
    this.poke = {
      id: data.id,
      name: data.name,
      ability: data.abilities[0].ability.name,
      height: data.height,
      weight: data.weight,
      img: data.sprites.front_default,
      type: data.types[0].type.name
    };
  }

}
