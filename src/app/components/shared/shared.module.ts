import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
