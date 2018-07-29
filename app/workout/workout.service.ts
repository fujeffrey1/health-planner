import { Subject } from 'rxjs/Subject';

export class WorkoutService {
  private program: string;
  private bench: number = 0;
  private squat: number = 0;
  private deadlift: number = 0;
  inputsChanged = new Subject<number[]>();

  select(program: string) {
    this.program = program;
  }

  getProgram() {
    return this.program.slice();
  }

  getInputs() {
    return [this.bench, this.squat, this.deadlift].slice();
  }

  update(bench: number, squat: number, deadlift: number) {
    if ((this.bench != bench) || (this.squat != squat) || (this.deadlift != deadlift)) {
        this.inputsChanged.next([bench, squat, deadlift]);
        this.bench = bench;
        this.squat = squat;
        this.deadlift = deadlift;
    }
  }

  isAuthenticated() {
    if ((this.program === 'Strength') || (this.program === 'Weightloss')) {
      return true;
    }
    return false;
  }
}
