import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomepComponent } from '../app/homep/homep.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
