import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path:"",component:LoginComponent },
  { path:"dashboard", component:DashboardComponent ,canActivate:[authGuard]},
  { path:"employees", component:EmployeelistComponent ,canActivate:[authGuard]},
  { path:"employees/add", component:AddComponent },
  { path:"employees/edit/:id", component:EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
