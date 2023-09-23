import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TestGuard } from './guards/test.guard';


const routes: Routes = [
  {
    path: 'ingresar',
    loadChildren: () => import('./ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: '',
    redirectTo: 'ingresar',
    pathMatch: 'full'
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
   {
     path: 'home',
     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
   },
  {
    path: 'publica',
    loadChildren: () => import('./publica/publica.module').then( m => m.PublicaPageModule)
  },
  {
    path: 'privada',
    canActivate: [TestGuard],
    loadChildren: () => import('./privada/privada.module').then( m => m.PrivadaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
