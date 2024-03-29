import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3030/users';

  user: UserAuth | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }


  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }


  addToLocalStorage(data: UserAuth) {
    this.user = {
      email: data.email,
      username: data.username,
      password: data.password,
      _id: data._id,
      accessToken: data.accessToken
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }




  login(email: string, password: string) {
    const api = this.apiUrl;
    return this.http.post<UserAuth>(`${api}/login`, { email, password });
  }


  register(email: string, username: string, password: string) {
    const api = this.apiUrl;
    return this.http.post<UserAuth>(`${api}/register`, { email, username, password });
  }


  logout() {
    localStorage.removeItem(this.USER_KEY);
    this.user = undefined;
  }


}
