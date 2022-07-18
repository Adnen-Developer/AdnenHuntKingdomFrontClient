import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
/*
import {BookListComponent} from "./book-list/book-list.component";
import {MainUserComponent} from "./main-user/main-user.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {BookFormComponent} from "./book-form/book-form.component";
*/
import { EvenementCreateComponent } from './evenement-create/evenement-create.component';
import { WelcomePageMenuComponent } from './welcome-page-menu/welcome-page-menu.component';
import { EvenementDetailleComponent } from './evenement-detaille/evenement-detaille.component';
import { EvenementUpdateComponent } from './evenement-update/evenement-update.component';
const ROUTES: Routes=[
  
  /*
  {path:'', component: BookListComponent},
  
  {path:'book', component: BookListComponent},
  {path:'user', component: MainUserComponent},
  {path:'newBook', component: BookFormComponent},
  */
  {path:  '', component: WelcomePageMenuComponent},
  {path: 'evenement/ajouter', component: EvenementCreateComponent},
  {path: 'evenement/detaille', component: EvenementDetailleComponent},
  {path: 'evenement/modifier', component: EvenementUpdateComponent}, 
 /*
  {path:'**', component: NotFoundComponent},
*/

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
