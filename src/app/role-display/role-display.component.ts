import { Component, Input } from '@angular/core';
import { UseRole } from '../enums/user-role.enum';
@Component({
  selector: 'app-role-display',
  standalone: true,
  imports: [],
  templateUrl: './role-display.component.html',
  styleUrl: './role-display.component.css'
})
export class RoleDisplayComponent {

  @Input() role! :UseRole;
}
