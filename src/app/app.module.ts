import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { AttractionsComponent } from './components/attractions/attractions.component';
import { AnreiseComponent } from './components/attractions/anreise/anreise.component';
import { UnterkunftComponent } from './components/attractions/unterkunft/unterkunft.component';
import { MadridMapComponent } from './components/attractions/madrid-map/madrid-map.component';
import { MadridMetroComponent } from './components/attractions/madrid-metro/madrid-metro.component';
import { WichtigesComponent } from './components/attractions/wichtiges/wichtiges.component';
import { ProgrammComponent } from './components/attractions/programm/programm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttractionsComponent,
    AnreiseComponent,
    UnterkunftComponent,
    MadridMapComponent,
    MadridMetroComponent,
    WichtigesComponent,
    ProgrammComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
