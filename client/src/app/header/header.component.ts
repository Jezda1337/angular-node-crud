import { Component, OnInit } from "@angular/core"
import { take, tap } from "rxjs"
import { AuthService } from "../core/services/auth.service"
import { LocalStorageService } from "../core/services/local-storage.service"

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
	isAuthenticated: boolean = false
	userFullName: string | null = null

	constructor(
		private authService: AuthService,
		private localStorageService: LocalStorageService
	) {
		this.localStorageService.watchStorage().subscribe({
			next: (data) => {
				const user = this.localStorageService.getItem(data)
				if (!user) return
				this.userFullName = user.firstName + " " + user.lastName
				this.isAuthenticated = !this.isAuthenticated
			},
			error: (error) => {
				this.isAuthenticated = !this.isAuthenticated
				this.userFullName = null
				console.log(error)
			},
		})
	}

	handleSignout() {
		this.authService
			.logout()
			.pipe(
				take(1),
				tap(() => {
					this.isAuthenticated = false
					this.userFullName = null
				})
			)
			.subscribe()
	}

	ngOnInit(): void {
		const user = JSON.parse(localStorage.getItem("user")!)
		if (!user) return
		this.isAuthenticated = !this.isAuthenticated
		this.userFullName = user.firstName + " " + user.lastName
	}
}
