import {NgModule} from '@angular/core';
import {ProductsComponent} from './components/products/products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule {
}
