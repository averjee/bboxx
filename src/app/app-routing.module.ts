import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './@components/Users/users.component';
import { AddUserComponent } from './@components/Users/add-user/add-user.component';


const routes: Routes = [
  {
    path: '', component: UsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
