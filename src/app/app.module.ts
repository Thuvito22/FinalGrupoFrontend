import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Importa el enrutador

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Añade el módulo de enrutamiento si lo tienes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }