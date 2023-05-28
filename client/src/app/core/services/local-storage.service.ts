import { Injectable } from "@angular/core"
import { Observable, Subject } from "rxjs"

@Injectable({
	providedIn: "root",
})
export class LocalStorageService {
	private storageSubject = new Subject<string>()

	constructor() {}

	setItem(key: string, value: any): void {
		localStorage.setItem(key, JSON.stringify(value))
		this.storageSubject.next(key)
	}

	getItem(key: string): any {
		return JSON.parse(localStorage.getItem(key)!)
	}

	removeItem(key: string): void {
		localStorage.removeItem(key)
		this.storageSubject.next(key)
	}

	watchStorage(): Observable<any> {
		return this.storageSubject.asObservable()
	}
}
