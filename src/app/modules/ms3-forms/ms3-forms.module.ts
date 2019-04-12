import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ms3FormsRoutingModule } from './ms3-forms-routing.module';
import { PageInputComponent } from './pages/page-input/page-input.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [PageInputComponent, InputComponent],
  imports: [
    CommonModule,
    Ms3FormsRoutingModule
  ]
})
export class Ms3FormsModule { }
