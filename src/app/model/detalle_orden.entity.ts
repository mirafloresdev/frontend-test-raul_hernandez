import {ProductEntity} from "./product.entity";

export class DetalleOrdenEntity{
  id!: number;
  id_orden!: number;
  id_producto!: number;
  cantidad!: number;
  precio_unitario!: number;
  sub_total!: number;
  producto!: ProductEntity;
}
