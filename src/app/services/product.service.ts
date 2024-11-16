import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductEntity} from "../model/product.entity";
import {environment} from "ng-zorro-antd/core/environments";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpp: HttpClient) {
  }

  getProducts(){
    return this.httpp.get<ProductEntity[]>('http://localhost:3001/api/inventario').pipe(
      map(data => data as ProductEntity[]),
    )
  }
}
