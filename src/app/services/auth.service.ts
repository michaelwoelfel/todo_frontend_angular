import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
  
})

export class AuthService {


  constructor(private httpClient: HttpClient) { }

  loginWithPassword(username:string, password:string,) {
    const url = environment.baseUrl + 'login/';
    const body = {
      "username": username,
      "password": password,
    }
    return lastValueFrom(this.httpClient.post(url, body));
}
  
}
