import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
    
export class LoaderComponent {
    @Input() isLoading;
    @Output() isLoaded;
  constructor() { }
  
    ngOnInit() {
      
        const isL = setTimeout(() => this.isLoading = false, 1000);
  }
}