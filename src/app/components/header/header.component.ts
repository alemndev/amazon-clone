import { Component } from '@angular/core';
import { BarSearchComponent } from '../bar-search/bar-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BarSearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
