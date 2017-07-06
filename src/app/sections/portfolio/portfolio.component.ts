import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ProjectsService]
})
export class PortfolioComponent implements OnInit {
  projects: {
    name: string,
    caption: string,
    image: string,
    link: string
  }[] = []; 
  
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.projects;
  }
}
