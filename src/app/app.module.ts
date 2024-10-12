import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from 'src/demo/demo.module';
import { PartyModule } from './features/party/party.module';
import { Configuration, CONFIGURATION } from 'src/shared/configuration/configuarion';
import { DefaultProvidersModule } from 'src/shared/default-providers.module';
// import { FixedConfiguration } from 'src/shared/configuration/fixed-configuration';
import jsonConfiguration from './app.configuration.json';
import { TryModule } from 'src/try/try.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// export const constConfiguration: Configuration = {
//   numberPresentation: {
//       formatOnBlur: false,
//       decimalSeparator: '.',
//       groupSeparator: ' '
//   }
// };

export function HttpLoaderFactory(http: HttpClient) {
  return  new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    DefaultProvidersModule,
    
    AppRoutingModule,
    DemoModule,
    PartyModule,
    TryModule
  ],
  providers: [
    // { provide: CONFIGURATION, useExisting: FixedConfiguration }
    // { provide: CONFIGURATION, useValue: constConfiguration }
    { provide: CONFIGURATION, useValue: jsonConfiguration }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
