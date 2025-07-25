import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vchs',
  imports: [MatIconModule, MatCardModule, CommonModule],
  templateUrl: './vchs.component.html',
  styleUrl: './vchs.component.css'
})
export class VchsComponent {productImages: string[] = [
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
