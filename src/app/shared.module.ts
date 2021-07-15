import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from './pages/catalog/services/data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DataService
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule {
}

