import { Route } from "@angular/router"
import { SigninComponent } from "./components/signin/signin.component"
import { SignupComponent } from "./components/signup/signup.component"

export const authRoutes: Route[] = [
	{
		path: "signup",
		component: SignupComponent,
	},
	{
		path: "signin",
		component: SigninComponent,
	},
]

