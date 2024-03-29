import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }



  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;


    this.userService.login(email, password).subscribe((data) => {
      this.userService.addToLocalStorage(data);
      this.router.navigate(["/home"])
    })

  }
}
