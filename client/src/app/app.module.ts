import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

// import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AuthComponent } from "./auth/auth.component"
import { HeaderComponent } from "./header/header.component"
import { SharedModule } from "./shared/shared.module";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
	declarations: [AppComponent, HeaderComponent, AuthComponent, BooksComponent, BookComponent, NotFoundComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
