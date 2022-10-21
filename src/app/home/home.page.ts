import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../services/produits/products.service';
import { Produit } from '../models/produit';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  links = [
 
    {
      
      text:"Produits et Promotions",
      img:""
    }, 
    {
      
      text:"Bateaux",
      img:""
    }, 
    {
      
      text:"Restaurants",
      img:""
    }, 

    {
      
      text:"Recettes",
      img:""
    },
    {
      
      text:"Contact",
      img:""
    } 
    


  ]




  list : Produit[]  ; 
  
  

  

  constructor(private router : Router, private productService : ProductsService) {

  }


  onClick(lien : string )
  {

    let navigationExtras: NavigationExtras = {
      state : {
        recetteName:lien
      }
    }
    this.productService.getProducts().subscribe(res => {

    
    },
    err => {
      console.log(err) ; 
    }
      )
    console.log();
      switch(lien)
      {
        
          case 'Produits et Promotions' : 
            this.router.navigate(['/produit']);
            console.log("produit"); 
            break; 
          case 'Bateaux' : 
            this.router.navigate(['/bateau']);
            break; 
          case 'Restaurants' : 
            this.router.navigate(['/restaurant']);
            break; 
          case 'Recettes' : 
            this.router.navigate(['/recette']);
            break; 
          case 'Contact' :        
            this.router.navigate(['/presentation'], navigationExtras);
            break; 
      }
     
  }

  

}
