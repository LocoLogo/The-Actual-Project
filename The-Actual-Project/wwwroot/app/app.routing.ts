import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const appRoutes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        redirectTo: HomeComponent
    },
    {
        path: "dashboard",
        redirectTo: DashboardComponent
    }
];

export const AppRoutingProviders: any[] = [

];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);