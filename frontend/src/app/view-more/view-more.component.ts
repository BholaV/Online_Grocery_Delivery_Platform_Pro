import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {
  product: any;
  currentImage: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the product from the route state
    this.product = history.state.product;
    if (this.product) {
      this.currentImage = this.product.thumbnail; // Initialize with the main image
    }
  }

  // Method to change the main image
  changeImage(imageUrl: string): void {
    this.currentImage = imageUrl;
  }
}
