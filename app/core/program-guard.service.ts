import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { WorkoutService } from '../workout/workout.service';

@Injectable()
export class ProgramGuard implements CanActivate {

  constructor(private workoutService: WorkoutService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.workoutService.isAuthenticated();
  }
}
