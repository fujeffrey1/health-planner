import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-strength',
  templateUrl: './workout-strength.component.html'
})
export class WorkoutStrengthComponent implements OnInit {
  bench: number;
  squat: number;
  deadlift: number;
  week: number;

  constructor(private workoutService: WorkoutService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let inputs = this.workoutService.getInputs();
    this.bench = inputs[0];
    this.squat = inputs[1];
    this.deadlift = inputs[2];
  }

  onWeek(week: number) {
    this.week = week;
    this.router.navigate(['/workout', this.week]);
  }

  onConfirm() {
    this.workoutService.update(this.bench, this.squat, this.deadlift);
  }

  isValid() {
    return (this.bench >= 0) && (this.squat >= 0) && (this.deadlift >= 0);
  }

}
