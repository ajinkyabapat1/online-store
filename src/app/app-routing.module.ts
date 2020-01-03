import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './shared/about-us/about-us.component';


const routes: Routes = [
  {path:'', redirectTo:'AboutUsComponent',pathMatch:"full"},
  {path:'about', component:AboutUsComponent},
  {path:'**', component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
