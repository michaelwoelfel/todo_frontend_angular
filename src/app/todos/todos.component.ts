import { Component } from '@angular/core';
import {  MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

}
