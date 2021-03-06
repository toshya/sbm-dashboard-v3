import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
    { path: 'compare', loadChildren: () => import('./compare/compare.module').then(m => m.CompareModule) },
    { path: 'kitchen', loadChildren: () => import('./kitchen/kitchen.module').then(m => m.KitchenModule) },
    { path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
