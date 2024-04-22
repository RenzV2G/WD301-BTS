import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {
  imageUrl: string = 'assets/images/mainpic.png';
  imageUrll: string = "assets/images/1.jpg";
  aboutus = '\t"Breaking the Silence: Voices for Mental Health" is a platform dedicated to destigmatizing mental health issues through open communication and empathy. Our goal is to create a safe environment where people can share their stories and find support without fear of judgment. Through advocacy and solidarity, we aim to foster understanding and encourage acceptance on the mental health journey.';
}
