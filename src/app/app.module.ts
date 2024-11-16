import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { ProductsComponent } from './products/products.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzModalModule} from "ng-zorro-antd/modal";
import { OrdenesComponent } from './ordenes/ordenes.component';
import { DetalleOrdenComponent } from './ordenes/detalle-orden/detalle-orden.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdenesComponent,
    DetalleOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzTabsModule,
    NzTableModule,
    NzPaginationModule,
    NzModalModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
