import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public icons = [
    { src: '../../assets/ang.png', link: '#', alt: 'angular' },
    { src: '../../assets/react.png', link: '#', alt: 'react' },
    { src: '../../assets/js.jpg', link: '#', alt: 'javascript' },
    { src: '../../assets/ts.png', link: '#', alt: 'typescript' }
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
