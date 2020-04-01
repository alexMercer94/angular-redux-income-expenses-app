import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/components/auth/login/login.component';
import { RegisterComponent } from 'src/components/auth/register/register.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: DashboardComponent,
    loadChildren: '../components/dashboard/dashboard.module#DashboardModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
