import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetaPFrameService {

  constructor() { }

  log(message: string) {
    console.log(message);
  }
}
