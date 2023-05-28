import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"

// angular material modules
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatDialogModule } from "@angular/material/dialog"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatTableModule } from "@angular/material/table"
import { MatTabsModule } from "@angular/material/tabs"
import { MatToolbarModule } from "@angular/material/toolbar"

// components
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { DialogFormComponent } from "./components/dialog-form/dialog-form.component"
import { SigninComponent } from "./components/signin/signin.component"
import { SignupComponent } from "./components/signup/signup.component";
import { EditComponent } from './components/edit/edit.component'

@NgModule({
	declarations: [SigninComponent, SignupComponent, DialogFormComponent, EditComponent],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatTabsModule,
		MatTableModule,
		MatDialogModule,
		MatCheckboxModule,
		MatCardModule,

		FormsModule,
		ReactiveFormsModule,
	],
	exports: [
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatTabsModule,
		MatTableModule,
		MatDialogModule,
		MatCheckboxModule,
		MatCardModule,

		FormsModule,
		ReactiveFormsModule,

		SigninComponent,
		SignupComponent,
	],
})
export class SharedModule {}
