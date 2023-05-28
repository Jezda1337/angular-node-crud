import { Component, Input } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { BooksService } from "src/app/core/services/books.service"
import { Book } from "../../interfaces/book.model"
import { EditComponent } from "../edit/edit.component"

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.css"],
})
export class CardComponent {
	@Input() book!: Book

	constructor(private booksService: BooksService, private dialog: MatDialog) {}

	editBook(id: string) {
		const dialogRef = this.dialog.open(EditComponent, {
			data: { id },
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
}
