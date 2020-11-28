import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'tutorial';
  // users = ['rafael', 'miguel', 'don', 'leonardo', 'splinter']
  name: string = "Ryan Ray";
  age: number | undefined;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor(){
    this.age = 28;
    this.address = {
      street: '221B Baker Street',
      city: 'London'
    }
    this.hobbies = ['swimming', 'read', 'write']; 
  }
}
