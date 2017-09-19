import { Component } from '@angular/core';
import { Celebrity } from "./celebrity";


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  title = 'app';

  selectedCelebrity: Celebrity;
  
  celebs: Array<Celebrity> = [
    {
      name: "Tom Cruise",
      act: true,
      sing: false,
      dance: false
    },
    {
      name: "Lady Gaga",
      act: false,
      sing: true,
      dance: true
    },
    {
      name: "Michael Jackson",
      act: false,
      sing: true,
      dance: true
    },
    {
      name: "Michael Jordan",
      act: false,
      sing: false,
      dance: false
    }

  ];
  
  constructor() {
    this.celebs.forEach((c,i) => { 
      c.index = i; 
    } )
  }

  onSaved(celeb: Celebrity) {
    this.celebs.push(celeb);
  }
}
