import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { BehaviorSubject, map, mergeMap, Observable, Subject, switchMap, tap } from 'rxjs';
import { MessagesService } from 'src/shared/services/messages.service';

@Component({
  selector: 'maf-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDisplayComponent {

  /* Let an _errors$ observable emit each time the errors input is set to a collection of validation errors. */
  private _errors$ = new Subject<ValidationErrors | null>();
  @Input() set errors(value: ValidationErrors | null) {
    this._errors$.next(value); // The _errors$ observable 
  }

  /* Create a messages$ observable that emits the collection of messages that correspond to the latest emitted collection of validation errors. */
  public messages$ = this._errors$.pipe(switchMap(errors => 
    this.messagesService.getValidationMessages(errors)));

  // @Input() set errors(value: ValidationErrors | null) {
  //   this.messagesService.getValidationMessages(value).subscribe(messages => {
  //     this._messages$.next(messages);
  //   })
  // }

  // private _messages$ = new Subject<string[]>();
  // public messages$ = this._messages$.asObservable();

  // public hasMessages$ = this.messages$.pipe(map(messages => 
  //   messages.length > 0));

  constructor(
    private messagesService: MessagesService
  ) { }
}
