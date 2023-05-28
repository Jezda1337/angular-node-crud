import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"
import { User } from "src/app/shared/interfaces/user.model"
import { LocalStorageService } from "../services/local-storage.service"

export const authGuard: CanActivateFn = (_route, _state) => {
	const router = inject(Router)
	const localStorageServices = inject(LocalStorageService)
	const user: User = localStorageServices.getItem("user")

	if (!user) {
		router.navigate(["auth"])
		return false
	}
	return true
}
