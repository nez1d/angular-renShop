import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderBaseComponent} from './layout/header-base/header-base.component';
import {FooterBaseComponent} from './layout/footer-base/footer-base.component';
import {GetProductCatalogService} from './core/services/get-product-catalog.service';
import {ProductMiniViewModel} from './core/models/product/ProductMiniViewModel';
import {AuthService} from './core/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderBaseComponent, FooterBaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RenStore';

  catalogService = inject(GetProductCatalogService);
  authService = inject(AuthService);

  products : ProductMiniViewModel[] = [];
}
