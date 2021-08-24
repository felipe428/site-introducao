import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
  @Input() n: number;

  constructor() {}

  ngOnInit() {}

  gerador() {
    let list: number[] = [];
    for (let i = 1; i <= this.n; i++) {
      list.push(10 * Math.random());
    }
    return list;
  }
}
