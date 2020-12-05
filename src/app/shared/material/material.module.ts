import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
