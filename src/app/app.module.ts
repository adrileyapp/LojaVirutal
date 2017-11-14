
import { PainelComponent } from './painel/painel.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { RodapeComponent } from './layout/rodape/rodape.component';
import { TopoComponent } from './Layout/topo/topo.component';


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    TopoComponent,
    PainelComponent,
    HomeComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
