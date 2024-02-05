import { Component } from '@angular/core';
interface Images {
  imgSrc: string;
  imgAlt: string;
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  images: Images[] = [
    { imgSrc: './assets/images/poert1.png', imgAlt: 'image1' },
    { imgSrc: './assets/images/port2.png', imgAlt: 'image2' },
    { imgSrc: './assets/images/port3.png', imgAlt: 'image3' },
    { imgSrc: './assets/images/poert1.png', imgAlt: 'image4' },
    { imgSrc: './assets/images/port2.png', imgAlt: 'image5' },
    { imgSrc: './assets/images/port3.png', imgAlt: 'image6' },
  ];

  showModal = false;
  selectedImage: string | null = null;

  openModal(imgSrc: string): void {
    this.selectedImage = imgSrc;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedImage = null;
  }
}
