import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { environment } from '../../environments/environment.prod';
import { lastValueFrom } from 'rxjs';
import { CommonModule, NgFor, NgForOf } from '@angular/common';



@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    MatCardModule,
    NgFor,
    HttpClientModule
    



  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
    
  
})
export class TodosComponent {
  
  constructor(public httpClient: HttpClient) {

  }
  todos: any = [];

  async ngOnInit() {
    try {
    this.todos = await this.loadTodos();
    console.log("todos",this.todos);
  } catch(e) {
    console.error(e)
  }
  
  }
  

  loadTodos() {
    const url = environment.baseUrl + 'todos/';
    return lastValueFrom(this.httpClient.get(url));
  }

}
