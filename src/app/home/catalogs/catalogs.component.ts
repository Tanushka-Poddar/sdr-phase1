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
    description: "Description of Catalog 1",
    route: "/home/catalogs/rnhs"
  },
  {
    name: "VC HS",
    image: "catalogimg/vchscatalog1.jpeg",
    description: "Description of Catalog 2",
    route: "/home/catalogs/vchs"
  },
  {
    name: "Kids HS",
    image: "catalogimg/kidshscatalog1.jpeg",
    description: "Description of Catalog 3",
    route: "/home/catalogs/kidhs"
  },
  {
    name: "Red Track",
    image: "catalogimg/trackcatalog1.jpg",
    description: "Description of Catalog 4",
    route: "/home/catalogs/track"
  }
];

}
