import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductNavComponent } from './product-nav/product-nav.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent,RouterOutlet, CatalogComponent, ProductNavComponent, ProductsComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SDR';
}
