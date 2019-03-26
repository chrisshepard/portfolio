import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../ui/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ],
  exports: [NavComponent, MaterialModule]
})
export class CoreModule { }
