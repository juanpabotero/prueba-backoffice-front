import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() isSidebarVisible: boolean = true;
}
