import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Celebrity } from "../celebrity";

@Component({
  selector: 'celebform',
  templateUrl: './celebform.component.html',
  styles: []
})
export class CelebformComponent implements OnInit {

  celeb: Celebrity;

  @Output()
  saved: EventEmitter<Celebrity> = new EventEmitter<Celebrity>();

  constructor() { 
    this.reset();
  }

  ngOnInit() {
  }

  submit() {
    this.saved.emit(this.celeb);
    this.reset();
  }

  reset() {
    this.celeb = {
      name: undefined,
      sing: false,
      act: false,
      dance: false
    };
  }

}
