import {NgModule} from '@angular/core';
import {ProductsComponent} from './components/products/products.component';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule {
}
