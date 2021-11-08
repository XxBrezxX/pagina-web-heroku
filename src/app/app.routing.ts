import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BiographyComponent } from './biography/biography.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'aboutMe', component: AboutMeComponent},
    {path: 'biography', component: BiographyComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);