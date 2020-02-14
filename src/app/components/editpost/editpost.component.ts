import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
    
export class EditpostComponent {
    @Input() isLoading;
    @Output() isLoaded;
  constructor() { }
  
    ngOnInit() {
      
       
  }
}