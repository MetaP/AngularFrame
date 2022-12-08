import { InjectionToken } from "@angular/core";
import { NumberPresentation } from "./number-presentation";

export const CONFIGURATION = new InjectionToken<Configuration>('configuration');

export interface Configuration {
    readonly numberPresentation: NumberPresentation;
}