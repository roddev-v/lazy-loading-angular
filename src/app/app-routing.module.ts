import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard, LoadGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: async () => (await import('./pages/catalog/catalog.module')).CatalogModule
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    canLoad: [LoadGuard],
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'catalog'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
