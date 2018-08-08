import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule
} from '@angular/material';
import { NgModule } from '@angular/core';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModules {}
