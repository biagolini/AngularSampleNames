import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



var module = [
  CommonModule,
  FlexLayoutModule,
  MatFormFieldModule,
  MatIconModule,
  MatTableModule,
  ReactiveFormsModule,
  RouterModule,
  MatChipsModule,
  MatButtonModule,
  MatInputModule,
];


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    module,
    CommonModule
  ],
  exports: [
    module,
  ]
})
export class SharedModule { }
