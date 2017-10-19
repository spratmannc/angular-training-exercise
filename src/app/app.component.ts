import { Component } from '@angular/core';
import { Celebrity } from "./celebrity";
import { DataServiceService } from './services/data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: [],
  providers: [DataServiceService]
})
export class AppComponent {
  title = 'app';

  selectedCelebrity: Celebrity;
  
  celebs: Array<Celebrity> = [];
  
  constructor(private data: DataServiceService) {

    data.celebs.subscribe(newCelebs => this.celebs = newCelebs);

    this.celebs.forEach((c,i) => { 
      c.index = i; 
    });

  }

}
