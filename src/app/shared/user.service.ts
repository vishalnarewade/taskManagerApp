import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any = localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : [];;
  loggedUser = localStorage.getItem('logged')
    ? JSON.parse(localStorage.getItem('logged')) 
    : {};
    
  constructor() { }

  checkUser(data) {
    let { name, pass } = data;
    this.loggedUser = this.users.find(x => name === x.name && pass === x.pass);
    localStorage.setItem('logged', JSON.stringify(this.loggedUser));
    return this.loggedUser;
  }

  newUser(data) {
    let { name, pass } = data;
    this.users.push({
      name,
      pass,
      id: this.users.length + 1
    });

    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
