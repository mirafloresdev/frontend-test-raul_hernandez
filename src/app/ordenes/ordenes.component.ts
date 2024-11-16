import {Component, OnInit} from '@angular/core';
import {OrdenCompraEntity} from "../model/orden_compra.entity";
import {OrdenService} from "../services/orden.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {DetalleOrdenComponent} from "./detalle-orden/detalle-orden.component";

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent implements OnInit {

  ordenes: OrdenCompraEntity[] = [];
  displayOrdenes: OrdenCompraEntity[] = [];
  pageIndex: number = 1;
  pageSize: number = 4;
  total: number = 0;
  orden: OrdenCompraEntity = new OrdenCompraEntity();

  constructor(private ordenService: OrdenService, private modal: NzModalService) { }

  ngOnInit() {
    this.ordenService.getOrdenes().subscribe({
      next: (res) => {
        this.ordenes = res;
        this.total = this.ordenes.length;
        this.updateDisplayOrdenes();
      }
    });
  }

  onPageChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.updateDisplayOrdenes();
  }

  private updateDisplayOrdenes(): void {
    const startItem = (this.pageIndex - 1) * this.pageSize;
    const endItem = startItem + this.pageSize;
    this.displayOrdenes = this.ordenes.slice(startItem, endItem);
  }

  obtenerDetalle(id:number){
    this.ordenService.getOrdenById(id).subscribe({
      next: (res) => {
        this.modal.create({
          nzTitle:'Detalle de Orden',
          nzContent: DetalleOrdenComponent,
          nzCentered:true,
          nzFooter:null,
          nzData:{
            orden: res
          }
        })
      }
    })
  }
}
