import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  public createUser(data) {
    return this.http.post('http://localhost:3000/users', data);
  }

  public updateUser(data, id) {
    return this.http.put(`http://localhost:3000/users/${id}`, data);
  }

  public authUser(data) {
    return this.http.post('http://localhost:3000/auth/login', data);
  }
}
