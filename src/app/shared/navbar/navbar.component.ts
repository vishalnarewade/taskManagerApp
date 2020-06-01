import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  isShown:boolean = false;
  title = 'MTM: My Task Manager';
  activeTab = '';

  constructor(
    public router: Router,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    console.log(this.userService)
  }

  redirect(name) {
    this.isShown = !this.isShown;
    this.router.navigateByUrl(`/main/${name}`);
  } 

}
