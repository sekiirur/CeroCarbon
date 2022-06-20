import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageSRC= "assets/images/huerto1.jpg";
  imageALT = "Huerto";
  wifiimg = "assets/images/wifi-line.png"
  seedimg = "assets/images/gardening-farming.png"
  constructor() { }

  ngOnInit(): void {
    
  }

}
