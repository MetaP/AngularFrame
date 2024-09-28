import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OusiaService {

  constructor() { }

  test() {
    console.log(`** OusiaService.test() called **`);
  }
}
