import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeViewComponent } from './about-me-view/about-me-view.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [AboutMeViewComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    MaterialModule
  ]
})
export class AboutMeModule { }
