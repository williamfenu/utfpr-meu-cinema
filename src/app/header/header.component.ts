import { Component, OnInit } from '@angular/core';
import { menu } from '../models/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logoPath = '/assets/logo.png';
  menus: {
    main: menu;
    myLibray: menu;
  };

  constructor() {
    this.menus = {
      main: { label: 'Inicio', active: true },
      myLibray: { label: 'Minha Biblioteca', active: false },
    };
  }

  ngOnInit(): void {}

  changeActive = (event: Event) => {
    const htmlAnchorElement = event.target as HTMLAnchorElement;
    const menu = Object.values(this.menus).find(
      (menu) => menu.label === htmlAnchorElement.text
    );
    if (menu) {
      menu.active = true;
      Object.values(this.menus)
        .filter((menu) => menu.label !== htmlAnchorElement.text)
        .forEach((menu) => (menu.active = false));
    }
  };
}
