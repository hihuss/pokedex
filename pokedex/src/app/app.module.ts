import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root-app/app.component';
import { OverviewComponent } from './components/overview/overview.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule} from '@angular/common/http';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TreeModule} from 'primeng/tree';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
