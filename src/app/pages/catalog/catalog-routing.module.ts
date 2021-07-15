import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from './components/catalog/catalog.component';

const routes: Routes = [
  {
    path: '', component: CatalogComponent
  },
  {
    path: 'brands', loadChildren: () => import('./pages/brands/brands.module').then(m => m.BrandsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CatalogRoutingModule {
}
