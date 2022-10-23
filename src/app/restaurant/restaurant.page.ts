import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }



  onClickRestaurant(recette : string)
  {
    let navigationExtras: NavigationExtras = {
      state : {
        recetteName: recette
      }
    }

      this.router.navigate(['/presentation'], navigationExtras);
  }

}
