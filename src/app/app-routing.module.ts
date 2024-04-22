import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreedomwallComponent } from './freedomwall/freedomwall.component';
import { HomeComponent } from './home/home.component';
import { ComposeComponent } from './compose/compose.component';
import { EditcomposeComponent } from './editcompose/editcompose.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'freedomwall',
    component: FreedomwallComponent
  },
  {
    path: 'compose',
    component: ComposeComponent
  },
  {
    path: 'editcompose/:id',
    component: EditcomposeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
