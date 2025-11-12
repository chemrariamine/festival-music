import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArtistListComponent } from './pages/artist-list/artist-list.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { authGuard } from './auth.guard';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'artists/:id', component:ArtistListComponent},
  {path:'agenda', component:AgendaComponent,canActivate:[authGuard]},
  {path:'reservation/:id',component:ReservationComponent, canActivate:[authGuard]},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
