import { Component, EventEmitter, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matSearch } from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'bar-search',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './bar-search.component.html',
  styleUrl: './bar-search.component.css',
  viewProviders: [
    provideIcons({ matSearch })
  ]
})
export class BarSearchComponent {
  searchIn: string[] = [
    'All',
    'Arts & Crafts',
    'Automotive',
    'Baby',
    'Beauty & Personal Care',
    'Books',
    "Boys' Fashion",
    'Computers',
    'Deals',
    'Digital Music',
    'Electronics',
    "Girl's Fashion",
    'Health & Household',
    'Home & Kitchen',
    'Industrial & Scientific',
    'Kindle Store',
    'Luggage',
    "Men's Fashion",
    'Movies & TV',
    'Music, CDs & Vinyl',
    'Pet Supplies',
    'Prime Video',
    'Software',
    'Sports & Outdoors',
    'Tools & Home Improvement',
    'Toys & Games',
    'Video Games',
    "Women's Fashion"
  ]
  searchValue: string = ''

  updateSearchValue(e: any) {
    this.searchValue = e.target.value
    console.log(this.searchValue)
  }
}
