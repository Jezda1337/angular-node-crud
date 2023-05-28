import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function confirmPasswordValidator(password: string): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		return control.value === password ? { passwordMatch: true } : null
	}
}
