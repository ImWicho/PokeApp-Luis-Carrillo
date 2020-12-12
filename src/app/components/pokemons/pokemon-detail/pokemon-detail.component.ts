import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

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

  constructor() { }

  ngOnInit(): void {
  }

}
