import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightDirective } from './highlight.directive';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';
import { ArtistListComponent } from './pages/artist-list/artist-list.component';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    HighlightDirective,
    ArtistListComponent,
    ArtistDetailComponent,
    AgendaComponent,
    ReservationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
