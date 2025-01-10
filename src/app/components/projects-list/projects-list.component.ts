import { Component } from '@angular/core';
import { ButtonWithBorderBottomComponent } from "../button-with-border-bottom/button-with-border-bottom.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ButtonWithBorderBottomComponent, CommonModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  projectsList = [
    {
      images: {
        small: 'thumbnail-project-1-small.webp',
        large: 'thumbnail-project-1-large.webp',
      },
      name: 'Design Portfolio',
      technologies: ['HTML', 'CSS'],
    },
    {
      images: {
        small: 'thumbnail-project-2-small.webp',
        large: 'thumbnail-project-2-large.webp',
      },
      name: 'E-Learning Landing Page',
      technologies: ['HTML', 'CSS'],
    },
    {
      images: {
        small: 'thumbnail-project-3-small.webp',
        large: 'thumbnail-project-3-large.webp',
      },
      name: 'Todo Web App',
      technologies: ['HTML', 'CSS', 'Javascript'],
    },
    {
      images: {
        small: 'thumbnail-project-4-small.webp',
        large: 'thumbnail-project-4-large.webp',
      },
      name: 'Entertainment Web App',
      technologies: ['HTML', 'CSS', 'Javascript'],
    },
    {
      images: {
        small: 'thumbnail-project-5-small.webp',
        large: 'thumbnail-project-5-large.webp',
      },
      name: 'Memory Game',
      technologies: ['HTML', 'CSS', 'Javascript'],
    },
    {
      images: {
        small: 'thumbnail-project-6-small.webp',
        large: 'thumbnail-project-6-large.webp',
      },
      name: 'Art Gallery Showcase',
      technologies: ['HTML', 'CSS', 'Javascript'],
    },
  ]
}
