import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from 'src/demo/demo.module';
import { PartyModule } from './features/party/party.module';
import { Configuration, CONFIGURATION } from 'src/shared/configuration/configuarion';
import { DefaultProvidersModule } from 'src/shared/default-providers.module';
// import { FixedConfiguration } from 'src/shared/configuration/fixed-configuration';
import jsonConfiguration from './app.configuration.json';


// export const constConfiguration: Configuration = {
//   numberPresentation: {
//       formatOnBlur: false,
//       decimalSeparator: '.',
//       groupSeparator: ' '
//   }
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DefaultProvidersModule,
    
    AppRoutingModule,
    DemoModule,
    PartyModule
  ],
  providers: [
    // { provide: CONFIGURATION, useExisting: FixedConfiguration }
    // { provide: CONFIGURATION, useValue: constConfiguration }
    { provide: CONFIGURATION, useValue: jsonConfiguration }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
