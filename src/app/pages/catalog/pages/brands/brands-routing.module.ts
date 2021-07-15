import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrandsComponent} from './components/brands/brands.component';

const routes: Routes = [
  {
    path: '',
    component: BrandsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BrandsRoutingModule {}
