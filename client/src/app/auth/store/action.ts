import { createAction, props } from "@ngrx/store"
import { SignupRequestInterface } from "../types/signupRequest.interface"

export const signup = createAction(
	"[Auth] Signup",
	props<SignupRequestInterface>(),
)

