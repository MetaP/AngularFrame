import { Component } from '@angular/core';
import { MetaPFrameService } from 'metap-frame';

@Component({
  selector: 'maf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFrame';

  constructor(metaPFrameService: MetaPFrameService) {
    metaPFrameService.log('** This is a test! **');
  }
}
