import { Component, Inject } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog"
import { take } from "rxjs"
import { BooksService } from "src/app/core/services/books.service"
import { noWhiteSpaceValidator } from "../../validators/no-white-space.validator"

@Component({
	selector: "app-dialog-form",
	templateUrl: "./dialog-form.component.html",
	styleUrls: ["./dialog-form.component.css"],
})
export class DialogFormComponent {
	constructor(
		public dialogRef: MatDialogRef<DialogFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private booksService: BooksService
	) {}

	fg = new FormGroup({
		title: new FormControl("", [noWhiteSpaceValidator()]),
		author: new FormControl("", [noWhiteSpaceValidator()]),
		pages: new FormControl(0, [Validators.min(1)]),
		read: new FormControl(false),
		description: new FormControl(""),
	})

	onSubmit() {
		if (!this.fg.valid) {
			return
		}

		const { title, author, pages, read, description } = this.fg.value

		if (!title || !author) {
			return
		}

		this.booksService
			.createBook(title, author, pages!, read!, description!)

			.subscribe({
				next: () => {
					this.booksService.readBooks().pipe(take(1)).subscribe()
				},
				error: (err) => console.log(err),
			})
	}
}
