import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clarity-selectable-row';

  selected = [];
  selected2 = [];

  items = [
    { val1: 'thing 1', val2: 'thing 2', val3: 'thing3', val4: 'a', val5: 'b', val6: 'c' },
    { val1: 'thing 4', val2: 'thing 5', val3: 'thing6', val4: 'd', val5: 'e', val6: 'f' },
    { val1: 'thing 7', val2: 'thing 8', val3: 'thing9', val4: 'g', val5: 'h', val6: 'i' },
    { val1: 'thing 10', val2: 'thing 11', val3: 'thing12', val4: 'j', val5: 'k', val6: 'l' },
    { val1: 'thing 13', val2: 'thing 14', val3: 'thing15', val4: 'm', val5: 'n', val6: 'o' }
  ];
}
