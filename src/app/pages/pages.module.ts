import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { UniversalModule } from '../modules/universal.module';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    UniversalModule,
    ComponentsModule
  ],
  exports: [
    MainComponent
  ]
})
export class PagesModule { }
