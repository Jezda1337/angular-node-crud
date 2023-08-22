import { bootstrapApplication } from "@angular/platform-browser"
import { provideAnimations } from "@angular/platform-browser/animations"
import { provideRouter } from "@angular/router"
import { AppComponent } from "./app/app.component"
import { appRoutes } from "./app/app.routes"
import { provideStore } from "@ngrx/store"
import { provideStoreDevtools } from "@ngrx/store-devtools"
import { isDevMode } from "@angular/core"
import { provideHttpClient } from "@angular/common/http"

bootstrapApplication(AppComponent, {
	providers: [
		provideRouter(appRoutes),
		provideAnimations(),
		provideStore(),
		provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
		provideHttpClient(),
	],
})
