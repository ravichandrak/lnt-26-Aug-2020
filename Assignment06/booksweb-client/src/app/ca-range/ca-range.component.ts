import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ca-range',
  template: `
    <div class='row'>
      <button class='col-md-4 col-sm-4' 
        [disabled]='this.value<=this.min'
        (click)='decrease()' >
        <i class="fa fa-arrow-circle-down"></i>
      </button>
      <span class='col-md-4 col-sm-4'>{{value}}</span>
      <button class='col-md-4 col-sm-4' 
      [disabled]='this.value>=this.max'
      (click)='increase()' >
      <i class="fa fa-arrow-circle-up"></i>
      </button>
    </div>
  `,
  styles: [
    `
    *{
      margin-left:0px;
      margin-right:0px;
    }
    div{
      min-width:100px;
      width:100px;
      max-width:100px;
    }
    button{
      border:0px;
      background:transparent;
    }
    `
  ]
})
export class CaRangeComponent implements OnInit {

  @Input() value=120;
  @Input() min=50;
  @Input() max=200;
  @Input() delta=10;

  @Output() onValueChange:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  decrease() {
    this.change(this.value-this.delta);
  }
  
  increase() {
    this.change(this.value+this.delta);
  }

  change(newValue) {
    if(newValue<this.min)
      newValue=this.min;
    if(newValue>this.max)
      newValue=this.max;

    this.value=newValue;

    this.onValueChange.emit(this.value);
  }

}
