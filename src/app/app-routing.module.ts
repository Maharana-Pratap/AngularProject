import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../app/user/user.component';
import { UserResolverService } from '../app/user-resolver.service';
import { PromoComponent } from './promo/promo.component';

const routes: Routes = [
  { path : 'users', component : UserComponent , resolve : { users : UserResolverService}} ,
  { path : 'promise', component : PromoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  //providers: [UserResolverService]
})
export class AppRoutingModule { }
