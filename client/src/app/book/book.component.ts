import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { ActivatedRoute, Router } from "@angular/router"
import { Observable, map, take, tap } from "rxjs"
import { BooksService } from "../core/services/books.service"
import { LocalStorageService } from "../core/services/local-storage.service"
import { EditComponent } from "../shared/components/edit/edit.component"
import { Book } from "../shared/interfaces/book.model"

@Component({
	selector: "app-book",
	templateUrl: "./book.component.html",
	styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private booksService: BooksService,
		private dialog: MatDialog,
		private localStorageService: LocalStorageService
	) {}

	books$!: Observable<Book[]>
	bookId: string | null = null

	editBook(id: string | undefined) {
		console.log(id)
		const dialogRef = this.dialog.open(EditComponent, {
			data: { id },
			width: "100%",
			maxWidth: "400px",
		})
		dialogRef.afterClosed().subscribe()
	}

	ngOnInit(): void {
		const user = this.localStorageService.getItem("user")
		this.booksService.readBooks().pipe(take(1)).subscribe()

		this.route.params.pipe(take(1)).subscribe({
			next: ({ id }) => (this.bookId = id),
		})

		this.books$ = this.booksService.getBooksValue().pipe(
			tap((books: Book[]) => {
				if (!user) books.length <= 0 ? this.router.navigate(["404"]) : books
			}),
			map((books: Book[]) =>
				books.filter((book: Book) => book.id === this.bookId)
			)
		)
	}
}
