import { NgModule } from "@angular/core";
import { CONFIGURATION } from "./configuration/configuarion";
import { FixedConfiguration } from "./configuration/fixed-configuration";

@NgModule({
    providers: [
      { provide: CONFIGURATION, useExisting: FixedConfiguration }
    ]
  })
  export class DefaultProvidersModule { }