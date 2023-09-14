import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Phase1Component } from './phase1/phase1.component';
import { Phase2Component } from './phase2/phase2.component';
import { Phase3Component } from './phase3/phase3.component';
import { AboutComponent } from './phase2/about/about.component';
import { RegisterComponent } from './phase1/register/register.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { GlobalComponent } from './global/global.component';
import { authGuard } from './auth.guard';
import { DocComponent } from './support/doc/doc.component';
import { WhyComponent } from './why/why.component';

const routes: Routes = [
  { path: '', component: Phase1Component},
  { path: 'phase1/register', component: RegisterComponent},
  { path: 'why', component: WhyComponent},
  { path: 'home', component: HomeComponent, canActivate:[authGuard]},
  { path: 'global', component: GlobalComponent, canActivate:[authGuard] },
  { path: 'support', component: SupportComponent, canActivate:[authGuard] },
  { path: 'support/doc', component: DocComponent, canActivate:[authGuard] },
  { path: 'phase2', component: Phase2Component, canActivate:[authGuard]},
  { path: 'phase3', component: Phase3Component, canActivate:[authGuard] },
  { path: 'phase2/about', component: AboutComponent, canActivate:[authGuard] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
