import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onClickRecette(recette : string)
  {
    let navigationExtras: NavigationExtras = {
      state : {
        recetteName: recette
      }
    }

      this.router.navigate(['/presentation'], navigationExtras);
  }

}
