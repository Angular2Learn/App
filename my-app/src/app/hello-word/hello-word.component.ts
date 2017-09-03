import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello-word.component.html',
  styleUrls: ['./hello-word.component.css']
})
export class HelloWordComponent {
  title = 'My-app';
}

@Component({
  selector: 'app-search-place',
  template: '<input placeholder="{{text}}" #input/>' +
  '<input type="button" value="Search" (click)="search(input)"/><br/>' +
  '<input type="button" value="Clear" (click)="clear(input)"/>'
})
export class SearchComponent {
  @Input('placeholder')
  text: String = 'Please input2..';
  clear(input){
    input.value = "";
  }
  search(input){
    alert(input.value);
  }
}

