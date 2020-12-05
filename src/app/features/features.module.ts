import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
})
export class FeaturesModule { }
