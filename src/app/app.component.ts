import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AngularGoogleMapsComponent} from "./angular-google-maps/angular-google-maps.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularGoogleMapsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-google-maps';
}
