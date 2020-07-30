import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { matriculesMock } from './mock/matricules.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App collègue';
  collegueMock = collegueMock;
  matriculesMock = matriculesMock;
}
