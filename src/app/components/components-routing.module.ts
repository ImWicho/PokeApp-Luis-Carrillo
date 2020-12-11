import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', loadChildren: () => import('./pokemons/pokemon.module').then(m => m.PokemonModule) }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule { }
