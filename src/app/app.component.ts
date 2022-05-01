import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() waterState: string = 'liquid';
  title = 'basic-angular';

  ngOnChanges(changes: SimpleChanges) {
    console.log('log changes.current', changes['waterState'].currentValue);
    console.log('log changes.previous', changes['waterState'].previousValue);
  }
}
