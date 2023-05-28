import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "../core/services/auth.service"

@Component({
	selector: "app-auth",
	templateUrl: "./auth.component.html",
	styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
	constructor(private authServices: AuthService, private router: Router) {}

	ngOnInit(): void {
		const user$ = this.authServices.getUser().subscribe()

		if (user$) {
			this.router.navigate(["books"])
			return
		}
	}
}
