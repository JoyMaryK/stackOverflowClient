import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  showFP=false
  constructor(
    private fb: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

 logIn() {
    if (this.form.invalid){
      console.log("invalid");
      return
    }
  console.log(this.form.value)
if(this.form.get('email')?.value ==='admin@gmail.com'){
  this.router.navigateByUrl('/admin-questions')
} else{
  this.router.navigateByUrl('/home')
}

 
}
}