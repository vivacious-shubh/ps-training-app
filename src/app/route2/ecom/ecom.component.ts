import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.component.html',
  styleUrls: ['./ecom.component.css']
})
export class EcomComponent implements OnInit {
  viewModel: string = 'grid';
  products: Array<any> = [
    { name: 'Item 1', type: 'Personal', price: 300 },
    { name: 'Item 2', type: 'Personal', price: 400 },
    { name: 'Item 3', type: 'Stationary', price: 500 },
    { name: 'Item 4', type: 'Stationary', price: 600 },
    { name: 'Item 5', type: 'Grocery', price: 700 },
    { name: 'Item 6', type: 'Personal', price: 300 },
    { name: 'Item 7', type: 'Grocery', price: 300 },
    { name: 'Item 8', type: 'Personal', price: 500 },
    { name: 'Item 9', type: 'Medicine', price: 600 },
    { name: 'Item 10', type: 'Apparels', price: 700 },
    { name: 'Item 11', type: 'Personal', price: 300 },
    { name: 'Item 12', type: 'Personal', price: 400 },
    { name: 'Item 13', type: 'Stationary', price: 500 },
    { name: 'Item 14', type: 'Stationary', price: 600 },
    { name: 'Item 15', type: 'Grocery', price: 700 },
    { name: 'Item 16', type: 'Personal', price: 300 },
    { name: 'Item 17', type: 'Grocery', price: 300 },
    { name: 'Item 18', type: 'Personal', price: 500 },
    { name: 'Item 19', type: 'Medicine', price: 600 },
    { name: 'Item 20', type: 'Apparels', price: 700 },
    { name: 'Item 21', type: 'Personal', price: 300 },
    { name: 'Item 22', type: 'Personal', price: 400 },
    { name: 'Item 23', type: 'Stationary', price: 500 },
    { name: 'Item 24', type: 'Stationary', price: 600 },
    { name: 'Item 25', type: 'Grocery', price: 700 },
    { name: 'Item 26', type: 'Personal', price: 300 },
    { name: 'Item 27', type: 'Grocery', price: 300 },
    { name: 'Item 28', type: 'Personal', price: 500 },
    { name: 'Item 29', type: 'Medicine', price: 600 },
    { name: 'Item 30', type: 'Apparels', price: 700 },
    { name: 'Item 31', type: 'Personal', price: 300 },
    { name: 'Item 32', type: 'Personal', price: 400 },
    { name: 'Item 33', type: 'Stationary', price: 500 },
    { name: 'Item 34', type: 'Stationary', price: 600 },
    { name: 'Item 35', type: 'Grocery', price: 700 },
    { name: 'Item 36', type: 'Personal', price: 300 },
    { name: 'Item 37', type: 'Grocery', price: 300 },
    { name: 'Item 38', type: 'Personal', price: 500 },
    { name: 'Item 39', type: 'Medicine', price: 600 },
    { name: 'Item 40', type: 'Apparels', price: 700 }
  ];
  filterValues: Array<any> = [...new Set(this.products.map(o => o.price))];
  priceFilterModel: any = '';
  filteredProducts: Array<any> = [...this.products];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(): void {
    if(this.priceFilterModel) {
      this.filteredProducts = this.products.filter(o => o.price === parseInt(this.priceFilterModel));
      console.log(this.filteredProducts);
    } else {
      this.filteredProducts = [...this.products];
    }
  }

}
