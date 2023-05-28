import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AuthComponent } from "./auth/auth.component"
import { BookComponent } from "./book/book.component"
import { BooksComponent } from "./books/books.component"
import { authGuard } from "./core/guard/auth.guard"
import { NotFoundComponent } from "./not-found/not-found.component"

const routes: Routes = [
	{
		path: "auth",
		component: AuthComponent,
	},
	{
		path: "books",
		component: BooksComponent,
		canActivate: [authGuard],
	},
	{
		path: "books/:id",
		component: BookComponent,
		canActivate: [authGuard],
	},

	{
		path: "",
		redirectTo: "auth",
		pathMatch: "full",
	},
	{
		path: "**",
		component: NotFoundComponent,
		pathMatch: "full",
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
