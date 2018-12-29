import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // import this router for unsing redirecting one page to another page.
import { from } from 'rxjs';
import { User } from './service/user';
import { LoginService } from './service/login.service';
import { ActivatedRoute } from '@angular/router'; // activatdRoute is cantain the information which component loaded.

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  user: User = {
    password: '',
    username: ''
  };

  title: string; // dyanamic data pass.

  headers = ['Name','Age','Date of Birth','Email'];
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute, // activatedRoute use for information(data) one page to anoher page print.
    private routeservice: Router // this is a routeservice for using as a injection
  ) { }

  ngOnInit() {                                     // Dynamic title adding this statements.
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
  }

  login() {
    if (this.loginService.login(this.user)) {
      // redirect to another page login page to home page.
      // this.routeservice.navigate(['/home']);
      this.routeservice.navigate(['/employee']);
    }
  }

}
