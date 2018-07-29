import { Component, OnInit } from '@angular/core';

import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html'
})
export class WorkoutComponent implements OnInit {

  workout: string;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workout = this.workoutService.getProgram();
  }

}
