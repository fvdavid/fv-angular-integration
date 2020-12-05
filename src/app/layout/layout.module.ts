import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    SideNavComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    SideNavComponent,
    TopNavComponent
  ]
})
export class LayoutModule { }
