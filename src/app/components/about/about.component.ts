import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
    
export class AboutComponent {
    @Input() isLoading;
    @Output() isLoaded;

    myTexto = 'Firebase is too awesome!!!!';
  constructor() { }
  
    ngOnInit() {
      
       
  }
}