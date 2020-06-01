import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
// import { SharedModule } from './../shared/shared.module';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent, ListComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class MainModule { }
