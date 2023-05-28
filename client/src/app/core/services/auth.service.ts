import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { BehaviorSubject, Observable } from "rxjs"
import { tap } from "rxjs/operators"
import { User } from "src/app/shared/interfaces/user.model"
import { environment } from "src/environment/environment"
import { LocalStorageService } from "./local-storage.service"

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(
		private http: HttpClient,
		private router: Router,
		private localStorageService: LocalStorageService
	) {}

	#user = new BehaviorSubject<User | null>(null)

	public getUser(): Observable<User | null> {
		return this.#user.asObservable()
	}

	signup(
		firstName: string,
		lastName: string,
		email: string,
		password: string
	): Observable<User> {
		return this.http
			.post<User>(
				`${environment.BACKEDN_API}/signup`,
				{
					firstName,
					lastName,
					email,
					password,
				},
				{ withCredentials: true }
			)
			.pipe(
				tap((userData) => {
					this.localStorageService.setItem("user", userData)
				})
			)
	}

	signin(email: string, password: string): Observable<User> {
		return this.http
			.post<User>(
				`${environment.BACKEDN_API}/auth`,
				{
					email,
					password,
				},
				{ withCredentials: true }
			)
			.pipe(
				tap((userData) => {
					this.localStorageService.setItem("user", userData)
				})
			)
	}

	logout(): Observable<User> {
		return this.http
			.post<User>(`${environment.BACKEDN_API}/logout`, null, {
				withCredentials: true,
			})
			.pipe(
				tap(() => {
					this.localStorageService.removeItem("user")
					this.router.navigate(["auth"])
				})
			)
	}
}
