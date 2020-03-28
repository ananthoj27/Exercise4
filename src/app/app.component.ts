import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Exercise 4';
  image1: string;
  alt: string;
  label: string;


  constructor() {

  }

  dog() {
    this.image1 = 'assets/images/dog.PNG';
    this.alt = 'dog_img';
    this.label = 'Dog';
  }

    cat() {
      this.image1 = 'assets/images/cat.PNG';
      this.alt = 'cat_img';
      this.label = 'Cat';
    }

    rabbit() {
      this.image1 = 'assets/images/rabbit.jpg';
      this.alt = 'rabbit_img';
      this.label = 'Rabbit';
    }
}
