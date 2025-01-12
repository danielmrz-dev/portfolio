import { Component } from '@angular/core';
import { ButtonWithBorderBottomComponent } from "../button-with-border-bottom/button-with-border-bottom.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ButtonWithBorderBottomComponent, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

}
