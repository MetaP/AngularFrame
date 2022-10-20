import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from 'src/demo/demo.module';
import { PartyModule } from './features/party/party.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
    PartyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
