import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductEntity} from "../model/product.entity";
import {map, Observable} from "rxjs";
import {OrdenCompraEntity} from "../model/orden_compra.entity";

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private httpp: HttpClient) {
  }

  getOrdenes(){
    return this.httpp.get<OrdenCompraEntity[]>('http://localhost:3001/api/orden').pipe(
      map(data => data as OrdenCompraEntity[]),
    )
  }

  getOrdenById(id: number): Observable<OrdenCompraEntity> {
    return this.httpp.get<OrdenCompraEntity>('http://localhost:3001/api/orden/detallesByOrden/'+id).pipe(
      map(data => data as OrdenCompraEntity)
    )
  }
}
