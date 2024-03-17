import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: any = [];
  isLoading: boolean = false;


  constructor(private api: ApiService) { }



  ngOnInit(): void {
    this.isLoading = true;

    this.api.getTopRecipes().subscribe(recipes => {
      this.recipes = recipes;
      this.isLoading = false;
    })
  }

}
