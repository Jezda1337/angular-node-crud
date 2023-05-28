import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

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
import { MatTooltipModule } from "@angular/material/tooltip"

// components
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { CardComponent } from "./components/card/card.component"
import { DialogFormComponent } from "./components/dialog-form/dialog-form.component"
import { EditComponent } from "./components/edit/edit.component"
import { SigninComponent } from "./components/signin/signin.component"
import { SignupComponent } from "./components/signup/signup.component"

@NgModule({
	declarations: [
		SigninComponent,
		SignupComponent,
		DialogFormComponent,
		EditComponent,
		CardComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
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
		MatTooltipModule,

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
		MatTooltipModule,

		FormsModule,
		ReactiveFormsModule,

		SigninComponent,
		SignupComponent,
		CardComponent,
	],
})
export class SharedModule {}
