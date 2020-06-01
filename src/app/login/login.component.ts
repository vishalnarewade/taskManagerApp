import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      pass: ['', Validators.required],
    })
  }

  submit() {
    const data = {
      name: this.form.get('name').value,
      pass: this.form.get('pass').value,
    };

    const isExistedUser = this.userService.checkUser(data);

    if (isExistedUser) {
      this.router.navigate(['main/list'])
      this.form.reset(); 
    } else {
      alert('User name or pasword will mismatch');
    }
  }
}
