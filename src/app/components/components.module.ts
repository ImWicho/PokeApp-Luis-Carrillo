import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    ComponentsRoutingModule
  ],
  exports: [
    SharedModule
  ]
})
export class ComponentsModule { }
