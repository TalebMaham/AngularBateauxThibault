import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Presente } from '../models/presente'
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage implements OnInit {


  
  presente : Presente;
  objet : any ; 
  constructor(private router : Router, private route :ActivatedRoute) { 

    if(this.router.getCurrentNavigation().extras.state){
      this.objet = this.router.getCurrentNavigation().extras.state.recetteName;
      console.log(this.objet);
      this.presenter();
      this.presente.titre = "Bonjour";
    }
  }

  ngOnInit() {
  }

  presenter()
  {
    // switch(this.objet)
    // {
    //   case 'homard':
    //     this.presente.titre = "Homard";
    //     this.presente.image ="assets/images/homardRecette@3x.png";
    //     break;
    //   case 'bar':
    //       this.presente.titre = "Bar";
    //       this.presente.image ="assets/images/homardRecette@3x.png";
    //       break;

    //   case 'jacque':
    //       this.presente.titre = "Saint Jacques";
    //       this.presente.image ="assets/images/saintJacques@3x.png";
    //       break;
        
    //   case 'bristo':
    //       this.presente.titre = "BristoLandais";
    //       this.presente.image ="assets/images/bristoLandais@3x.png";
    //       break;

    //   case 'gascons':
    //           this.presente.titre = "Saint Jacques";
    //           this.presente.image ="assets/images/desGascons@3x.png";
    //            break;


    //   case 'fou':
    //             this.presente.titre = "Fou de L'ile";
    //             this.presente.image ="assets/images/fousDeLIle@3x.png";
    //              break;

    //    case 'contact':
    //           this.presente.titre = "Contact";
    //           this.presente.image ="assets/images/TIG@3x.png";
    //           break;
    // }
  }
  
}
