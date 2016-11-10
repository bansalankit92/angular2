import { Routes, RouterModule } from '@angular/router';

import {MyPdfViewerComponent}from "./pdf-viewer/pdf-viewer.component"

const appRoutes: Routes = [
  { path: 'pdf', component: MyPdfViewerComponent },
  { path: '', redirectTo: '/pdf', pathMatch: 'full' }

];


export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
