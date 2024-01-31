import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';






@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
   
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public authService: AuthService, public httpClient: HttpClient, public router: Router) {

  }
  username: string = "";
  password: string = "";


  async onLogin(event: Event) {
    event.preventDefault();
    try  {
    let resp = await this.authService.loginWithPassword(this.username,this.password,this.httpClient)
    this.router.navigateByUrl('todos')

  } catch(e) {
console.error(e);
alert('Falscher Benutzername oder Passwort');

  }
  }

 
}
