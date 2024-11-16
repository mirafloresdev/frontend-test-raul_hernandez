import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {OrdenesComponent} from "./ordenes/ordenes.component";

const routes: Routes = [
  { path: 'productos', component: ProductsComponent },
  { path: 'ordenes', component: OrdenesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
