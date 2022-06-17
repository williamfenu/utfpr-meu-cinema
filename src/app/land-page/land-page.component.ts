import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css'],
})
export class MainComponent implements OnInit {
  mostrarSpan: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  changeMostrarSpan() {
    this.mostrarSpan = !this.mostrarSpan;
  }
}
