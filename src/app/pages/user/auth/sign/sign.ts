import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { SupabaseAuthServices } from '../../../../services/supabase/supabase-auth/supabase-auth.service';

@Component({
  selector: 'app-sign',
  imports: [ReactiveFormsModule],
  templateUrl: './sign.html',
  styleUrl: './sign.css',
})
export class Sign {
  errorMessage = '';
  loading = false;
  private readonly fb=inject(FormBuilder)
  private readonly supabaseService=inject(SupabaseAuthServices)
  readonly signForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}")]],
    confirmPassword: ['', Validators.required]
  }, { validators: this.passwordsMatchValidator });

  private passwordsMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  public get username(): FormControl<string | null> {
    return this.signForm.controls.username
  }
  
  
  public get email() : FormControl<string | null>  {
    return this.signForm.controls.email
  }
  
  public get password(): FormControl<string | null> {
    return this.signForm.controls.password
  }

  
  public get confirmPassword() :FormControl<string | null>{
    return this.signForm.controls.confirmPassword
  }

  hasMinLength(): boolean {
    return (this.password.value || '').length >= 8;
  }


  hasUpperCase(): boolean {
    return /[A-Z]/.test(this.password.value || '');
  }

  hasLowerCase(): boolean {
    return /[a-z]/.test(this.password.value || '');
  }

  hasNumber(): boolean {
    return /[0-9]/.test(this.password.value || '');
  }

  hasSpecialChar(): boolean {
    return /[#?!@$%^&*-]/.test(this.password.value || '');
  }

  public async soumettre() {
    if (this.signForm.invalid) return;

    this.loading = true;
    this.errorMessage = '';

    const { username, email, password } = this.signForm.value;

    const { data, error } = await this.supabaseService.signUp(
      email!,
      password!,
      username!
    );

    this.loading = false;

    if (error) {
      this.errorMessage = error.message;
      return;
    }

    console.log('Utilisateur créé :', data.user);
  }
} 
