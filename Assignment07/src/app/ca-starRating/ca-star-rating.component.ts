import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ca-star-rating',
  template: `
    <div class='star-outer'>
      <div class='star-inner' [ngStyle]="{ 'width' : this.ratingInPrec }">
      
      </div>
    </div>
  `,
  styleUrls: ['./ca-star-rating.component.css']
})
export class CaStarRatingComponent implements OnInit {

  public numStars = 5;
  @Input() rating = 0;
  public ratingInPrec:string = '0%';

  constructor() {}

  ngOnInit(): void {
    
    this.ratingInPrec = ((this.rating/this.numStars) * 100) + '%';
  }  
}
