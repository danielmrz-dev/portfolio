import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFooterComponent } from "./components/header-footer/header-footer.component";
import { DevIntroductionComponent } from "./components/dev-introduction/dev-introduction.component";
import { TechnologiesListComponent } from "./components/technologies-list/technologies-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderFooterComponent, DevIntroductionComponent, TechnologiesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
