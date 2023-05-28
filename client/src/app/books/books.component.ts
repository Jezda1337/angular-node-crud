import { Component } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { BooksService } from "../core/services/books.service"
import { LocalStorageService } from "../core/services/local-storage.service"
import { DialogFormComponent } from "../shared/components/dialog-form/dialog-form.component"
import { EditComponent } from "../shared/components/edit/edit.component"
import { Book } from "../shared/interfaces/book.model"

@Component({
	selector: "app-books",
	templateUrl: "./books.component.html",
	styleUrls: ["./books.component.css"],
})
export class BooksComponent {
	books: Book[] = []
	name: string | null = null

	constructor(
		private booksService: BooksService,
		private dialog: MatDialog,
		private localStorageService: LocalStorageService
	) {}

	displayedColumns: string[] = ["title", "author", "pages", "read", "actions"]

	addNewBook() {
		const dialogRef = this.dialog.open(DialogFormComponent, {
			data: { name: this.name },
			width: "100%",
			maxWidth: "400px",
		})
		dialogRef.afterClosed().subscribe()
	}

	deleteBook(id: string) {
		this.booksService.deleteBook(id).subscribe({
			next: () => {
				this.booksService.readBooks().subscribe()
			},
		})
	}

	editBook(id: string) {
		const dialogRef = this.dialog.open(EditComponent, {
			data: { id },
			width: "100%",
			maxWidth: "400px",
		})
		dialogRef.afterClosed().subscribe()
	}

	ngOnInit() {
		// get all books on initialization of the component
		this.booksService.readBooks().subscribe()

		this.booksService.getBooksValue().subscribe({
			next: (books: Book[]) => (this.books = books),
		})
		const { firstName, lastName } = this.localStorageService.getItem("user")
		this.name = `${firstName} ${lastName}`
	}
}
