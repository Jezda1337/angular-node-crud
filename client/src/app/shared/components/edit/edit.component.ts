import { Component, Inject, OnInit } from "@angular/core"
import { FormControl, FormGroup } from "@angular/forms"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog"
import { map, tap } from "rxjs"
import { BooksService } from "src/app/core/services/books.service"
import { Book } from "../../interfaces/book.model"
import { DialogFormComponent } from "../dialog-form/dialog-form.component"

@Component({
	selector: "app-edit",
	templateUrl: "./edit.component.html",
	styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<DialogFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { id: string },
		private booksService: BooksService
	) {}

	fg = new FormGroup({
		title: new FormControl(""),
		author: new FormControl(""),
		pages: new FormControl(0),
		read: new FormControl(false),
		description: new FormControl(""),
	})

	onSubmit(): void {
		const { title, author, pages, read, description } = this.fg.value
		this.booksService
			.updateBook(this.data.id, title!, author!, pages!, read!, description!)
			.subscribe({
				next: () => {
					this.booksService.readBooks().subscribe()
				},
			})
	}

	ngOnInit(): void {
		this.booksService
			.getBooksValue()
			.pipe(
				map((books) => books.filter((book: Book) => book.id === this.data.id)),
				tap((books: Book[]) => {
					this.fg.setValue({
						title: books[0].title,
						author: books[0].author,
						pages: books[0].pages,
						read: books[0].read,
						description: books[0].description,
					})
				})
			)
			.subscribe()
	}
}
