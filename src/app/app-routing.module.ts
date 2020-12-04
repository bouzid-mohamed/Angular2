import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { MovieComponent } from './movie/movie.component';


const routes: Routes = [
  
         
          { path: "detail/:id", component:MovieComponent},
         
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
