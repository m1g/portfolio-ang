import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public projects: Array<Object> = [
    { name: 'USF - My Compass', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio illo soluta sed ipsam impedit corporis architecto, et dicta odit saepe!', image: '../../assets/usf.jpg', link:'' },
    { name: 'Project 2', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio illo soluta sed ipsam impedit corporis architecto, et dicta odit saepe!', image: 'http://placehold.it/700x400', link:'' },
    { name: 'Project 3', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio illo soluta sed ipsam impedit corporis architecto, et dicta odit saepe!', image: 'http://placehold.it/700x400', link:'' },
    { name: 'Project 4', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio illo soluta sed ipsam impedit corporis architecto, et dicta odit saepe!', image: 'http://placehold.it/700x400', link:'' },
    { name: 'Project 5', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio illo soluta sed ipsam impedit corporis architecto, et dicta odit saepe!', image: 'http://placehold.it/700x400', link:'' },
    { name: 'Project 6', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio illo soluta sed ipsam impedit corporis architecto, et dicta odit saepe!', image: 'http://placehold.it/700x400', link:'' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
