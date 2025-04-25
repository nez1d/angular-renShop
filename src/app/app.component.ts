import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderBaseComponent} from './pages/shared/header-base/header-base.component';
import {FooterBaseComponent} from './pages/shared/footer-base/footer-base.component';
import {RegisterServiceService} from './data/services/register/register-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderBaseComponent, FooterBaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RenStore';
}
