import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-product',
  imports: [],
  templateUrl: './table-product.component.html',
  styleUrl: './table-product.component.css'
})
export class TableProductComponent {
  @Input() products: any[] = []

}
