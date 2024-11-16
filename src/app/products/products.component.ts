import { Component, OnInit } from '@angular/core';
import { ProductEntity } from "../model/product.entity";
import { ProductService } from "../services/product.service";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductEntity[] = [];
  displayProducts: ProductEntity[] = [];
  pageIndex: number = 1;
  pageSize: number = 4;
  total: number = 1;

  constructor(private productService: ProductService, private modal: NzModalService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.total = this.products.length;
        this.updateDisplayProducts(); // Update the display products initially and after data is fetched
      }
    });
  }

  onPageChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.updateDisplayProducts(); // Update display products whenever the page changes
  }

  private updateDisplayProducts(): void {
    const startItem = (this.pageIndex - 1) * this.pageSize;
    const endItem = startItem + this.pageSize;
    this.displayProducts = this.products.slice(startItem, endItem);
  }



}
