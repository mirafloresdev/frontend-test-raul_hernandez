import {Component, Inject, OnInit} from '@angular/core';
import {DetalleOrdenEntity} from "../../model/detalle_orden.entity";
import {NZ_MODAL_DATA} from "ng-zorro-antd/modal";
import {OrdenCompraEntity} from "../../model/orden_compra.entity";

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.scss']
})
export class DetalleOrdenComponent implements OnInit {

  orden: OrdenCompraEntity = new OrdenCompraEntity();
  detalles: DetalleOrdenEntity[] = [];

  constructor(@Inject(NZ_MODAL_DATA) private data: any) {}

  ngOnInit() {
    this.orden = this.data.orden;
    this.detalles = this.orden.detalles
  }

}
