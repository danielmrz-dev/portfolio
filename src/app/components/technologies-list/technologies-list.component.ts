import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies-list.component.html',
  styleUrl: './technologies-list.component.scss'
})
export class TechnologiesListComponent {
  technologiesList = [
    {
      technology: "HTML",
      XpYears: 4,
    },
    {
      technology: "CSS",
      XpYears: 4,
    },
    {
      technology: "Javascript",
      XpYears: 4,
    },
    {
      technology: "Accessibility",
      XpYears: 4,
    },
    {
      technology: "React",
      XpYears: 3,
    },
    {
      technology: "Sass",
      XpYears: 3,
    },
  ]
}
