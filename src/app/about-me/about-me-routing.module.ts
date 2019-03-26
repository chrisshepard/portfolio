import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeViewComponent } from './about-me-view/about-me-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: AboutMeViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
