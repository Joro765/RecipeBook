import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { EmailDirective } from './validators/email.directive';



@NgModule({
  declarations: [
    WelcomeMsgComponent,
    LoaderComponent,
    EmailDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WelcomeMsgComponent, LoaderComponent, EmailDirective]
})
export class SharedModule { }
