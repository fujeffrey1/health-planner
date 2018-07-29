import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutComponent } from './workout.component';
import { Week0Component } from './workout-strength-weeks/week0.component';
import { Week1Component } from './workout-strength-weeks/week1.component';
import { Week2Component } from './workout-strength-weeks/week2.component';
import { Week3Component } from './workout-strength-weeks/week3.component';
import { Week4Component } from './workout-strength-weeks/week4.component';
import { Week5Component } from './workout-strength-weeks/week5.component';
import { Week6Component } from './workout-strength-weeks/week6.component';

const workoutRoutes: Routes = [
  { path: '', component: WorkoutComponent, children: [
    { path: '', component: Week0Component},
    { path: '1', component: Week1Component },
    { path: '2', component: Week2Component },
    { path: '3', component: Week3Component },
    { path: '4', component: Week4Component },
    { path: '5', component: Week5Component },
    { path: '6', component: Week6Component }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(workoutRoutes)
  ],
  exports: [RouterModule]
})
export class WorkoutRoutingModule {}
