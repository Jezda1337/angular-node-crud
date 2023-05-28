import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable, tap } from "rxjs"
import { Book } from "src/app/shared/interfaces/book.model"
import { environment } from "src/environment/environment"

@Injectable({
	providedIn: "root",
})
export class BooksService {
	constructor(private http: HttpClient) {}

	#books = new BehaviorSubject<Book[]>([])

	getBooksValue(): Observable<Book[]> {
		return this.#books.asObservable()
	}

	createBook(
		title: string,
		author: string,
		pages: number,
		read?: boolean,
		description?: string
	): Observable<Book> {
		return this.http.post<Book>(
			`${environment.BACKEDN_API}/books`,
			{
				title,
				author,
				pages,
				read,
				description,
			},
			{ withCredentials: true }
		)
	}

	readBooks(): Observable<Book[]> {
		return this.http
			.get<Book[]>(`${environment.BACKEDN_API}/books`, {
				withCredentials: true,
			})
			.pipe(
				tap((books: Book[]) => {
					this.#books.next(books)
				})
			)
	}

	updateBook(
		bookId: string,
		title: string,
		author: string,
		pages: number,
		read: boolean,
		description: string
	): Observable<Book> {
		return this.http.put<Book>(
			`${environment.BACKEDN_API}/books/${bookId}`,
			{
				title,
				author,
				pages,
				read,
				description,
			},
			{ withCredentials: true }
		)
	}
	deleteBook(bookId: string): Observable<Book> {
		return this.http.delete<Book>(
			`${environment.BACKEDN_API}/books/${bookId}`,
			{
				withCredentials: true,
			}
		)
	}
}
