import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {
  @Input() control: FormControl;
  @Input() options: any;

  public filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value || '')),
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((item: string) => item.toLowerCase().includes(filterValue));
  }
}
