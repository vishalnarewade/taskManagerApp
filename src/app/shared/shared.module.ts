import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    NavbarComponent, NotificationComponent, SafeHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, SafeHtmlPipe]
})

export class SharedModule { }
