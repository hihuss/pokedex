import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './components/overview/overview.component';
import {DetailPageComponent} from './components/detail-page/detail-page.component';

const routes: Routes = [
  { path: '', component: OverviewComponent},
  { path: 'details/:id', component: DetailPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
