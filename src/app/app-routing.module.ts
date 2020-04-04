import { SetorComponent } from './setor/setor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './core/page/page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "", component: PageComponent,
    children: [
      { path: "adm", loadChildren: () => import('./adm/adm.module').then(m => m.AdmModule) },
      { path: "", component: DashboardComponent },
      { path: "setor", component: SetorComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
