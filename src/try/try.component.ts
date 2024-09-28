import { Component } from '@angular/core';
import { OusiaService } from 'ousia';

@Component({
  selector: 'maf-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss']
})
export class TryComponent {

  constructor(ousiaService: OusiaService) {
    ousiaService.test();
  }
}
