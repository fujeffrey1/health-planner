import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }from 'rxjs/Subscription';

import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-week-4',
  templateUrl: './week4.component.html'
})

export class Week4Component implements OnInit, OnDestroy {
  inputs: number[];
  subscription: Subscription;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.subscription = this.workoutService.inputsChanged
      .subscribe(
        (inputs: number[]) => {
          this.inputs = inputs;
        }
      );
    this.inputs = this.workoutService.getInputs();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
