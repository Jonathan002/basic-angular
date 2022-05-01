import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {

  @Input() waterState: string = 'liquid';
  ngOnChangesCalls = 0;
  ngOnChanges(changes: SimpleChanges) {
    console.log('log changes.current', changes['waterState'].currentValue);
    console.log('log changes.previous', changes['waterState'].previousValue);
    this.ngOnChangesCalls++
  }
}
