import { Component } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { AuthService } from "src/app/core/services/auth.service"

@Component({
	selector: "app-signin",
	templateUrl: "./signin.component.html",
	styleUrls: ["./signin.component.css"],
})
export class SigninComponent {
	constructor(private authService: AuthService, private router: Router) {}

	errorMessage: string = ""
	hide: boolean = true

	fg = new FormGroup({
		email: new FormControl("", [Validators.required]),
		password: new FormControl("", [Validators.required]),
	})

	onSubmit() {
		if (!this.fg.valid) {
			return
		}
		const { email, password } = this.fg.value

		if (!email || !password) return

		this.authService.signin(email, password).subscribe({
			next: () => {
				this.router.navigate(["books"])
			},
			error: (error) => {
				this.errorMessage = error.error
			},
		})
	}
}
