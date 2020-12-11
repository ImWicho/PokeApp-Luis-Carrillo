import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonIndexComponent } from './pokemon-index/pokemon-index.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonFavsComponent } from './pokemon-favs/pokemon-favs.component';
import { UniversalModule } from 'src/app/modules/universal.module';
import { PokemonRoutingModule } from './pokemon-routing.module';



@NgModule({
  declarations: [
    PokemonIndexComponent,
    PokemonDetailComponent,
    PokemonFavsComponent],
  imports: [
    UniversalModule,
    PokemonRoutingModule
  ],
  exports : [
    PokemonIndexComponent,
    PokemonDetailComponent,
    PokemonFavsComponent
  ]
})
export class PokemonModule { }
