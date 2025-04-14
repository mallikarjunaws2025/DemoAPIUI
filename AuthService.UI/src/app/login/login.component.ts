import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = { username: '', password: '' };
  message: string = '';
  private apiUrl = 'http://localhost:5000';
  isChangingPassword = false;
  confirmPassword = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    debugger;
    const url = `${this.apiUrl}/getbyname/${this.loginData.username}`;
    this.authService.login(url)
      .subscribe(
        (response) => {
          if (response.status === 'LoggedIn') {
            this.router.navigate(['/dashboard'], {
              state: { message: 'You have successfully logged in!' }
            });
          } else {
            this.message = 'Invalid credentials or user not found';
          }
        },
        (error) => {
          this.message = 'An error occurred during login.';
        }
      );
  } 

  toggleChangePassword() {
    debugger;
    if (!this.isChangingPassword) {
      // Show confirm password field
      this.isChangingPassword = true;
    } else {
      // Update logic goes here
      if (this.loginData.password !== this.confirmPassword) {
        this.message = 'Passwords do not match.';
        return;
      }

      // Call update password API or show success (stub)
      this. onUpdate();
    }
  }
  

  onSubscribe() { 
    debugger;
    this.apiUrl += '/create'
    this.authService.create(this.loginData.username, this.loginData.password,this.apiUrl)
      .subscribe(
        (response) => {
          if (response.status === 'Subscribed') {
            this.router.navigate(['/dashboard'], {
              state: { message: 'You have successfully subscribed!' }
            });
          } else {
            this.message = 'Invalid credentials or user not found';
          }
        },
        (error) => {
          this.message = 'An error occurred during login.';
        }
      );      
  }

  onUpdate() { 
    debugger;
    this.apiUrl += '/update'
    this.authService.update(this.loginData.username, this.loginData.password,this.apiUrl)
      .subscribe(
        (response) => {
          if (response.status === 'Updated') {
            this.isChangingPassword = false;
            this.confirmPassword = '';
            this.router.navigate(['/dashboard'], {
              state: { message: 'Password updated successfully' }
            });
          } else {
            this.message = 'Invalid credentials or user not found';
          }
        },
        (error) => {
          this.message = 'An error occurred during login.';
        }
      );      
  }

  onUnsubscribe() { 
    debugger;
    const url = `${this.apiUrl}/delete/${this.loginData.username}`;
     this.authService.delete(url)
     .subscribe(
       (response) => {
         if (response.status === 'Unsubscribed') {
          this.router.navigate(['/dashboard'], {
            state: { message: 'You have successfully unsubscribed!' }
          });
         } else {
           this.message = 'Invalid credentials or user not found';
         }
       },
       (error) => {
         this.message = 'An error occurred during login.';
       }
     ); 
    }
}
