import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SamplePanelComponent } from './components/sample-panel/sample-panel.component';

const routes: Routes = [
  { path: '', component: SamplePanelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
