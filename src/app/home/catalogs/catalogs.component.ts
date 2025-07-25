import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-catalogs',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './catalogs.component.html',
  styleUrl: './catalogs.component.css'
})
export class CatalogsComponent {
catalogs = [
  {
    name: "RN HS",
    image: "catalogimg/rnhscatalog1.jpeg",
    description: "Round Neck Half Sleeve Catalog",
    route: "/home/catalogs/rnhs"
  },
  {
    name: "VC HS",
    image: "catalogimg/vchscatalog1.jpeg",
    description: "Vertical Collar Half Sleeve Catalog",
    route: "/home/catalogs/vchs"
  },
  {
    name: "Kids HS",
    image: "catalogimg/kidshscatalog1.jpeg",
    description: "Half Sleeve Catalog for Kids",
    route: "/home/catalogs/kidshs"
  },
  {
    name: "Red Track",
    image: "catalogimg/trackcatalog2.jpg",
    description: "Red Track Bottom-wear Catalog",
    route: "/home/catalogs/track"
  }
];

}
