import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserModule } from './user/user.module';
import { RecipeModule } from './recipe/recipe.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    RecipeModule,
    HttpClientModule,
    AppRoutingModule, // Винаги най-отдолу заради error page !!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
