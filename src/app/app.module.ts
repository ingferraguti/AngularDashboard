import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
