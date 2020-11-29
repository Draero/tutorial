import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  name: string='Jhon Carter';
  age: number=28;
  users: string[] = ['Ryan', 'Joe', 'Cameron'];
  posts = Array();

  constructor(private dataservice: DataService){
    this.dataservice.getData().subscribe(data => {
        this.posts = data;
    });
  }

  addUser(newUser:any){
    this.users.push(newUser.value);
    return false;
  }

  deleteUser(user:string){
    for (let i=0; i<this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
}
