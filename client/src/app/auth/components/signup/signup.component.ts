import { Component } from "@angular/core"
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { Store } from "@ngrx/store"
import { signup } from "../../store/action"
import { SignupRequestInterface } from "../../types/signupRequest.interface"
import { AuthService } from "../../services/auth.service"

@Component({
	selector: "auth-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.css"],
	standalone: true,
	imports: [
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatIconModule,
	],
})
export class SignupComponent {
	constructor(
		private fb: FormBuilder,
		private store: Store,
		private authService: AuthService
	) {}

	form = this.fb.nonNullable.group({
		username: ["", Validators.required],
		email: ["", Validators.required],
		password: ["", Validators.required],
	})

	handleSubmite() {
		const request: SignupRequestInterface = this.form.getRawValue()
		this.store.dispatch(signup(request))
		this.authService.SignUp(request).subscribe((res) => console.log(res))
	}
}
