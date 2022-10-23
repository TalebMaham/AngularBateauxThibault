import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-presente-produit',
  templateUrl: './presente-produit.page.html',
  styleUrls: ['./presente-produit.page.scss'],
})
export class PresenteProduitPage implements OnInit {


  liste  = new Array() ; 

  constructor(private router : Router, private route :ActivatedRoute) { 
    

    if(this.router.getCurrentNavigation().extras.state){
      this.liste  = this.router.getCurrentNavigation().extras.state.liste ;
  
    }
  }

  ngOnInit() {
  }





}
