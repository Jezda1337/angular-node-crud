import { Injectable } from "@angular/core"
import { SignupRequestInterface } from "../types/signupRequest.interface"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment.development"

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private http: HttpClient) {}

	SignUp(data: SignupRequestInterface): Observable<SignupRequestInterface> {
		return this.http.post<SignupRequestInterface>(
			`${environment.apiUrl}/users`,
			data
		)
	}
}
