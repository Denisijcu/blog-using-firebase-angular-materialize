import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-actionbtn',
  templateUrl: './actionbtn.component.html',
  styleUrls: ['./actionbtn.component.css']
})
    
export class ActionbtnComponent {
    @Input() isLoading;
    @Output() isLoaded;
  constructor() { }
  
    ngOnInit() {
      
       
  }
}