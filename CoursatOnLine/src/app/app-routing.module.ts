import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
  { path: 'index', component:HomeComponent},
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(c => c.CategoriesModule) },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
