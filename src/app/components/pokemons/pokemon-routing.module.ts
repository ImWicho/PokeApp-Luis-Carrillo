import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonIndexComponent } from './pokemon-index/pokemon-index.component';
import { PokemonFavsComponent } from './pokemon-favs/pokemon-favs.component';

const routes: Routes = [
  { path: '', component: PokemonIndexComponent },
  { path: 'favs', component: PokemonFavsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule { }
