import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChuckModule } from "./chuck/chuck.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChuckModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
