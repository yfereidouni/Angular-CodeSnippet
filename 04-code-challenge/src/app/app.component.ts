import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '04-code-challenge';
  
  showSecret = false;
  
  // log : number[] = [];
  log : any[] = [];


  conter = 0;


    onToggledDetails(){
      this.showSecret = !this.showSecret;
      // this.log.push(this.log.length + 1);
      this.log.push(new Date());
    }
}

