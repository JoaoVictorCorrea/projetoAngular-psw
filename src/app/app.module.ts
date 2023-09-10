import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkComponent } from './components/drink/drink.component';
import { DrinkService } from './services/drink.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TesteComponent } from './components/teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkComponent,
    NotFoundComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DrinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
