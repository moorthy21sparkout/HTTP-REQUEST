import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserlistComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HTTP-REQUEST';
}
