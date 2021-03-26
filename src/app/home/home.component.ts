import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
  trigger('slideInOut', [
    state('in', style({
      transform: 'translate3d(0,0,0)'
    })),
    state('out', style({
      transform: 'translate3d(50%, 0, 0)'
    })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ]),
]
})
export class HomeComponent implements OnInit {
  sidenavState = 'in';
  isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
