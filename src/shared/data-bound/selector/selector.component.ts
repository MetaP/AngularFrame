import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
    selector: 'maf-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})
// export class SelectorComponent<TItem, TValue> {

//     @Input() items: TItem[] = [];
//     @Input() value$: Observable<TValue> | undefined;

//     @Input() caption: (item: TItem) => string = (item: TItem) => item as string;

// }
export class SelectorComponent {

    @Input() items: any[] = [];
    @Input() value$: Observable<any> | undefined;

    @Input() caption: (item: any) => string = (item: any) => item as string;

}
