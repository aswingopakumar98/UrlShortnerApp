import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './analytics/analytics.component';

export const routes: Routes = [{ path: '', redirectTo:'/home',pathMatch:'full'},{ path: 'home', component: HomeComponent },{ path: 'analytics', component: AnalyticsComponent},];
