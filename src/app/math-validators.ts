import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];
      const sum = form.value[target];

      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      }

      return { addition: true };
    };
  }
}
