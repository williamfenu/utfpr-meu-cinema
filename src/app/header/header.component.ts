import { Component, OnInit } from '@angular/core';
import { menu } from '../models/menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logoPath = '/assets/logo.png';
  labelButton = 'Cadastrar novo Filme';
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

  onChangeActiveMenu = (event: Event): void => {
    const htmlAnchorElement = event.target as HTMLAnchorElement;
    this.changeActiveMenu(htmlAnchorElement.text);
  };

  changeActiveMenu(menuText: string): void {
    const menu = Object.values(this.menus).find(
      (menu) => menu.label === menuText
    );
    if (menu) {
      menu.active = true;
      Object.values(this.menus)
        .filter((menu) => menu.label !== menuText)
        .forEach((menu) => (menu.active = false));
    }
  }
}
