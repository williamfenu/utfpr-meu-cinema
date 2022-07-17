import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
})
export class BadgeComponent implements OnInit {
  @Input() label?: String;
  @Input() color?: String = 'white';

  constructor() {}

  ngOnInit(): void {}
}
