import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  ngOnInit() {
    this.loadForm();
  }
  loginForm: FormGroup = new FormGroup({});

  loadForm(){
    this.loginForm = this.fb.group({
      'email': [ '', Validators.required],
      'password': ['', Validators.required]
    })
  
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const payload = this.loginForm.getRawValue();

    this.authService.login(payload).subscribe({
      next: (response) => {
        console.log('Success', response);

      },
      error: (error) => {
        console.error('Error', error);
      }
    });

  }
}
