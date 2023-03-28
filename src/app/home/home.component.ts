import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = ['/assets/images/banner1.jpg','/assets/images/banner2.jpg','/assets/images/banner3.jpg'];
}
