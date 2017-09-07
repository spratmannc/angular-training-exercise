import { Component, OnInit, Input } from '@angular/core';
import { Celebrity } from "../celebrity";

@Component({
  selector: '[app-celebrityrow]',
  templateUrl: "./celebrityrow.component.html",
  styles: []
})
export class CelebrityrowComponent implements OnInit {

  @Input()
  celeb: Celebrity;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.celeb.dance = !this.celeb.dance;
  }
}
