import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {


  liste   =  new Array();
  cat1 =  new Array() ;
  cat2 =  new Array() ;
  cat3 =  new Array() ;

  constructor(private router : Router) {

    if(this.router.getCurrentNavigation().extras.state){
      this.liste = this.router.getCurrentNavigation().extras.state.liste;

      console.log("ici liste  ... ")

      console.log( this.liste) ; 
     

      
      
      for (var i = 0; i < 15; i++) {
        

        if(this.liste[i].category == 0)
        {
            this.cat1.push(this.liste[i]);
        }

        if(this.liste[i].category == 1)
        {
          this.cat2.push(this.liste[i]);
        }


        if(this.liste[i].category == 2)
        {
          this.cat3.push(this.liste[i]);
        }
      
        

      }

      console.log(this.cat1) ; 
      console.log(this.cat2) ; 
      console.log(this.cat3) ; 

   
     
    }
   }

  ngOnInit() {
  }


  onClickProduit(produit)
  {

    let navigationExtras: NavigationExtras ;
    switch(produit)
    {
      case 'poisson' : 
      navigationExtras = {state : { liste : this.cat1}}
      this.router.navigate(['/presente-produit'], navigationExtras);
      break ; 
      case 'coquillage' : 
      navigationExtras = {state : { liste : this.cat2}}
      this.router.navigate(['/presente-produit'], navigationExtras);
      break ; 
      case 'crustaces' : 
      navigationExtras = {state : { liste : this.cat3}}
      this.router.navigate(['/presente-produit'], navigationExtras);
      break ; 
      case 'promotion' : 
      navigationExtras = {state : { liste : this.cat1}}
      this.router.navigate(['/presente-produit'], navigationExtras);
      break ; 
    }
  }
  

}
