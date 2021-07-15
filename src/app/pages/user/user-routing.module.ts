import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule {
}
