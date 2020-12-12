import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'src/app/modules/universal.module';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    RouterModule,
    UniversalModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
