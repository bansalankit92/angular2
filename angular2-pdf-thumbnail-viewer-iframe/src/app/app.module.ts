import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing'

import { PdfViewerComponent } from 'ng2-pdf-viewer';
import {MyPdfViewerComponent}from "./pdf-viewer/pdf-viewer.component";



@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    MyPdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]})
export class AppModule { }
