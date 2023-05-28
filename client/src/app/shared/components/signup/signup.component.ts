import { Component } from "@angular/core"
import { FormControl, FormGroup } from "@angular/forms"
import { Router } from "@angular/router"
import { AuthService } from "src/app/core/services/auth.service"

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.css"],
})
export class SignupComponent {
	constructor(private authService: AuthService, private router: Router) {}

	errorMessage: string = ""
	hide: boolean = true

	fg = new FormGroup({
		firstName: new FormControl(""),
		lastName: new FormControl(""),
		email: new FormControl(""),
		password: new FormControl(""),
	})

	onSubmit() {
		if (!this.fg.valid) {
			return
		}

		const { firstName, lastName, email, password } = this.fg.value

		if (!firstName || !lastName || !email || !password) return

		this.authService.signup(firstName, lastName, email, password).subscribe({
			next: () => {
				this.router.navigate(["books"])
			},
			error: (error) => {
				this.errorMessage = error.error
			},
		})
	}
}
