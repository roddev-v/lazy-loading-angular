import {NgModule} from '@angular/core';
import {CatalogComponent} from './components/catalog/catalog.component';
import {CatalogRoutingModule} from './catalog-routing.module';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CatalogRoutingModule,
    SharedModule
  ]
})
export class CatalogModule {
}
