import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public userSevice: UserService,
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

    this.userSevice.newUser(data);

    this.router.navigate(['login']);
  }

}
