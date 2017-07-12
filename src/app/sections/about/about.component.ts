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
    { src: '../../assets/ts.png', link: '#', alt: 'typescript' },
    { src: '../../assets/html.png', link: '#', alt: 'html' },
    { src: '../../assets/css.png', link: '#', alt: 'css' },
    { src: '../../assets/sass.png', link: '#', alt: 'sass' },
    { src: '../../assets/github.png', link: '#', alt: 'github' },
    { src: '../../assets/firebase.png', link: '#', alt: 'firebase' },
    { src: '../../assets/bootstrap.png', link: '#', alt: 'bootstrap' },
    { src: '../../assets/ionic.png', link: '#', alt: 'ionic 2' },
    { src: '../../assets/affinity_designer.png', link: '#', alt: 'affinity designer' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
