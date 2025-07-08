import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
catalogs = [
  {
    name: "RN HS",
    image: "catalogimg/rnhscatalog1.jpeg",
    description: "Description of Catalog 1",
    route: "/catalog/rnhs"
  },
  {
    name: "VC HS",
    image: "catalogimg/vchscatalog1.jpeg",
    description: "Description of Catalog 2",
    route: "/catalog/vchs"
  },
  {
    name: "Kids HS",
    image: "catalogimg/kidshscatalog1.jpeg",
    description: "Description of Catalog 3",
    route: "/catalog/kidhs"
  },
  {
    name: "Red Track",
    image: "catalogimg/trackcatalog1.jpg",
    description: "Description of Catalog 4",
    route: "/catalog/track"
  }
];

}
