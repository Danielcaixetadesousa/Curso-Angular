import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { TesteComponent } from './teste/teste.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [NewComponentComponent, TesteComponent, InputComponent],
  exports: [NewComponentComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

