import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
        {
                path:"", component: AnimalListComponent
        },{
          path: 'animals/:animalId', component: AnimalDetailsComponent
  }, {
    path:'cart', component: CartComponent
  }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }