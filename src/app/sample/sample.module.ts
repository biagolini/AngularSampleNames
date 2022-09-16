import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { SamplePanelComponent } from './components/sample-panel/sample-panel.component';
import { SampleRoutingModule } from './sample-routing.module';


@NgModule({
  declarations: [
    SamplePanelComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    SharedModule
  ]
})
export class SampleModule { }
