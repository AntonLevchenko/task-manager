import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MatAutocomplete, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    InputComponent,
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption
  ],
  exports: [
    InputComponent,
    AutocompleteComponent
  ]
})
export class FormsModule { }
