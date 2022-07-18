import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { EvenementCreateComponent } from './evenement-create/evenement-create.component';
import { EvenementReadComponent } from './evenement-read/evenement-read.component';
import { EvenementUpdateComponent } from './evenement-update/evenement-update.component';
import { EvenementDeleteComponent } from './evenement-delete/evenement-delete.component';
import { WelcomePageMenuComponent } from './welcome-page-menu/welcome-page-menu.component';
import { EvenementDetailleComponent } from './evenement-detaille/evenement-detaille.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    EvenementCreateComponent,
    EvenementReadComponent,
    EvenementUpdateComponent,
    EvenementDeleteComponent,
    WelcomePageMenuComponent,
    EvenementDetailleComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
