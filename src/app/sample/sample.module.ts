import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SamplePanelComponent } from './components/sample-panel/sample-panel.component';


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
