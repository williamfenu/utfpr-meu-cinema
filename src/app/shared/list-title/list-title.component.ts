import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.css'],
})
export class ListTitleComponent implements OnInit {
  iconPath = 'assets/movie-icon.png';
  @Input() label = 'label';

  constructor() {}

  ngOnInit(): void {}
}
