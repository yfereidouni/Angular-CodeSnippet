import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent
 {  
  title = 'code-challenge';

  userName= '';
  buttonDisabledStatus = false;

  onReset(){
    this.userName= '';
  }
}
