import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { AuthService } from '../../auth/auth.service';
import { WorkoutService } from '../../workout/workout.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private authService: AuthService,
              private workoutService: WorkoutService,
              private dataStorageService: DataStorageService) { }

  isAuthenticated() {
    return this.authService.isAuthenticated() && this.workoutService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
