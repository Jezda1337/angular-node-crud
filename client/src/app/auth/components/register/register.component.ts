import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Component } from "@angular/core";

@Component({
	selector: "auth-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.css"],
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatSelectModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatIconModule,
	],
})
export class RegisterComponent {
	constructor(private fb: FormBuilder) {}

	form = this.fb.nonNullable.group({
		username: ["", Validators.required],
		email: ["", Validators.required],
		password: ["", Validators.required],
	})
}
