import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter : {{ counter }}
</h3>

<button (click)="increaseBy(1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
`
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  counter = 10;

  public increaseBy(value:number): void {
    this.counter += value;
    if (this.counter < 0 )
      this.counter = 0;
  }

  public resetCounter() {
    this.counter = 10;
  }
}
