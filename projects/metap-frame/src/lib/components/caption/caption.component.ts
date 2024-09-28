import { Component, Input } from '@angular/core';

/**
 * Represents a culture-dependent text.
 */
@Component({
  selector: 'mpf-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.css']
})
export class CaptionComponent {

  /** A string that in the current context uniquely identifies the culture-dependent text. */
  @Input() key!: string;

}
