import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  recipes: any = [];

  constructor(private userService: UserService, private api: ApiService) { }

  userEmail = this.userService.user?.email;
  userName = this.userService.user?.username;

  ngOnInit(): void {
    this.api.getUserRecipes(this.userService.user?._id ?? "").subscribe(recipes => {
      this.recipes = recipes;

    })
  }



}
