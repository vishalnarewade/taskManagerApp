import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main.component';

const routes: Routes = [{
  path: 'main',
  component: MainComponent, 
  children: [{
    path: 'list',
    component: ListComponent,
  }, {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
