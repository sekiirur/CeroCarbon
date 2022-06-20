import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ElementRef: ElementRef) { }

  ngOnInit(): void {
    this.ElementRef.nativeElement.ownerDocument.body.style.backgroundColor= '#FCFFE7';
  }

}
