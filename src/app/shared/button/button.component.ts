import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() action = new EventEmitter();
  @Input() type? = 'button';
  @Input() color? = '';
  @Input() label? = 'Salvar';
  @Input() disabled? = false;
  @Input() active = false;
  constructor() {}

  ngOnInit(): void {}
}
