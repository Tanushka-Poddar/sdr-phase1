import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroimgComponent } from "./heroimg/heroimg.component";

@Component({
  selector: 'app-header',
  imports: [RouterLink, HeroimgComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  goToLogin() {
    console.log("Navigating to login page");
   }
}
