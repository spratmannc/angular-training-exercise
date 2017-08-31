import { Component } from '@angular/core';
import { Celebrity } from "./celebrity";


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  title = 'app';

  //rows: Array<string> = ["Tom Cruise", "Lady Gaga", "Michael Jackson", "Michael Jordan"];
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
}
