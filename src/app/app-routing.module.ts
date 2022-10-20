import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bateau',
    loadChildren: () => import('./bateau/bateau.module').then( m => m.BateauPageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'recette',
    loadChildren: () => import('./recette/recette.module').then( m => m.RecettePageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'presentation',
    loadChildren: () => import('./presentation/presentation.module').then( m => m.PresentationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
