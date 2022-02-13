import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddList = [1, 3, 5, 7];
  evenList = [2, 4, 6];
  onlyOdd = true;
  iValue=10;
}
