import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() action = new EventEmitter();
  @Input() disabled? = false;
  @Input() label? = 'Salvar';
  constructor() {}

  ngOnInit(): void {}
}
