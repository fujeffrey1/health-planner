import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ProgramGuard } from './core/program-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'workout', loadChildren: './workout/workout.module#WorkoutModule', canActivate: [AuthGuard, ProgramGuard] },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canActivate: [AuthGuard, ProgramGuard] },
  { path: 'shopping-list',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule',
    canActivate: [AuthGuard, ProgramGuard] },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  providers: [AuthGuard, ProgramGuard]
})
export class AppRoutingModule {

}
