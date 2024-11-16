import {DetalleOrdenEntity} from "./detalle_orden.entity";

export class OrdenCompraEntity {
  id!: number;
  fecha_orden!: string;
  total_orden!: number;
  estado!: string;
  detalles!: DetalleOrdenEntity[];
}
