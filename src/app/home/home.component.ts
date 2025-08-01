import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CatalogsComponent } from './catalogs/catalogs.component';  
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CatalogsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
