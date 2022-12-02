import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class CurrentContextService {

    getTranslation(labelId: string ) : Observable<string>{
        return of(labelId);
    }

  }
  