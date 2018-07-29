import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WorkoutService } from '../../workout/workout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private workoutService: WorkoutService,
              private router: Router) { }

  onStrength() {
    this.workoutService.select('Strength');
    this.router.navigate(['/workout']);
  }

  onWeightLoss() {
    this.workoutService.select('Weightloss');
    this.router.navigate(['/workout']);
  }


}
