import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  message: string = '';

  constructor(private router: Router) {
    debugger;
    const nav = this.router.getCurrentNavigation();
    this.message = nav?.extras?.state?.['message'] || '';
  }
}
