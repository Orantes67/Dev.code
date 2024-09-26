import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Dev {
  imagen: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dev.code';
  dev: Dev[] = [
    { imagen: '../assets/images/Imagen-figura.jpg' },
    { imagen: '../assets/images/dashboart.png' }
  ];
}
