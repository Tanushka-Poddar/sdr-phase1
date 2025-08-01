import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CatalogsComponent } from "../catalogs.component";

@Component({
  selector: 'app-rnhs',
  imports: [MatIconModule, MatCardModule, CommonModule, CatalogsComponent],
  templateUrl: './rnhs.component.html',
  styleUrl: './rnhs.component.css'
})
export class RnhsComponent {
   productImages: string[] = [
    'heroimage/collage2.png',
    'heroimage/shirts_catalog.jpg',
  ];

  currentIndex: number = 0;

  nextImage() {
    if (this.currentIndex < this.productImages.length - 1) {
      this.currentIndex++;
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
