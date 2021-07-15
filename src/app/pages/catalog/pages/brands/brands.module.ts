import {NgModule} from '@angular/core';
import {BrandsComponent} from './components/brands/brands.component';
import {BrandsRoutingModule} from './brands-routing.module';

@NgModule({
  declarations: [BrandsComponent],
  imports: [BrandsRoutingModule]
})
export class BrandsModule {
}
