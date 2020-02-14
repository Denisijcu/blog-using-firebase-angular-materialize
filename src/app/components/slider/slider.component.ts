import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
    
export class SliderComponent {
    @Input() isLoading;
    @Output() isLoaded;
  constructor() { }
  
    ngOnInit() {
      
       
  }

  addPost() {
    return null;
  }
}