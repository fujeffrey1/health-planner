import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorkoutComponent } from './workout.component';
import { WorkoutWeightlossComponent } from './workout-weightloss/workout-weightloss.component';
import { WorkoutStrengthComponent } from './workout-strength/workout-strength.component';
import { Week0Component } from './workout-strength-weeks/week0.component';
import { Week1Component } from './workout-strength-weeks/week1.component';
import { Week2Component } from './workout-strength-weeks/week2.component';
import { Week3Component } from './workout-strength-weeks/week3.component';
import { Week4Component } from './workout-strength-weeks/week4.component';
import { Week5Component } from './workout-strength-weeks/week5.component';
import { Week6Component } from './workout-strength-weeks/week6.component';
import { WorkoutRoutingModule } from './workout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RoundPipe } from './round.pipe';

@NgModule({
  declarations: [
    WorkoutComponent,
    WorkoutWeightlossComponent,
    WorkoutStrengthComponent,
    Week0Component,
    Week1Component,
    Week2Component,
    Week3Component,
    Week4Component,
    Week5Component,
    Week6Component,
    RoundPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    WorkoutRoutingModule,
    SharedModule
  ]
})

export class WorkoutModule {}
