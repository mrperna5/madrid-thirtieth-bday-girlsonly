import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AttractionsComponent} from "./components/attractions/attractions.component";
import {AnreiseComponent} from "./components/attractions/anreise/anreise.component";
import {UnterkunftComponent} from "./components/attractions/unterkunft/unterkunft.component";
import {MadridMapComponent} from "./components/attractions/madrid-map/madrid-map.component";
import {MadridMetroComponent} from "./components/attractions/madrid-metro/madrid-metro.component";
import {WichtigesComponent} from "./components/attractions/wichtiges/wichtiges.component";
import {ProgrammComponent} from "./components/attractions/programm/programm.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attractions', component: AttractionsComponent },
  { path: 'attractions/anreise', component: AnreiseComponent},
  { path: 'attractions/unterkunft', component: UnterkunftComponent},
  { path: 'attractions/programm', component: ProgrammComponent},
  { path: 'attractions/madrid-map', component: MadridMapComponent},
  { path: 'attractions/madrid-metro', component: MadridMetroComponent},
  { path: 'attractions/wichtiges', component: WichtigesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
