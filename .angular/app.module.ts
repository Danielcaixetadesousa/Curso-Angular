import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { FormsModule } from '@angular/forms';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBidingComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributosComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class SharedModule {}
