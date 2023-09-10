import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './components/drink/drink.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TesteComponent } from './components/teste/teste.component';

const routes: Routes = [
  {
    path: '',
    component: DrinkComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'teste',
    component: TesteComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
